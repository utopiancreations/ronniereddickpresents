import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageHero = () => {
    const [slides, setSlides] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [formData, setFormData] = useState({ title: '', description: '', mediaUrl: '', mediaType: 'image', link: '' });
    const [file, setFile] = useState(null);

    useEffect(() => {
        fetchSlides();
    }, []);

    const fetchSlides = async () => {
        const result = await axios.get('/api/hero');
        setSlides(result.data);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleAddOrUpdateSlide = async (e) => {
        e.preventDefault();

        let mediaUrl = formData.mediaUrl;
        if (file) {
            const uploadData = new FormData();
            uploadData.append('image', file);
            const res = await axios.post('/upload', uploadData);
            mediaUrl = res.data.filePath;
        }

        const slideData = { ...formData, mediaUrl };

        if (isEditing) {
            await axios.put(`/api/hero/${currentItem.id}`, slideData);
        } else {
            await axios.post('/api/hero', slideData);
        }

        fetchSlides();
        resetForm();
    };

    const handleEdit = (item) => {
        setIsEditing(true);
        setCurrentItem(item);
        setFormData(item);
    };

    const handleDelete = async (id) => {
        await axios.delete(`/api/hero/${id}`);
        fetchSlides();
    };

    const resetForm = () => {
        setIsEditing(false);
        setCurrentItem(null);
        setFormData({ title: '', description: '', mediaUrl: '', mediaType: 'image', link: '' });
        setFile(null);
    };

    return (
        <div className="card mt-4">
            <div className="card-header">
                <h3>{isEditing ? 'Edit Slide' : 'Add New Slide'}</h3>
            </div>
            <div className="card-body">
                <form onSubmit={handleAddOrUpdateSlide} className="mb-4">
                    <input className="form-control mb-2" type="text" name="title" placeholder="Title" value={formData.title} onChange={handleInputChange} />
                    <input className="form-control mb-2" type="text" name="description" placeholder="Description" value={formData.description} onChange={handleInputChange} />
                    <select className="form-select mb-2" name="mediaType" value={formData.mediaType} onChange={handleInputChange}>
                        <option value="image">Image</option>
                        <option value="video">Video</option>
                    </select>
                    <label className="form-label">Background Media</label>
                    <input className="form-control mb-2" type="file" name="imageFile" onChange={handleFileChange} />
                    <small>Current Media URL: {formData.mediaUrl}</small>
                    <input className="form-control mt-2 mb-2" type="text" name="link" placeholder="Link (e.g., /contact)" value={formData.link} onChange={handleInputChange} />
                    <button type="submit" className="btn btn-primary me-2">{isEditing ? 'Update' : 'Add'} Slide</button>
                    {isEditing && <button type="button" className="btn btn-secondary" onClick={resetForm}>Cancel</button>}
                </form>
                <ul className="list-group">
                    {slides.map(s => (
                        <li key={s.id} className="list-group-item d-flex justify-content-between align-items-center">
                            {s.title}
                            <div>
                                <button onClick={() => handleEdit(s)} className="btn btn-sm btn-info me-2">Edit</button>
                                <button onClick={() => handleDelete(s.id)} className="btn btn-sm btn-danger">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ManageHero;

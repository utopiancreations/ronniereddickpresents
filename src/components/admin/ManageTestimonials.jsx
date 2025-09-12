import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageTestimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [formData, setFormData] = useState({ name: '', company: '', quote: '', image: '' });
    const [file, setFile] = useState(null);

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        const result = await axios.get('/api/testimonials');
        setTestimonials(result.data);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleAddOrUpdateTestimonial = async (e) => {
        e.preventDefault();

        let imageUrl = formData.image;
        if (file) {
            const uploadData = new FormData();
            uploadData.append('image', file);
            const res = await axios.post('/upload', uploadData);
            imageUrl = res.data.filePath;
        }

        const testimonialData = { ...formData, image: imageUrl };

        if (isEditing) {
            await axios.put(`/api/testimonials/${currentItem.id}`, testimonialData);
        } else {
            await axios.post('/api/testimonials', testimonialData);
        }

        fetchTestimonials();
        resetForm();
    };

    const handleEdit = (item) => {
        setIsEditing(true);
        setCurrentItem(item);
        setFormData({
            name: item.name,
            company: item.company,
            quote: item.quote,
            image: item.image
        });
    };

    const handleDelete = async (id) => {
        await axios.delete(`/api/testimonials/${id}`);
        fetchTestimonials();
    };

    const resetForm = () => {
        setIsEditing(false);
        setCurrentItem(null);
        setFormData({ name: '', company: '', quote: '', image: '' });
        setFile(null);
    };

    return (
        <div className="card mt-4">
            <div className="card-header">
                <h3>{isEditing ? 'Edit Testimonial' : 'Add New Testimonial'}</h3>
            </div>
            <div className="card-body">
                <form onSubmit={handleAddOrUpdateTestimonial} className="mb-4">
                    <input className="form-control mb-2" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
                    <input className="form-control mb-2" type="text" name="company" placeholder="Company" value={formData.company} onChange={handleInputChange} />
                    <textarea className="form-control mb-2" name="quote" placeholder="Quote" value={formData.quote} onChange={handleInputChange}></textarea>
                    <label className="form-label">Client Image</label>
                    <input className="form-control mb-2" type="file" name="imageFile" onChange={handleFileChange} />
                    <small>Current Image: {formData.image}</small>
                    <button type="submit" className="btn btn-primary me-2">{isEditing ? 'Update' : 'Add'} Testimonial</button>
                    {isEditing && <button type="button" className="btn btn-secondary" onClick={resetForm}>Cancel</button>}
                </form>
                <ul className="list-group">
                    {testimonials.map(t => (
                        <li key={t.id} className="list-group-item d-flex justify-content-between align-items-center">
                            {t.name} - {t.company}
                            <div>
                                <button onClick={() => handleEdit(t)} className="btn btn-sm btn-info me-2">Edit</button>
                                <button onClick={() => handleDelete(t.id)} className="btn btn-sm btn-danger">Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ManageTestimonials;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditModal from './EditModal';
import ManageEvents from './ManageEvents';

const ManageTalent = () => {
    const [talent, setTalent] = useState([]);
    const [services, setServices] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [formData, setFormData] = useState({ 
        name: '', bio: '', mainImage: '', instagram: '', twitter: '', 
        tiktok: '', bluesky: '', snapchat: '', isExpanded: false, specialties: [] 
    });
    const [file, setFile] = useState(null);
    const [showEventModal, setShowEventModal] = useState(false);
    const [selectedTalentForEvents, setSelectedTalentForEvents] = useState(null);

    useEffect(() => {
        fetchTalent();
        fetchServices();
    }, []);

    const fetchTalent = async () => {
        const result = await axios.get('/api/talent');
        setTalent(result.data);
    };

    const fetchServices = async () => {
        const result = await axios.get('/api/services');
        setServices(result.data);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSpecialtyChange = (slug) => {
        const specialties = formData.specialties.includes(slug)
            ? formData.specialties.filter(s => s !== slug)
            : [...formData.specialties, slug];
        setFormData({ ...formData, specialties });
    };
    
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleAddOrUpdateTalent = async (e) => {
        e.preventDefault();
        
        let imageUrl = formData.mainImage;
        if (file) {
            const uploadData = new FormData();
            uploadData.append('image', file);
            const res = await axios.post('/upload', uploadData);
            imageUrl = res.data.filePath;
        }

        const { mainImage, ...restData } = formData;
        const talentData = {
            ...restData,
            images: { main: imageUrl },
            socials: { 
                instagram: formData.instagram, 
                twitter: formData.twitter,
                tiktok: formData.tiktok,
                bluesky: formData.bluesky,
                snapchat: formData.snapchat
            },
            events: isEditing ? currentItem.events : []
        };

        if (isEditing) {
            await axios.put(`/api/talent/${currentItem.id}`, talentData);
        } else {
            await axios.post('/api/talent', talentData);
        }
        
        fetchTalent();
        resetForm();
    };

    const handleEdit = (item) => {
        setIsEditing(true);
        setCurrentItem(item);
        setFormData({
            name: item.name,
            bio: item.bio,
            isExpanded: item.isExpanded || false,
            mainImage: item.images.main,
            instagram: item.socials.instagram || '',
            twitter: item.socials.twitter || '',
            tiktok: item.socials.tiktok || '',
            bluesky: item.socials.bluesky || '',
            snapchat: item.socials.snapchat || '',
            specialties: item.specialties || []
        });
    };

    const handleDelete = async (id) => {
        await axios.delete(`/api/talent/${id}`);
        fetchTalent();
    };

    const resetForm = () => {
        setIsEditing(false);
        setCurrentItem(null);
        setFormData({ 
            name: '', bio: '', mainImage: '', instagram: '', twitter: '', 
            tiktok: '', bluesky: '', snapchat: '', isExpanded: false, specialties: []
        });
        setFile(null);
    };

    const handleManageEvents = (talent) => {
        setSelectedTalentForEvents(talent);
        setShowEventModal(true);
    };

    const handleCloseEventModal = () => {
        setShowEventModal(false);
        setSelectedTalentForEvents(null);
    };

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3>{isEditing ? 'Edit Talent' : 'Add New Talent'}</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleAddOrUpdateTalent} className="mb-4">
                        {/* ... other form fields ... */}
                        <input className="form-control mb-2" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
                        <textarea className="form-control mb-2" name="bio" placeholder="Bio" value={formData.bio} onChange={handleInputChange}></textarea>
                        <label className="form-label">Main Image</label>
                        <input className="form-control mb-2" type="file" name="imageFile" onChange={handleFileChange} />
                        <small>Current Image: {formData.mainImage}</small>
                        <input className="form-control mt-2 mb-2" type="text" name="instagram" placeholder="Instagram URL" value={formData.instagram} onChange={handleInputChange} />
                        <input className="form-control mb-2" type="text" name="twitter" placeholder="Twitter URL" value={formData.twitter} onChange={handleInputChange} />
                        <input className="form-control mb-2" type="text" name="tiktok" placeholder="TikTok URL" value={formData.tiktok} onChange={handleInputChange} />
                        <input className="form-control mb-2" type="text" name="bluesky" placeholder="Bluesky URL" value={formData.bluesky} onChange={handleInputChange} />
                        <input className="form-control mb-2" type="text" name="snapchat" placeholder="Snapchat URL" value={formData.snapchat} onChange={handleInputChange} />
                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" name="isExpanded" id="isExpandedCheck" checked={formData.isExpanded} onChange={handleInputChange} />
                            <label className="form-check-label" htmlFor="isExpandedCheck">
                                Expanded Profile (Gives talent their own page)
                            </label>
                        </div>

                        <h5>Specialties</h5>
                        <div className="specialties-grid mb-3">
                            {services.map(service => (
                                <div key={service.slug} className="form-check">
                                    <input 
                                        className="form-check-input" 
                                        type="checkbox" 
                                        id={`service-${service.slug}`}
                                        checked={formData.specialties.includes(service.slug)}
                                        onChange={() => handleSpecialtyChange(service.slug)}
                                    />
                                    <label className="form-check-label" htmlFor={`service-${service.slug}`}>
                                        {service.title}
                                    </label>
                                </div>
                            ))}
                        </div>

                        <button type="submit" className="btn btn-primary me-2">{isEditing ? 'Update' : 'Add'} Talent</button>
                        {isEditing && <button type="button" className="btn btn-secondary" onClick={resetForm}>Cancel</button>}
                    </form>
                    <ul className="list-group">
                        {talent.map(t => (
                            <li key={t.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {t.name}
                                <div>
                                    {t.isExpanded && <button onClick={() => handleManageEvents(t)} className="btn btn-sm btn-success me-2">Events</button>}
                                    <button onClick={() => handleEdit(t)} className="btn btn-sm btn-info me-2">Edit</button>
                                    <button onClick={() => handleDelete(t.id)} className="btn btn-sm btn-danger">Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <EditModal show={showEventModal} handleClose={handleCloseEventModal} title={`Manage Events for ${selectedTalentForEvents?.name}`}>
                {selectedTalentForEvents && (
                    <ManageEvents 
                        talent={selectedTalentForEvents} 
                        onEventsUpdated={fetchTalent} 
                        handleClose={handleCloseEventModal} 
                    />
                )}
            </EditModal>
        </>
    );
};

export default ManageTalent;
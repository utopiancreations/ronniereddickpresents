import React, { useState } from 'react';
import axios from 'axios';

const ManageEvents = ({ talent, onEventsUpdated, handleClose }) => {
    const [events, setEvents] = useState(talent.events || []);
    const [formData, setFormData] = useState({ name: '', date: '', location: '' });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddEvent = async (e) => {
        e.preventDefault();
        const newEvent = { id: Date.now(), ...formData };
        const updatedEvents = [...events, newEvent];
        await updateTalentEvents(updatedEvents);
        setEvents(updatedEvents);
        setFormData({ name: '', date: '', location: '' });
    };

    const handleDeleteEvent = async (eventId) => {
        const updatedEvents = events.filter(event => event.id !== eventId);
        await updateTalentEvents(updatedEvents);
        setEvents(updatedEvents);
    };

    const updateTalentEvents = async (updatedEvents) => {
        const updatedTalent = { ...talent, events: updatedEvents };
        await axios.put(`/api/talent/${talent.id}`, updatedTalent);
        onEventsUpdated(); // Notify parent to refetch all talent
    };

    return (
        <div>
            <form onSubmit={handleAddEvent} className="mb-4">
                <input className="form-control mb-2" type="text" name="name" placeholder="Event Name" value={formData.name} onChange={handleInputChange} required />
                <input className="form-control mb-2" type="datetime-local" name="date" value={formData.date} onChange={handleInputChange} required />
                <input className="form-control mb-2" type="text" name="location" placeholder="Location" value={formData.location} onChange={handleInputChange} required />
                <button type="submit" className="btn btn-primary">Add Event</button>
            </form>
            <ul className="list-group">
                {events.map(event => (
                    <li key={event.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <strong>{event.name}</strong><br />
                            <small>{new Date(event.date).toLocaleString()} at {event.location}</small>
                        </div>
                        <button onClick={() => handleDeleteEvent(event.id)} className="btn btn-sm btn-danger">Delete</button>
                    </li>
                ))}
            </ul>
            <button onClick={handleClose} className="btn btn-secondary mt-3">Close</button>
        </div>
    );
};

export default ManageEvents;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageAbout = () => {
    const [aboutData, setAboutData] = useState({ ronnie: '', company: '' });

    useEffect(() => {
        fetchAbout();
    }, []);

    const fetchAbout = async () => {
        const result = await axios.get('/api/about');
        setAboutData(result.data);
    };

    const handleInputChange = (e) => {
        setAboutData({ ...aboutData, [e.target.name]: e.target.value });
    };

    const handleUpdateAbout = async (e) => {
        e.preventDefault();
        await axios.put('/api/about', aboutData);
        alert('About page content updated!');
    };

    return (
        <div className="card mt-4">
            <div className="card-header">
                <h3>Manage About Page</h3>
            </div>
            <div className="card-body">
                <form onSubmit={handleUpdateAbout}>
                    <div className="mb-3">
                        <label className="form-label">Ronnie's Bio</label>
                        <textarea
                            className="form-control"
                            name="ronnie"
                            rows="5"
                            value={aboutData.ronnie}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Company Bio/Mission</label>
                        <textarea
                            className="form-control"
                            name="company"
                            rows="5"
                            value={aboutData.company}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Update Content</button>
                </form>
            </div>
        </div>
    );
};

export default ManageAbout;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageSubmissions = () => {
    const [submissions, setSubmissions] = useState({ contact: [], inquiries: [] });

    useEffect(() => {
        fetchSubmissions();
    }, []);

    const fetchSubmissions = async () => {
        const result = await axios.get('/api/forms');
        setSubmissions(result.data);
    };

    return (
        <div className="card mt-4">
            <div className="card-header">
                <h3>Form Submissions</h3>
            </div>
            <div className="card-body">
                <h4>Contact Form</h4>
                <ul className="list-group mb-4">
                    {submissions.contact.map(s => (
                        <li key={s.id} className="list-group-item">
                            <strong>{s.name}</strong> ({s.email}) - {new Date(s.received).toLocaleString()}
                            <p>{s.message}</p>
                        </li>
                    ))}
                </ul>
                <h4>Inquiry Form</h4>
                <ul className="list-group">
                    {submissions.inquiries.map(s => (
                        <li key={s.id} className="list-group-item">
                            <strong>{s.name}</strong> ({s.email}) - {new Date(s.received).toLocaleString()}
                            <p><strong>Referred By:</strong> {s.referredBy}</p>
                            <p><strong>Looking For:</strong> {s.lookingFor}</p>
                            <p><strong>Budget:</strong> {s.budget}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ManageSubmissions;

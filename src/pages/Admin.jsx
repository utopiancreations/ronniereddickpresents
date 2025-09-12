import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ManageTalent from '../components/admin/ManageTalent';
import ManageTestimonials from '../components/admin/ManageTestimonials';
import ManageAbout from '../components/admin/ManageAbout';
import ManageSubmissions from '../components/admin/ManageSubmissions';
import ManageHero from '../components/admin/ManageHero';
import './Admin.css';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('talent');
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'talent':
                return <ManageTalent />;
            case 'testimonials':
                return <ManageTestimonials />;
            case 'about':
                return <ManageAbout />;
            case 'submissions':
                return <ManageSubmissions />;
            case 'hero':
                return <ManageHero />;
            default:
                return <ManageTalent />;
        }
    };

    return (
        <div className="admin-grid-container page-fade-in">
            <header className="admin-header">
                <h1>Admin Dashboard</h1>
                <button onClick={handleLogout} className="btn btn-danger">Logout</button>
            </header>

            <nav className="admin-nav">
                <button className={`nav-link ${activeTab === 'hero' ? 'active' : ''}`} onClick={() => setActiveTab('hero')}>Hero Carousel</button>
                <button className={`nav-link ${activeTab === 'talent' ? 'active' : ''}`} onClick={() => setActiveTab('talent')}>Talent</button>
                <button className={`nav-link ${activeTab === 'testimonials' ? 'active' : ''}`} onClick={() => setActiveTab('testimonials')}>Testimonials</button>
                <button className={`nav-link ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>About Page</button>
                <button className={`nav-link ${activeTab === 'submissions' ? 'active' : ''}`} onClick={() => setActiveTab('submissions')}>Submissions</button>
            </nav>

            <main className="admin-content-area">
                {renderContent()}
            </main>
        </div>
    );
};

export default Admin;
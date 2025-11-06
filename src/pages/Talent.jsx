import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faTiktok, faSnapchatGhost } from '@fortawesome/free-brands-svg-icons';
import EditModal from '../components/admin/EditModal';
import './Talent.css';

const Talent = () => {
    const [talent, setTalent] = useState(null);
    const [error, setError] = useState(null);
    const [showBookingModal, setShowBookingModal] = useState(false);
    const [selectedTalent, setSelectedTalent] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '', referredBy: '', lookingFor: '', budget: '' });
    const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        const fetchTalent = async () => {
            try {
                const result = await axios.get('/api/talent');
                setTalent(result.data);
            } catch (err) {
                console.error('Error fetching talent:', err);
                setError('Failed to load talent. Please try again later.');
            }
        };

        fetchTalent();
    }, []);

    const handleBookClick = (t) => {
        setSelectedTalent(t);
        setFormData(prev => ({ ...prev, lookingFor: `Booking inquiry for ${t.name}` }));
        setShowBookingModal(true);
    };

    const handleModalClose = () => {
        setShowBookingModal(false);
        setSelectedTalent(null);
        setFormData({ name: '', email: '', message: '', referredBy: '', lookingFor: '', budget: '' });
    };

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const submissionData = { type: 'inquiries', ...formData };
        try {
            await axios.post('/api/forms', submissionData);
            alert('Thank you for your inquiry! We will get back to you soon.');
            handleModalClose();
        } catch (error) {
            alert('There was an error submitting your inquiry.');
        }
    };

    const socialIcons = {
        instagram: faInstagram,
        twitter: faTwitter,
        tiktok: faTiktok,
        snapchat: faSnapchatGhost,
    };

    if (error) {
        return (
            <div className="loading-container">
                <div className="text-center" style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>
                    {error}
                </div>
            </div>
        );
    }

    if (!talent) {
        return (
            <div className="loading-container">
                <motion.div
                    className="loading-spinner"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
            </div>
        );
    }

    return (
        <>
            <motion.div 
                className="talent-page centered-layout"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.h1 
                    ref={headerRef}
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 50 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    Our Talent
                </motion.h1>
                <div className="row">
                    {talent.map((t, index) => (
                        <motion.div 
                            key={t.id} 
                            id={t.id} 
                            className="col-md-4 mb-4"
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={headerInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <motion.div 
                                className="card talent-profile-card"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.img 
                                    src={t.images.main} 
                                    className="card-img-top" 
                                    alt={t.name}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <div className="card-body">
                                    <motion.h5 
                                        className="card-title"
                                        initial={{ opacity: 0 }}
                                        animate={headerInView ? { opacity: 1 } : {}}
                                        transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                                    >
                                        {t.name}
                                    </motion.h5>
                                    <motion.p 
                                        className="card-text"
                                        initial={{ opacity: 0 }}
                                        animate={headerInView ? { opacity: 1 } : {}}
                                        transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                                    >
                                        {t.bio.substring(0, 120)}...
                                    </motion.p>
                                    <motion.div 
                                        className="social-links mb-3"
                                        initial={{ opacity: 0 }}
                                        animate={headerInView ? { opacity: 1 } : {}}
                                        transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                                    >
                                        {Object.entries(t.socials).map(([platform, link]) =>
                                            link && socialIcons[platform] && (
                                                <motion.a
                                                    key={platform}
                                                    href={link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.2, color: "#d4af37" }}
                                                    whileTap={{ scale: 0.9 }}
                                                >
                                                    <FontAwesomeIcon icon={socialIcons[platform]} />
                                                </motion.a>
                                            )
                                        )}
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={headerInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                                    >
                                        {t.isExpanded ? (
                                            <Link to={`/talent/${t.id}`} className="btn btn-outline-light me-2">
                                                <motion.span
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Learn More
                                                </motion.span>
                                            </Link>
                                        ) : null}
                                        <motion.button 
                                            onClick={() => handleBookClick(t)} 
                                            className="btn btn-primary"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Book {t.name.split(' ')[0]}
                                        </motion.button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <EditModal show={showBookingModal} handleClose={handleModalClose} title={`Book ${selectedTalent?.name}`}>
                <form onSubmit={handleFormSubmit}>
                    <input type="text" name="name" placeholder="Your Name" className="form-control mb-2" value={formData.name} onChange={handleFormChange} required />
                    <input type="email" name="email" placeholder="Your Email" className="form-control mb-2" value={formData.email} onChange={handleFormChange} required />
                    <textarea name="lookingFor" className="form-control mb-2" value={formData.lookingFor} onChange={handleFormChange} rows="3"></textarea>
                    <input type="text" name="budget" placeholder="Your Budget" className="form-control mb-2" value={formData.budget} onChange={handleFormChange} />
                    <textarea name="message" placeholder="Additional Message" className="form-control mb-2" value={formData.message} onChange={handleFormChange} rows="4"></textarea>
                    <button type="submit" className="btn btn-primary">Submit Inquiry</button>
                </form>
            </EditModal>
        </>
    );
};

export default Talent;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import VideoHero from '../components/VideoHero';
import Lightbox from '../components/Lightbox';
import WhatWeOffer from '../components/WhatWeOffer';
import './Home.css';
import girls from '../assets/images/ronnieandthegirls.jpg';
import ft1 from '../assets/images/fixedtalent1.png';
import ft2 from '../assets/images/fixedtalent2.png';
import ft3 from '../assets/images/fixedtalent3.jpg';
import ft4 from '../assets/images/fixedtalent4.png';
import ft5 from '../assets/images/fixedtalent5.jpg';
import ft6 from '../assets/images/fixedtalent6.png';
import ft7 from '../assets/images/fiixedtalent7.jpg';
import ft8 from '../assets/images/fixedtalent8.jpg';
import ft9 from '../assets/images/fixedtalent9.jpg';

const Home = () => {
    const galleryImages = [girls, ft1, ft2, ft3, ft4, ft5, ft6, ft7, ft8, ft9];

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [lightboxIndex, setLightboxIndex] = useState(null);
    const [missionRef, missionInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [talentRef, talentInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [galleryRef, galleryInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [aboutRes, talentRes, testimonialsRes] = await Promise.all([
                    axios.get('/api/about'),
                    axios.get('/api/talent'),
                    axios.get('/api/testimonials')
                ]);

                setData({
                    about: aboutRes.data,
                    talent: talentRes.data,
                    testimonials: testimonialsRes.data
                });
            } catch (err) {
                console.error('Error fetching home data:', err);
                setError('Failed to load page data. Please try again later.');
            }
        };

        fetchData();
    }, []);

    const openLightbox = (index) => {
        setLightboxIndex(index);
    };

    const closeLightbox = () => {
        setLightboxIndex(null);
    };

    const handleNext = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    };

    const handlePrevious = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
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

    if (!data) {
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
        <motion.div 
            className="home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            {/* Hero Section */}
            <section className="hero-section">
                <VideoHero />
            </section>

            {/* Mission Statement */}
            <motion.section 
                ref={missionRef}
                className="mission-section text-center centered-layout"
                initial={{ opacity: 0, y: 50 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={missionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Our Mission
                </motion.h2>
                <motion.p 
                    className="lead"
                    initial={{ opacity: 0, y: 30 }}
                    animate={missionInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    {data.about.company}
                </motion.p>
            </motion.section>

            {/* Featured Talent */}
            <motion.section 
                ref={talentRef}
                className="featured-talent centered-layout"
                initial={{ opacity: 0 }}
                animate={talentInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
            >
                <motion.h2 
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={talentInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Featured Talent
                </motion.h2>
                <div className="row">
                    {data.talent.slice(0, 2).map((t, index) => (
                        <motion.div 
                            key={t.id} 
                            className="col-md-6"
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            animate={talentInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 + (index * 0.2) }}
                            whileHover={{ y: -10, scale: 1.02 }}
                        >
                            <div className="card talent-card">
                                <motion.img 
                                    src={t.images.main} 
                                    className="card-img-top" 
                                    alt={t.name}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{t.name}</h5>
                                    <p className="card-text">{t.bio.substring(0, 100)}...</p>
                                    <motion.a 
                                        href={`/talent#${t.id}`} 
                                        className="btn btn-outline-light"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Learn More
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* What We Offer */}
            <WhatWeOffer />

            {/* Gallery */}
            <motion.section 
                ref={galleryRef}
                className="home-gallery centered-layout"
                initial={{ opacity: 0 }}
                animate={galleryInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
            >
                <motion.h2 
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Highlights
                </motion.h2>
                <div className="masonry-grid">
                    {galleryImages.map((src, idx) => (
                        <motion.figure
                            key={idx}
                            className="masonry-item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 * idx }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            onClick={() => openLightbox(idx)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={src} alt={`Highlight ${idx + 1}`} loading="lazy" />
                            <div className="image-overlay">
                                <FontAwesomeIcon icon={faExpandAlt} />
                            </div>
                        </motion.figure>
                    ))}
                </div>
            </motion.section>

            {/* Testimonials */}
            <motion.section 
                ref={testimonialsRef}
                className="testimonials centered-layout"
                initial={{ opacity: 0 }}
                animate={testimonialsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
            >
                <motion.h2 
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    What Our Clients Say
                </motion.h2>
                <div className="row">
                    {data.testimonials.map((testimonial, index) => (
                        <motion.div 
                            key={testimonial.id} 
                            className="col-md-6"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={testimonialsInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 + (index * 0.2) }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="card testimonial-card">
                                <div className="card-body">
                                    <motion.p 
                                        className="card-text"
                                        initial={{ opacity: 0 }}
                                        animate={testimonialsInView ? { opacity: 1 } : {}}
                                        transition={{ duration: 0.6, delay: 0.6 + (index * 0.2) }}
                                    >
                                        "{testimonial.quote}"
                                    </motion.p>
                                    <motion.footer 
                                        className="blockquote-footer"
                                        initial={{ opacity: 0 }}
                                        animate={testimonialsInView ? { opacity: 1 } : {}}
                                        transition={{ duration: 0.6, delay: 0.8 + (index * 0.2) }}
                                    >
                                        {testimonial.name}, <cite title="Source Title">{testimonial.company}</cite>
                                    </motion.footer>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            <Lightbox
                isOpen={lightboxIndex !== null}
                imageSrc={lightboxIndex !== null ? galleryImages[lightboxIndex] : ''}
                imageAlt={lightboxIndex !== null ? `Highlight ${lightboxIndex + 1}` : ''}
                onClose={closeLightbox}
                onNext={handleNext}
                onPrevious={handlePrevious}
            />
        </motion.div>
    );
};

export default Home;


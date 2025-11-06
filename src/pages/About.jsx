import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import girls from '../assets/images/ronnieandthegirls.jpg';

const About = () => {
    const [about, setAbout] = useState(null);
    const [error, setError] = useState(null);
    const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const [ronnieRef, ronnieInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const [companyRef, companyInView] = useInView({ threshold: 0.2, triggerOnce: true });

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const result = await axios.get('/api/about');
                setAbout(result.data);
            } catch (err) {
                console.error('Error fetching about data:', err);
                setError('Failed to load about information. Please try again later.');
            }
        };

        fetchAbout();
    }, []);

    if (error) {
        return (
            <div className="loading-container">
                <div className="text-center" style={{ color: 'var(--gold)', fontSize: '1.2rem' }}>
                    {error}
                </div>
            </div>
        );
    }

    if (!about) {
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
            className="about-page centered-layout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.section 
                ref={heroRef}
                className="about-hero mb-5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8 }}
            >
                <motion.img 
                    src={girls} 
                    className="img-fluid w-100 rounded shadow" 
                    alt="Ronnie and the girls"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.section>
            
            <motion.div 
                ref={ronnieRef}
                className="row align-items-center mb-5"
                initial={{ opacity: 0 }}
                animate={ronnieInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
            >
                <motion.div 
                    className="col-md-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={ronnieInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={ronnieInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Ronnie Reddick
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={ronnieInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        {about.ronnie}
                    </motion.p>
                </motion.div>
                <motion.div 
                    className="col-md-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={ronnieInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.img 
                        src={about.ronnieImage} 
                        className="img-fluid rounded shadow-lg" 
                        alt="Ronnie Reddick"
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
            </motion.div>
            
            <motion.hr 
                className="my-5"
                initial={{ scaleX: 0 }}
                animate={ronnieInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{ transformOrigin: "center" }}
            />
            
            <motion.div 
                ref={companyRef}
                className="row align-items-center"
                initial={{ opacity: 0 }}
                animate={companyInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
            >
                <motion.div 
                    className="col-md-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={companyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.img 
                        src={about.companyImage} 
                        className="img-fluid rounded shadow-lg" 
                        alt="Performance Stage"
                        whileHover={{ scale: 1.05, rotate: -1 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
                <motion.div 
                    className="col-md-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={companyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={companyInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Ronnie Reddick Presents
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={companyInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        {about.company}
                    </motion.p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default About;

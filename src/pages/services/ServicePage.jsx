import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './ServicePage.css';
import { mockServices, mockData } from '../../data/mockData';

const ServicePage = () => {
    const { serviceName } = useParams();
    const [service, setService] = useState(null);
    const [featuredTalent, setFeaturedTalent] = useState([]);
    const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        setTimeout(() => {
            const foundService = mockServices.find(s => s.slug === serviceName);
            setService(foundService);

            if (foundService) {
                // Get random talent for this service
                const shuffledTalent = [...mockData.talent].sort(() => 0.5 - Math.random());
                setFeaturedTalent(shuffledTalent.slice(0, 3));
            }
        }, 300);
    }, [serviceName]);

    if (!service) return (
        <div className="loading-container">
            <motion.div 
                className="loading-spinner"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );

    return (
        <motion.div 
            className="service-page centered-layout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div 
                ref={headerRef}
                className="service-header text-center mb-5"
                initial={{ opacity: 0, y: 50 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {service.title}
                </motion.h1>
                <motion.p 
                    className="lead"
                    initial={{ opacity: 0, y: 30 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {service.description}
                </motion.p>
            </motion.div>

            <motion.div 
                ref={featuresRef}
                className="service-features mb-5"
                initial={{ opacity: 0 }}
                animate={featuresInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
            >
                <motion.h2 
                    className="text-center mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    What We Provide
                </motion.h2>
                <div className="row">
                    {service.features.map((feature, index) => (
                        <motion.div 
                            key={index} 
                            className="col-md-6 mb-3"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            animate={featuresInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                        >
                            <div className="feature-item">
                                <i className="fas fa-check-circle me-3"></i>
                                <span>{feature}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {featuredTalent.length > 0 && (
                <motion.div 
                    className="featured-talent-section mb-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.h2 
                        className="text-center mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Featured Talent
                    </motion.h2>
                    <div className="row">
                        {featuredTalent.map((t, index) => (
                            <motion.div 
                                key={t.id} 
                                className="col-md-4 mb-4"
                                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.8 + (index * 0.1) }}
                                whileHover={{ y: -10 }}
                            >
                                <Link to={t.isExpanded ? `/talent/${t.id}` : '/talent'}>
                                    <motion.div 
                                        className="card talent-card"
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
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{t.name}</h5>
                                        </div>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
            
            <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
            >
                <Link to="/contact" className="btn btn-primary btn-lg">
                    <motion.span
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Inquire About This Service
                    </motion.span>
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default ServicePage;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { mockServices } from '../data/mockData';

const Services = () => {
    const [services, setServices] = useState([]);
    const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [cardsRef, cardsInView] = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        setTimeout(() => {
            setServices(mockServices);
        }, 300);
    }, []);

    return (
        <motion.div 
            className="services-page centered-layout"
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
                What We Offer
            </motion.h1>
            <div className="row" ref={cardsRef}>
                {services.map((service, index) => (
                    <motion.div 
                        key={index} 
                        className="col-md-4 mb-4"
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={cardsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <Link to={`/services/${service.slug}`} className="card-link">
                            <motion.div 
                                className="card h-100 text-center service-card"
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="card-body d-flex flex-column align-items-center justify-content-center">
                                    <motion.h5 
                                        className="card-title"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                                    >
                                        {service.title}
                                    </motion.h5>
                                    <motion.p 
                                        className="card-text mt-3"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                                    >
                                        {service.description}
                                    </motion.p>
                                    <motion.div 
                                        className="service-arrow mt-auto"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={cardsInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                                    >
                                        <i className="fas fa-arrow-right"></i>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Services;

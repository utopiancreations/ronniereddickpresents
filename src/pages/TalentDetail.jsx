import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './TalentDetail.css';
import { mockData } from '../data/mockData';

const TalentDetail = () => {
    const { id } = useParams();
    const [talent, setTalent] = useState(null);
    const [profileRef, profileInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [eventsRef, eventsInView] = useInView({ threshold: 0.1, triggerOnce: true });

    useEffect(() => {
        setTimeout(() => {
            const foundTalent = mockData.talent.find(t => t.id === parseInt(id));
            setTalent(foundTalent);
        }, 300);
    }, [id]);

    if (!talent) return (
        <div className="loading-container">
            <motion.div 
                className="loading-spinner"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );

    const now = new Date();
    const upcomingEvents = talent.events.filter(e => new Date(e.date) >= now).sort((a, b) => new Date(a.date) - new Date(b.date));
    const pastEvents = talent.events.filter(e => new Date(e.date) < now).sort((a, b) => new Date(b.date) - new Date(a.date));

    const socialIcons = {
        instagram: 'fab fa-instagram',
        twitter: 'fab fa-twitter',
        tiktok: 'fab fa-tiktok',
        bluesky: 'fab fa-bluesky',
        snapchat: 'fab fa-snapchat-ghost',
    };

    return (
        <motion.div 
            className="talent-detail-page centered-layout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div 
                ref={profileRef}
                className="row align-items-center mb-5"
                initial={{ opacity: 0 }}
                animate={profileInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
            >
                <motion.div 
                    className="col-md-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={profileInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <motion.img 
                        src={talent.images.main} 
                        className="img-fluid rounded shadow-lg talent-main-image" 
                        alt={talent.name}
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
                <motion.div 
                    className="col-md-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={profileInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={profileInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {talent.name}
                    </motion.h1>
                    <motion.p 
                        className="talent-bio"
                        initial={{ opacity: 0, y: 30 }}
                        animate={profileInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        {talent.bio}
                    </motion.p>
                    <motion.div 
                        className="social-links-detail mt-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={profileInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        {Object.entries(talent.socials).map(([platform, link]) => 
                            link && (
                                <motion.a 
                                    key={platform} 
                                    href={link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="social-link-item"
                                    whileHover={{ scale: 1.3, rotate: 10 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <i className={socialIcons[platform]}></i>
                                </motion.a>
                            )
                        )}
                    </motion.div>
                </motion.div>
            </motion.div>

            <motion.div 
                ref={eventsRef}
                className="events-section mt-5"
                initial={{ opacity: 0 }}
                animate={eventsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
            >
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={eventsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Upcoming Events
                </motion.h2>
                {upcomingEvents.length > 0 ? (
                    <motion.div 
                        className="events-grid"
                        initial={{ opacity: 0 }}
                        animate={eventsInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {upcomingEvents.map((event, index) => (
                            <motion.div 
                                key={event.id} 
                                className="event-card"
                                initial={{ opacity: 0, y: 50 }}
                                animate={eventsInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                <h5>{event.name}</h5>
                                <p className="event-date">
                                    {new Date(event.date).toLocaleDateString('en-US', { 
                                        weekday: 'long', 
                                        year: 'numeric', 
                                        month: 'long', 
                                        day: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </p>
                                <p className="event-location">{event.location}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.p 
                        className="no-events"
                        initial={{ opacity: 0 }}
                        animate={eventsInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        No upcoming events scheduled.
                    </motion.p>
                )}

                <motion.h2 
                    className="mt-5"
                    initial={{ opacity: 0, y: 30 }}
                    animate={eventsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    Past Events
                </motion.h2>
                {pastEvents.length > 0 ? (
                    <motion.div 
                        className="events-grid past-events"
                        initial={{ opacity: 0 }}
                        animate={eventsInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        {pastEvents.map((event, index) => (
                            <motion.div 
                                key={event.id} 
                                className="event-card past-event"
                                initial={{ opacity: 0, y: 30 }}
                                animate={eventsInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.9 + (index * 0.1) }}
                            >
                                <h5>{event.name}</h5>
                                <p className="event-date">
                                    {new Date(event.date).toLocaleDateString('en-US', { 
                                        weekday: 'long', 
                                        year: 'numeric', 
                                        month: 'long', 
                                        day: 'numeric' 
                                    })}
                                </p>
                                <p className="event-location">{event.location}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.p 
                        className="no-events"
                        initial={{ opacity: 0 }}
                        animate={eventsInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        No past events to show.
                    </motion.p>
                )}
            </motion.div>
        </motion.div>
    );
};

export default TalentDetail;

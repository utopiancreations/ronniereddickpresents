import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { mockData } from '../data/mockData';
import girls from '../assets/images/ronnieandthegirls.jpg';

const About = () => {
    const [about, setAbout] = useState(null);
    const [heroRef, heroInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const [ronnieRef, ronnieInView] = useInView({ threshold: 0.2, triggerOnce: true });
    const [companyRef, companyInView] = useInView({ threshold: 0.2, triggerOnce: true });

    useEffect(() => {
        setTimeout(() => {
            setAbout(mockData.about);
        }, 300);
    }, []);

    if (!about) return (
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

            {/* Company Intro Section - Moved to Top */}
            <motion.div
                ref={companyRef}
                className="row justify-content-center mb-5 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={companyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
            >
                <div className="col-md-10">
                    <h2 className="mb-4">Ronnie Reddick Presents</h2>
                    <p className="lead">
                        {about.company}
                    </p>
                </div>
            </motion.div>

            <motion.hr
                className="my-5"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ transformOrigin: "center" }}
            />

            <motion.div
                ref={ronnieRef}
                className="mb-5"
                initial={{ opacity: 0 }}
                animate={ronnieInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
            >
                {/* Bio Header & Intro with Image */}
                <div className="row align-items-center mb-5">
                    <div className="col-md-7">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            animate={ronnieInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Ronnie Reddick
                        </motion.h2>
                        <motion.h5
                            className="text-muted mb-4"
                            initial={{ opacity: 0, x: -30 }}
                            animate={ronnieInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {about.ronnie.roleTitle}
                        </motion.h5>
                        <motion.p
                            className="lead"
                            initial={{ opacity: 0, y: 20 }}
                            animate={ronnieInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {about.ronnie.intro}
                        </motion.p>
                    </div>
                    <div className="col-md-5">
                        <motion.img
                            src={about.companyImage}
                            className="img-fluid rounded shadow-lg"
                            alt="Ronnie Reddick"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={ronnieInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                        />
                    </div>
                </div>

                {/* Bio Sections Grid */}
                <div className="row">
                    {about.ronnie.sections.map((section, index) => (
                        <div className="col-md-6 mb-4" key={index}>
                            <motion.div
                                className="h-100 p-4 rounded border-start border-4 border-warning shadow-sm"
                                style={{ backgroundColor: '#1a1a1a', color: '#f0f0f0' }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={ronnieInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                                whileHover={{ y: -5 }}
                            >
                                <h5 className="fw-bold text-warning mb-3">{section.title}</h5>
                                <p dangerouslySetInnerHTML={{ __html: section.content }} className="mb-0" />
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Quote Section */}
                <motion.blockquote
                    className="blockquote custom-quote p-5 rounded mt-5 text-center shadow"
                    style={{ backgroundColor: '#1a1a1a', color: '#d4af37' }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={ronnieInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    <i className="fas fa-quote-left fa-2x mb-3 opacity-50"></i>
                    <p className="mb-4 fst-italic fs-4">"{about.ronnie.quote}"</p>
                    <footer className="blockquote-footer mt-3 text-white-50">Ronnie Reddick</footer>
                </motion.blockquote>
            </motion.div>

            <motion.hr
                className="my-5"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ transformOrigin: "center" }}
            />

            {/* Resume Section */}
            {about.resume && (
                <motion.div
                    className="resume-section mb-5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-center mb-4">Resume & Credits</h2>

                    <div className="row justify-content-center mb-4">
                        <div className="col-md-8 text-center">
                            <div className="d-flex justify-content-around flex-wrap resume-info">
                                <span><strong>Height:</strong> {about.resume.info.height}</span>
                                <span><strong>Eyes:</strong> {about.resume.info.eyes}</span>
                                <span><strong>Weight:</strong> {about.resume.info.weight}</span>
                                <span><strong>Hair:</strong> {about.resume.info.hair}</span>
                                <span><strong>{about.resume.info.affiliation}</strong></span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {about.resume.credits.map((category, index) => (
                            <div key={index} className="col-md-6 mb-4">
                                <h4 className="text-primary mb-3">{category.category}</h4>
                                <div className="table-responsive">
                                    <table className="table table-hover table-sm">
                                        <thead>
                                            <tr>
                                                <th>Project</th>
                                                <th>Role</th>
                                                <th>Company/Artist</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {category.items.map((item, idx) => (
                                                <tr key={idx}>
                                                    <td className="fw-bold">{item.project}</td>
                                                    <td>{item.role}</td>
                                                    <td>{item.company}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row mt-4">
                        <div className="col-12 text-center">
                            <div className="p-4 bg-light rounded shadow-sm">
                                <h4 className="mb-3">Special Skills</h4>
                                <p className="mb-0 lead">{about.resume.specialSkills}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};

export default About;

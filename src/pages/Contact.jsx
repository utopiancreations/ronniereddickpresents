import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formType, setFormType] = useState('contact'); // contact or inquiry
    const [inquiryData, setInquiryData] = useState({
        referredBy: '',
        lookingFor: '',
        budget: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    
    const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [formRef, formInView] = useInView({ threshold: 0.1, triggerOnce: true });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (formType === 'contact') {
            setFormData(prev => ({ ...prev, [name]: value }));
        } else {
            setInquiryData(prev => ({ ...prev, [name]: value }));
            if (name in formData) {
                setFormData(prev => ({ ...prev, [name]: value }));
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setSubmitStatus('success');
            setIsSubmitting(false);
            // Reset forms
            setFormData({ name: '', email: '', message: '' });
            setInquiryData({ referredBy: '', lookingFor: '', budget: '' });
            
            setTimeout(() => setSubmitStatus(''), 3000);
        }, 1500);
    };

    const renderInquiryFields = () => (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div 
                className="mb-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
            >
                <label htmlFor="referredBy" className="form-label">Who referred you?</label>
                <input type="text" className="form-control" id="referredBy" name="referredBy" value={inquiryData.referredBy} onChange={handleChange} />
            </motion.div>
            <motion.div 
                className="mb-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
            >
                <label htmlFor="lookingFor" className="form-label">What are you looking for?</label>
                <textarea className="form-control" id="lookingFor" name="lookingFor" rows="3" value={inquiryData.lookingFor} onChange={handleChange}></textarea>
            </motion.div>
            <motion.div 
                className="mb-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
            >
                <label htmlFor="budget" className="form-label">What is your budget?</label>
                <input type="text" className="form-control" id="budget" name="budget" value={inquiryData.budget} onChange={handleChange} />
            </motion.div>
        </motion.div>
    );

    return (
        <motion.div 
            className="contact-page centered-layout"
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
                Get In Touch
            </motion.h1>
            <div className="row justify-content-center">
                <div className="col-lg-9 col-md-10">
                    <motion.div 
                        className="text-center mb-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.button 
                            className={`btn ${formType === 'contact' ? 'btn-primary' : 'btn-outline-light'} mx-2`} 
                            onClick={() => setFormType('contact')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            General Contact
                        </motion.button>
                        <motion.button 
                            className={`btn ${formType === 'inquiry' ? 'btn-primary' : 'btn-outline-light'} mx-2`} 
                            onClick={() => setFormType('inquiry')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Booking Inquiry
                        </motion.button>
                    </motion.div>
                    
                    <motion.form 
                        ref={formRef}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 30 }}
                        animate={formInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="contact-form"
                    >
                        <motion.div 
                            className="mb-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={formInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </motion.div>
                        
                        <motion.div 
                            className="mb-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={formInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            <label htmlFor="email" className="form-label">Your Email</label>
                            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </motion.div>
                        
                        {formType === 'inquiry' && renderInquiryFields()}

                        <motion.div 
                            className="mb-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={formInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: formType === 'inquiry' ? 0.9 : 0.6 }}
                        >
                            <label htmlFor="message" className="form-label">Additional Message</label>
                            <textarea className="form-control" id="message" name="message" rows="5" value={formData.message} onChange={handleChange}></textarea>
                        </motion.div>
                        
                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={formInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: formType === 'inquiry' ? 1.0 : 0.7 }}
                        >
                            <motion.button 
                                type="submit" 
                                className="btn btn-primary submit-btn"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {isSubmitting ? (
                                    <motion.div 
                                        className="d-flex align-items-center justify-content-center"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        <motion.div 
                                            className="spinner-border spinner-border-sm me-2"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                        />
                                        Sending...
                                    </motion.div>
                                ) : (
                                    'Submit'
                                )}
                            </motion.button>
                        </motion.div>
                        
                        {submitStatus === 'success' && (
                            <motion.div 
                                className="alert alert-success mt-3 text-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                            >
                                <i className="fas fa-check-circle me-2"></i>
                                Thank you for your message! We will get back to you soon.
                            </motion.div>
                        )}
                    </motion.form>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;

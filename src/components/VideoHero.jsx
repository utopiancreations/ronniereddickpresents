import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './VideoHero.css';

const VideoHero = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.play().catch(err => {
                console.error('Video autoplay failed:', err);
            });
        }
    }, []);

    return (
        <div className="video-hero-container">
            <video
                ref={videoRef}
                className="video-hero"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            >
                <source src="/ronnieloopcompressed.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            <div className="video-hero-overlay">
                <motion.div
                    className="video-hero-content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        Ronnie Reddick Presents
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        Where artistry meets opportunity. Experience the future of entertainment with our premier talent management.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        <a 
                            href="/about" 
                            className="btn btn-primary video-hero-cta"
                        >
                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Learn More
                            </motion.span>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default VideoHero;

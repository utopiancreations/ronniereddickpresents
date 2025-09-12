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
                <source src="/ronnieloop_web.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            
        </div>
    );
};

export default VideoHero;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeroCarousel.css';
import { mockHeroSlides } from '../data/mockData';

const HeroCarousel = () => {
    const [slides, setSlides] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = React.useRef(null);

    useEffect(() => {
        setSlides(mockHeroSlides);
    }, []);

    useEffect(() => {
        // Force video play when component mounts or slide changes
        if (videoRef.current && currentSlide === 0) {
            const playVideo = async () => {
                try {
                    await videoRef.current.play();
                    console.log('Video started playing successfully');
                } catch (error) {
                    console.error('Video autoplay failed:', error);
                }
            };
            playVideo();
        }
    }, [currentSlide, videoLoaded]);

    const handleVideoLoad = () => {
        console.log('Video loaded successfully');
        setVideoLoaded(true);
    };

    const handleVideoError = (e) => {
        console.error('Video failed to load:', e);
        console.error('Video source:', e.target.src);
        // Video will fall back to poster image
    };

    return (
        <div className="hero-carousel-container">
            {slides.length > 0 && slides[currentSlide].mediaType === 'video' ? (
                // Direct video rendering for the first slide - just the video, no text
                <div className="video-slide-container">
                    <video 
                        ref={videoRef}
                        className="carousel-media" 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        preload="auto"
                        style={{ display: 'block' }}
                    >
                        <source src={slides[currentSlide].mediaUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ) : (
                // Regular Bootstrap Carousel for image slides with text
                <Carousel 
                    fade 
                    controls={true} 
                    indicators={true} 
                    interval={6000}
                    activeIndex={currentSlide}
                    onSelect={(selectedIndex) => setCurrentSlide(selectedIndex)}
                >
                    {slides.map((slide, index) => (
                        <Carousel.Item key={slide.id}>
                            <motion.div 
                                className="carousel-media" 
                                style={{ backgroundImage: `url(${slide.mediaUrl})` }}
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 8, ease: "linear" }}
                            />
                            <Carousel.Caption className="carousel-caption-custom">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`caption-${index}`}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -50 }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                    >
                                        <motion.h1
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.5 }}
                                        >
                                            {slide.title}
                                        </motion.h1>
                                        <motion.p
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.7 }}
                                        >
                                            {slide.description}
                                        </motion.p>
                                        <motion.div
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.9 }}
                                        >
                                            <Link 
                                                to={slide.link} 
                                                className="btn btn-primary hero-cta"
                                            >
                                                <motion.span
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    Learn More
                                                </motion.span>
                                            </Link>
                                        </motion.div>
                                    </motion.div>
                                </AnimatePresence>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )}
            
            {/* Floating elements for visual interest */}
            <motion.div 
                className="floating-element floating-element-1"
                animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div 
                className="floating-element floating-element-2"
                animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -3, 0]
                }}
                transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
        </div>
    );
};

export default HeroCarousel;

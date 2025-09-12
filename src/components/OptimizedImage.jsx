import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const handleLoad = () => setLoaded(true);
    const handleError = () => setError(true);

    if (img.complete) {
      setLoaded(true);
    } else {
      img.addEventListener('load', handleLoad);
      img.addEventListener('error', handleError);
    }

    return () => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleError);
    };
  }, [src]);

  if (error) {
    return (
      <div className={`optimized-image-error ${className}`} {...props}>
        <i className="fas fa-image"></i>
        <span>Failed to load image</span>
      </div>
    );
  }

  return (
    <motion.div className={`optimized-image-container ${className}`} {...props}>
      {!loaded && (
        <motion.img
          src={placeholder}
          alt=""
          className="optimized-image-placeholder"
          initial={{ opacity: 1 }}
          animate={{ opacity: loaded ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <motion.img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        className="optimized-image"
        style={{ opacity: loaded ? 1 : 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default OptimizedImage;

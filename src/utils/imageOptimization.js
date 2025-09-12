// Performance utilities for image optimization
export const createImageSizes = (width, quality = 80) => {
  const sizes = [400, 800, 1200, 1600];
  return sizes.map(size => ({
    size,
    url: `${width}?w=${size}&q=${quality}`,
    media: `(max-width: ${size}px)`
  }));
};

export const lazyLoadImages = () => {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
};

export const preloadImages = (imageUrls) => {
  imageUrls.forEach(url => {
    const img = new Image();
    img.src = url;
  });
};

export const optimizeImageSize = (file, maxWidth = 1200, quality = 0.8) => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      const ratio = Math.min(maxWidth / img.width, maxWidth / img.height);
      canvas.width = img.width * ratio;
      canvas.height = img.height * ratio;

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      canvas.toBlob(resolve, 'image/jpeg', quality);
    };

    img.src = URL.createObjectURL(file);
  });
};

export const webpSupport = (() => {
  const canvas = document.createElement('canvas');
  return canvas.toDataURL('image/webp').indexOf('webp') > -1;
})();

export const getOptimizedImageUrl = (url, width, format = 'auto') => {
  if (!url) return '';
  
  // If it's already optimized or external, return as is
  if (url.includes('?') || url.startsWith('http')) return url;
  
  const supportedFormat = format === 'auto' ? (webpSupport ? 'webp' : 'jpg') : format;
  return `${url}?w=${width}&f=${supportedFormat}&q=80`;
};

export default {
  createImageSizes,
  lazyLoadImages,
  preloadImages,
  optimizeImageSize,
  webpSupport,
  getOptimizedImageUrl
};

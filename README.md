# Ronnie Reddick Presents

A modern, elegant website for Ronnie Reddick Presents talent management and entertainment company. Built with React and featuring advanced animations, responsive design, and an immersive user experience.

## 🌟 Features

### ✨ **Visual Excellence**
- **Hero Video Background**: Seamless boomerang video loop without overlay text
- **Framer Motion Animations**: Smooth, professional animations throughout
- **Responsive Design**: Perfect display across all devices and screen sizes
- **Image Optimization**: Lazy loading and optimized image delivery
- **Lightbox Gallery**: Interactive photo gallery with overlay controls

### 📱 **Mobile-First Experience**
- **Custom Mobile Menu**: Elegant slide-down navigation with animated hamburger icon
- **Swipe Gestures**: Intuitive mobile interactions
- **Touch Optimized**: Responsive touch targets and animations
- **Body Scroll Lock**: Prevents background scrolling when menu is open

### 🎭 **Content Management**
- **Talent Showcase**: Dynamic talent profiles with social media integration
- **Services Overview**: Comprehensive service offerings with detailed pages
- **Testimonials**: Client feedback with animated presentation
- **Admin Panel**: Content management interface (in development)

### 🛠 **Technical Stack**
- **React 19.1.1**: Latest React with modern features
- **Vite 7.1.2**: Fast development and build tooling
- **Framer Motion 12.23.12**: Advanced animation library
- **Bootstrap 5.3.7**: Responsive grid and components
- **FontAwesome 6.0.0**: Professional icon library
- **React Router 7.8.2**: Client-side routing

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/utopiancreations/ronniereddickpresents.git
   cd ronniereddickpresents
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── assets/           # Images, videos, and static assets
│   ├── images/       # Talent photos and brand assets
│   └── videos/       # Hero background video
├── components/       # Reusable React components
│   ├── admin/        # Admin panel components
│   └── *.jsx         # Core components (Header, Footer, etc.)
├── data/            # Mock data and content management
├── pages/           # Route components
│   └── services/    # Service-specific pages
├── utils/           # Utility functions and helpers
└── styles/          # CSS files and styling
```

## 🎨 Key Components

### **HeroCarousel**
- Video background with autoplay loop
- Smooth transitions between slides
- Mobile-optimized controls

### **Header with Mobile Menu**
- Animated hamburger menu
- Staggered menu item animations
- Backdrop blur and scroll lock
- Swipe-to-close functionality

### **Talent Showcase**
- Top-justified image cropping
- Hover animations and transitions
- Social media integration
- Detailed talent profiles

### **Lightbox Gallery**
- Full-screen image viewing
- Keyboard navigation (ESC to close)
- Smooth fade animations
- Mobile-friendly controls

## 🔧 Development

### **Available Scripts**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### **Key Dependencies**
```json
{
  "react": "^19.1.1",
  "vite": "^7.1.2",
  "framer-motion": "^12.23.12",
  "react-bootstrap": "^2.10.10",
  "react-router-dom": "^7.8.2",
  "bootstrap": "^5.3.7",
  "react-intersection-observer": "^9.16.0"
}
```

## 🎯 Performance Features

- **Lazy Loading**: Images load only when needed
- **Code Splitting**: Optimized bundle sizes
- **Modern Build**: ES modules and tree shaking
- **Optimized Assets**: Compressed images and videos
- **Caching**: Browser caching for static assets

## 📱 Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+
- Mobile browsers with ES2020 support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Ronnie Reddick Presents.

## 🌐 Live Site

Visit the live website at: [Coming Soon]

---

**Built with ❤️ for Ronnie Reddick Presents**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

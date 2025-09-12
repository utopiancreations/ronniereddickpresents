import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';
import logo from '../assets/images/ronniepresents.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/talent', label: 'Talent' },
    { to: '/services', label: 'What We Offer' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <header className="custom-navbar">
      <div className="container centered-layout">
        <div className="navbar-content">
          <Link className="navbar-brand" to="/" onClick={closeMobileMenu}>
            <img src={logo} alt="Ronnie Reddick Presents" className="brand-logo" />
            <span className="visually-hidden">Ronnie Reddick Presents</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.to} className="nav-item">
                  <NavLink className="nav-link" to={item.to}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle mobile menu"
          >
            <motion.div
              className="hamburger-line"
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 8 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="hamburger-line"
              animate={{
                opacity: mobileMenuOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="hamburger-line"
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? -8 : 0,
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className="mobile-nav"
              initial={{ opacity: 0, maxHeight: 0, y: -20 }}
              animate={{ opacity: 1, maxHeight: '500px', y: 0 }} // Use a reasonable max-height
              exit={{ opacity: 0, maxHeight: 0, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <motion.ul
                className="mobile-nav-list"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.to}
                    className="mobile-nav-item"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.1 + (index * 0.05),
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <NavLink
                      className="mobile-nav-link"
                      to={item.to}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

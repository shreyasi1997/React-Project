import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact-us" style={styles.link}>Contact</Link>
        <Link to="/categories" style={styles.link}>Categories</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
        <Link to="/addcard" style={styles.link}>Add to Cart</Link>
        <Link to="/addwish" style={styles.link}>Add to Wishlist</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'rgb(255,193,7)', // Yellow color
    padding: '10px 50px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    color: '#333',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '8px 12px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  },
};

export default Header;

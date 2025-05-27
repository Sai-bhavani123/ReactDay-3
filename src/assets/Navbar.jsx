import React, { useState, useEffect } from 'react';

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 450;
  const isTabletOrDesktop = windowWidth >= 750;

  const navbarStyle = {
    backgroundColor: 'lightblue',
    width: '100%',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: isMobile ? 'center' : 'space-around',
    alignItems: 'center',
    margin: 0,
    padding: '10px 0',
    ...(isTabletOrDesktop && {
      position: 'fixed',
      top: 0,
      zIndex: 1,
    }),
  };

  const headingStyle = {
    fontSize: isMobile ? '20px' : '28px',
    marginBottom: isMobile ? '10px' : 0,
  };

  const linkContainerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    gap: isMobile ? '10px' : '30px',
    fontSize: isMobile ? '16px' : '22px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    fontSize: isMobile ? '1.1rem' : 'inherit',
  };

  return (
    <div style={navbarStyle}>
      <h1 style={headingStyle}>S B Architects</h1>
      <div style={linkContainerStyle}>
        <a href="#" style={linkStyle}>Home</a>
        <a href="#" style={linkStyle}>Products</a>
        <a href="#" style={linkStyle}>About</a>
        <a href="#" style={linkStyle}>Contacts</a>
      </div>
    </div>
  );
}

export default Navbar;

import { useState, useEffect } from "react";

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mapContainerStyle = {
    width: "100%",
    padding: isMobile ? "5px 2px" : "5px 1px",
  };

  const mapImageStyle = {
    marginTop: "20px",
    width: "100%",
  };

  const footerStyle = {
    padding: isMobile ? "5px 10px" : "10px 20px",
    backgroundColor: "#0e0e0f",
    textAlign: "center",
    color: "white",
  };

  return (
    <div>
      <div id="map" style={mapContainerStyle}>
        <img
          src="https://www.w3schools.com/w3images/map.jpg"
          alt="Map"
          style={mapImageStyle}
        />
      </div>
      <div id="footer" style={footerStyle}>
        <h2 style={{ fontSize: isMobile ? "18px" : "24px" }}>
          Powered by w3.css
        </h2>
      </div>
    </div>
  );
}

export default Footer;

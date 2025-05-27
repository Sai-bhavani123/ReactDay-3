import { useEffect, useState } from "react";

function Data() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const inputStyle = {
    display: "block",
    width: "100%",
    padding: isMobile ? "4px 0" : "8px 0",
    marginTop: isMobile ? 12 : 20,
    marginBottom: isMobile ? 8 : 10,
    lineHeight: "1.2rem",
    fontSize: isMobile ? "14px" : "16px",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    backgroundColor: "#0e0e0f",
    color: "white",
    padding: isMobile ? "5px 10px" : "7px 12px",
    cursor: "pointer",
    fontSize: isMobile ? "14px" : "16px",
    border: "none",
    borderRadius: "4px",
    marginTop: "10px",
    display: "inline-block",
  };

  const sectionStyle = {
    padding: isMobile ? "20px 10px" : "40px 20px",
    maxWidth: "600px",
    margin: "0 auto",
  };

  return (
    <div>
      <div id="contact" style={sectionStyle}>
        <p style={{ fontSize: isMobile ? "20px" : "24px", fontWeight: "bold" }}>Contact</p>
        <hr />
        <p style={{ fontSize: isMobile ? "14px" : "16px" }}>
          Let's get in touch and talk about your next project.
        </p>

        <div id="contactdetails">
          <input type="text" placeholder="Name" style={inputStyle} />
          <input type="email" placeholder="Email" style={inputStyle} />
          <input type="text" placeholder="Subject" style={inputStyle} />
          <input type="text" placeholder="Comment" style={inputStyle} />
          <span style={buttonStyle}>Send Message</span>
        </div>
      </div>
    </div>
  );
}

export default Data;

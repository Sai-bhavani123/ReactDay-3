// 

import { useEffect, useState } from "react";

function Aboutname() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 450;
  const isTablet = windowWidth > 450 && windowWidth <= 1024;
  const isDesktop = windowWidth > 1024;

  const aboutImageStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "repeat(1, 1fr)" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
    gap: "20px",
    padding: "5px 10px",
  };

  const imageCardStyle = {
    width: "100%",
  };

  const imageStyle = {
    width: "100%",
    borderRadius: "9px",
  };

  const contactButtonStyle = {
    display: "block",
    textAlign: "center",
    textDecoration: "none",
    backgroundColor: "rgb(193, 176, 230)",
    padding: "10px 0px",
    cursor: "pointer",
  };

  const teamData = [
    {
      img: "https://www.w3schools.com/w3images/team2.jpg",
      name: "John Doe",
      role: "CEO & Founder",
    },
    {
      img: "https://www.w3schools.com/w3images/team1.jpg",
      name: "Jane Doe",
      role: "Architect",
    },
    {
      img: "https://www.w3schools.com/w3images/team3.jpg",
      name: "Milk Ross",
      role: "Architect",
    },
    {
      img: "https://www.w3schools.com/w3images/team4.jpg",
      name: "Dan Star",
      role: "Architect",
    },
  ];

  return (
    <div>
      <div id="about">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        <div id="about_image" style={aboutImageStyle}>
          {teamData.map((member, index) => (
            <div id="images" style={imageCardStyle} key={index}>
              <img src={member.img} alt={member.name} style={imageStyle} />
              <h2>{member.name}</h2>
              <p>{member.role}</p>
              <p>
                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
              </p>
              <span
                style={contactButtonStyle}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "aqua")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "rgb(193, 176, 230)")}
              >
                Contact
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Aboutname;

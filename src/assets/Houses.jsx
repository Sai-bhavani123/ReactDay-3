import { useEffect, useState } from "react";

function Houses() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive logic
  const isMobile = windowWidth <= 450;
  const isTablet = windowWidth > 450 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;

  const bannerStyle = {
    width: "100%",
    marginBottom: "20px",
  };

  const bannerImgStyle = {
    width: "100%",
  };

  const bannerHeadingStyle = {
    fontSize: isMobile ? "18px" : "23px",
    textAlign: "center",
    marginTop: "10px",
  };

  const housesGridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "repeat(1, 1fr)" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
    gap: "20px",
  };

  const houseItemStyle = {
    width: "100%",
    position: "relative",
  };

  const houseImgStyle = {
    width: "100%",
    borderRadius: "5px",
  };

  const houseSpanStyle = {
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "black",
    color: "white",
    padding: "2px 10px",
    borderRadius: "5px",
    fontSize: "22px",
  };

  const houseData = [
    { img: "https://www.w3schools.com/w3images/house5.jpg", label: "Summer House" },
    { img: "https://www.w3schools.com/w3images/house2.jpg", label: "Brick House" },
    { img: "https://www.w3schools.com/w3images/house3.jpg", label: "Renovated" },
    { img: "https://www.w3schools.com/w3images/house4.jpg", label: "Barn House" },
    { img: "https://www.w3schools.com/w3images/house2.jpg", label: "Summer House" },
    { img: "https://www.w3schools.com/w3images/house5.jpg", label: "Brick House" },
    { img: "https://www.w3schools.com/w3images/house4.jpg", label: "Renovated" },
    { img: "https://www.w3schools.com/w3images/house3.jpg", label: "Barn House" },
  ];

  return (
    <div>
      <div id="banner" style={bannerStyle}>
        <img
          src="https://www.w3schools.com/w3images/architect.jpg"
          alt=""
          style={bannerImgStyle}
        />
        <h4 style={bannerHeadingStyle}>Projects</h4>
      </div>

      <div id="houses" style={housesGridStyle}>
        {houseData.map((house, index) => (
          <div id="house" style={houseItemStyle} key={index}>
            <img src={house.img} alt="" style={houseImgStyle} />
            <span style={houseSpanStyle}>{house.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Houses;

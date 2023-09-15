import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  CssBaseline,
  IconButton,
} from "@mui/material";
import { FaBars } from "react-icons/fa"; // Import React icon
import "./Header.css"; // Import CSS file
import { Link } from "react-scroll";

const Header = () => {
  // Styling for buttons
  const buttonStyle = {
    color: "black",
    textTransform: "none",
    fontWeight: "bold",
    margin: "10px",
  };

  // State to control the mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="static"
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          margin: "20px",
          marginBottom: "20px",
        }}
      >
        <Toolbar>
          {/* Logo */}
          <Typography
            variant="h6"
            className="logo"
            style={{
              flexGrow: 1,
              color: "black",
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >
            Travellers
          </Typography>

          {/* Mobile Menu Button */}
          <IconButton
            edge="start"
            color="black"
            aria-label="menu"
            className="menu-button"
            onClick={toggleMenu}
          >
            <FaBars className="menu-btn" />
          </IconButton>

          {/* Navigation Buttons */}
          <div className={`navbar-buttons ${menuOpen ? "open" : ""}`}>
            <Link
              to="reviews-section"
              smooth={true}
              duration={500}
              className="styled-button"
              style={buttonStyle}
              color="inherit"
            >
              Reviews
            </Link>
            <Link
              to="popular-travelers-section"
              smooth={true}
              duration={500}
              className="styled-button"
              style={buttonStyle}
              color="inherit"
            >
              People
            </Link>
            <Link
              to="community-section"
              smooth={true}
              duration={500}
              className="styled-button"
              style={buttonStyle}
              color="inherit"
            >
              Partners
            </Link>
            <Link
              to="feedback-section"
              smooth={true}
              duration={500}
              className="styled-button"
              style={buttonStyle}
              color="inherit"
            >
              Feedbacks
            </Link>
            <Link
              to="pricing-section"
              smooth={true}
              duration={500}
              className="styled-button"
              style={buttonStyle}
              color="inherit"
            >
              Pricing
            </Link>

            {/* Get The App Button */}
            <Button
              className="get-app"
              style={{
                ...buttonStyle,
                backgroundColor: "orange",
                marginLeft: "16px",
              }}
              variant="contained"
            >
              Get The App
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

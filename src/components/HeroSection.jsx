/* eslint-disable react/no-unescaped-entities */
import { Typography, Container, Grid, CssBaseline } from "@mui/material";
import Appstore from "../assets/Applestore.png"; // Import App Store image
import Googleplay from "../assets/Googleplay.png"; // Import Google Play image
import Mobile from "../assets/mobile.png"; // Import mobile image
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./HeroSection.css"; // Import CSS file

const Hero = () => {
  return (
    <>
      <CssBaseline />
      <div className="hero-container">
        {/* Container for the hero section */}
        <Container maxWidth="lg">
          {/* Grid layout for content */}
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              {/* Left-side content */}
              <Typography variant="h2" gutterBottom>
                Don't listen to
                <br />
                what they say,
                <br />
                Go see
              </Typography>
              <div className="orange-line"></div>
              <Typography variant="h8" gutterBottom>
                Your ultimate travel companion. Carries all the information{" "}
                <br />
                you need while traveling.
              </Typography>
              <div className="app-links">
                {/* App store download links */}
                <a href="https://example.com/app-store-link">
                  <img
                    src={Appstore}
                    alt="Download on App Store"
                    className="app-link"
                  />
                </a>
                <a href="https://example.com/google-play-link">
                  <img
                    src={Googleplay}
                    alt="Get it from Google Play"
                    className="app-link"
                  />
                </a>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Mobile Image */}
              <img src={Mobile} alt="Mobile" style={{ width: "100%" }} />
            </Grid>
          </Grid>
        </Container>
        <div className="bottom-background">
          <ArrowDownwardIcon className="arrow-icon" />
        </div>
      </div>
    </>
  );
};

export default Hero;

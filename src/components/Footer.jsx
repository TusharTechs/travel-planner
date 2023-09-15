import { Typography, Grid, Link, Box, InputBase, Button } from "@mui/material";
import "./Footer.css"; // Import CSS file
import Appstore from "../assets/Applestore.png";
import Googleplay from "../assets/Googleplay.png";
import Clutch from "../assets/clutch.png";
import Rating from "react-rating-stars-component";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FooterNavbar from "./FooterNavbar";

const Footer = () => {
  return (
    <footer id="reviews-section">
        {/* Section 1: Travel */}
      <Grid item xs={12} md={6}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          bgcolor="#ff4f0e"
          width="80%"
          margin="0 auto"
          borderRadius="20px"
          padding="20px"
          marginTop="50px"
          marginBottom="40px"
        >
          <Typography
            variant="h4"
            style={{ color: "#FFF", marginBottom: "10px", marginTop: "40px" }}
          >
            Download the Travellers Community App Now!
          </Typography>
          <Typography variant="body2" style={{ color: "#FFF" }}>
            Be the first one to explore one of the best travel applications
          </Typography>
          <Box display="flex" alignItems="center">
            <Link href="#" underline="none">
              <img
                src={Appstore}
                alt="Get it on App Store"
                width="150px"
                height="60px"
              />
            </Link>
            <Link href="#" underline="none">
              <img
                src={Googleplay}
                alt="Get it on Google Play"
                width="160px"
                height="120px"
              />
            </Link>
          </Box>
        </Box>
      </Grid>

      <div className="list-container">
        {/* Section 2: Company */}
        <Grid item xs={12} md={2} style={{ marginTop: "20px" }}>
          <Typography variant="h8" style={{ fontWeight: "bold" }}>
            Company
          </Typography>
          <ul>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Careers
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Press Info
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Features
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Successes
              </Link>
            </li>
          </ul>
        </Grid>

        {/* Section 3: Travellers */}
        <Grid item xs={12} md={2}>
          <Typography variant="h8" style={{ fontWeight: "bold" }}>
            Travellers
          </Typography>
          <ul>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Why Travellers
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Enterprise
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Customer Stories
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Security
              </Link>
            </li>
          </ul>
        </Grid>

        {/* Section 4: Resource */}
        <Grid item xs={12} md={2} style={{ marginTop: "60px" }}>
          <Typography variant="h8" style={{ fontWeight: "bold" }}>
            Resources
          </Typography>
          <ul>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Download
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Guides
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Events
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Developers
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                App Directory
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Partners
              </Link>
            </li>
          </ul>
        </Grid>

        {/* Section 5: Extras */}
        <Grid item xs={12} md={2} style={{ marginTop: "10px" }}>
          <Typography variant="h8" style={{ fontWeight: "bold" }}>
            Extras
          </Typography>
          <ul>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Podcast
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Travellers Shop
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Travellers At Work
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Travellers Fund
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Integrations
              </Link>
            </li>
          </ul>
        </Grid>

        {/* Section 6: Subscribe */}
        <div className="subscribe-container">
          <Grid item xs={12} md={2}>
            <Typography variant="h8" style={{ fontWeight: "bold" }}>
              Subscribe
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              borderRadius="4px"
              paddingTop="10px"
            >
              <InputBase
                placeholder="Email address"
                fullWidth
                inputProps={{
                  style: {
                    paddingLeft: "8px",
                    border: "1px dotted black",
                    borderRadius: "5px",
                  },
                }}
              />
              <Button
                variant="contained"
                style={{ backgroundColor: "orange", color: "white" }}
              >
                <ArrowForwardIcon />
              </Button>
            </Box>
          </Grid>

          {/* Section 7: Rating */}
          <Grid item xs={12} md={6} style={{ marginTop: "30px" }}>
            <Typography variant="h8" style={{ fontWeight: "bold" }}>
              8/10
            </Typography>
            <br />
            <Typography variant="h8" style={{ fontWeight: "bold" }}>
              Overall rating
            </Typography>
            <br />
            <Rating
              count={5}
              value={4}
              size={24}
              activeColor="#FF9800"
              edit={false}
            />
          </Grid>

          {/* Section 8: Clutch Rating */}
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <div
                style={{
                  display: "flex",
                  marginRight: "80px",
                  marginTop: "20px",
                }}
              >
                <img
                  src={Clutch}
                  alt="Clutch logo"
                  width="30px"
                  height="30px"
                />
                <Typography
                  variant="h8"
                  style={{
                    margin: "10px",
                    marginTop: "2px",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  4.5 Rating on Clutch
                </Typography>
              </div>
            </Box>
          </Grid>
        </div>
      </div>
      <FooterNavbar /> {/* Include the FooterNavbar component */}
    </footer>
  );
};

export default Footer;

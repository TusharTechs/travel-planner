/* eslint-disable react/no-unescaped-entities */
import { Typography, Divider, Grid } from "@mui/material";
import "./PopularTravelers.css"; // Import CSS file
import mobileImg from "../assets/mobile.jpg"; // Import mobile image
import user1 from "../assets/image1.jpg"; // Import user profile images
import user2 from "../assets/image2.jpg";
import user3 from "../assets/image3.jpg";
import user4 from "../assets/image4.jpg";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const PopularTravelers = () => {
  return (
    <div className="popular-text" id="popular-travelers-section">
      {/* Container for popular travelers section */}
      <Grid container spacing={2} className="popular-travelers-container">
        {/* Grid layout for content */}
        <Grid item xs={12} md={6}>
          {/* Left-side content */}
          <Typography
            variant="h8"
            style={{ color: "#777", fontWeight: "bold" }}
          >
            POPULAR TRAVELLERS
          </Typography>
          <Typography variant="h4" style={{ marginBottom: "10px" }}>
            Know the people you're <br /> going to meet
          </Typography>
          <Divider
            sx={{
              borderTop: "2px solid orange",
              width: "4%",
              marginBottom: "20px",
            }}
          />
          <Typography variant="body1">
            Have a quick conversation anytime you need your <br /> fellow
            travellers you're going to travel with.
          </Typography>
          <div className="user-images" style={{ marginBottom: "20px" }}>
            {/* Container for user profile images */}
            <div className="user-image" style={{ zIndex: 1 }}>
              <img src={user1} alt="User 1" />
            </div>
            <div
              className="user-image overlap"
              style={{ marginLeft: "-14px", zIndex: 2 }}
            >
              <img src={user2} alt="User 2" />
            </div>
            <div
              className="user-image overlap"
              style={{ marginLeft: "-14px", zIndex: 3 }}
            >
              <img src={user3} alt="User 3" />
            </div>
            <div
              className="user-image overlap"
              style={{ marginLeft: "-14px", zIndex: 4 }}
            >
              <img src={user4} alt="User 4" />
            </div>
            <div style={{ zIndex: 5 }}>
              <AddCircleIcon
                style={{
                  marginLeft: "-16px",
                  marginTop: "3px",
                  fontSize: 24,
                  color: "orange",
                  cursor: "pointer",
                }}
              />{" "}
              {/* Use the AddCircle icon */}
            </div>
          </div>
          <Typography variant="body1">
            With one simple click you can know who you can have <br /> as your
            travel buddy.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Right-side content */}
          <div className="mobile-img-container">
            <img src={mobileImg} alt="Mobile Image" className="mobile-image" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default PopularTravelers;

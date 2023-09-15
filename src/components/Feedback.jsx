/* eslint-disable react/no-unescaped-entities */
import { Container, Typography, CssBaseline } from "@mui/material";
import QRCodeIcon from "@mui/icons-material/QrCode";
import EventIcon from "@mui/icons-material/Event";
import MemoryIcon from "@mui/icons-material/Memory";
import TravelerImg from "../assets/traveler.png";
import "./Feedback.css"; // Import CSS file for additional custom styling
import user1 from "../assets/image1.jpg";

const Feedback = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" className="feedback-container" id="feedback-section">
        <div className="row">
          <div className="traveler-image">
            <img src={TravelerImg} alt="Traveler Image" />
            <div className="user1-rectangle">
              <img src={user1} alt="User 1" />
              <div className="user1-text">
                <p>
                  Every day is a new day, and you'll never be able to find
                  happiness if you don't travel to new places around the world.
                </p>
                <p className="author">- Luke James</p>
              </div>
            </div>
          </div>

          <div className="content-container">
            <div className="feedback-text">
              <Typography
                variant="h8"
                style={{ color: "#777", fontWeight: "bold" }}
              >
                GET CONNECTED
              </Typography>
              <Typography variant="h4">
                Share your memories
                <br /> with your travel buddies
              </Typography>
              <div className="divider"></div>
            </div>
            <div className="feature-container">
              {/* Feature 1: Sign Up */}
              <div className="feature">
                <div className="icon-circle">
                  <QRCodeIcon />
                </div>
                <div>
                  <Typography variant="h7" fontWeight="bold">
                    Sign Up
                  </Typography>
                  <Typography variant="body2">
                    Make an account and login to keep yourself <br /> updated on
                    the travelers' platform.
                  </Typography>
                </div>
              </div>
              {/* Feature 2: Create Events */}
              <div className="feature">
                <div className="icon-circle">
                  <EventIcon />
                </div>
                <div>
                  <Typography variant="h7" fontWeight="bold">
                    Create Events
                  </Typography>
                  <Typography variant="body2">
                    Create an event to gather your fellow travelers <br /> and
                    get to know them.
                  </Typography>
                </div>
              </div>
              {/* Feature 3: Share Memories */}
              <div className="feature">
                <div className="icon-circle">
                  <MemoryIcon />
                </div>
                <div>
                  <Typography variant="h7" fontWeight="bold">
                    Share Memories
                  </Typography>
                  <Typography variant="body2">
                    Upload and share stories with your fellow <br /> travelers
                    anytime.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Feedback;

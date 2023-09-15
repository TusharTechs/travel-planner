import { Typography, Container, CssBaseline, Box } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import userData from "./userData"; // Import user data
import tourData from "./tourData"; // Import tour data
import "./Community.css"; // Import CSS file

const Community = () => {
  return (
    <>
      <CssBaseline />
      <Container
        id="community-section"
        maxWidth="lg"
        style={{ textAlign: "center", marginTop: "80px" }}
      >
        <Typography variant="h6" style={{ color: "#777", fontWeight: "bold" }}>
          BUILD UP A COMMUNITY
        </Typography>
        <Typography variant="h4" paragraph>
          Join the biggest community of Travellers
        </Typography>
        <Box
          borderBottom="2px solid red"
          width="3%"
          marginBottom="100px"
          mx="auto"
        ></Box>

        <div className="card-container background-image">
          <div className="yellow-box">
            <div className="user-card user-1">
              <div className="profile-image-container">
                <img
                  src={userData[0].profileImage}
                  alt={`Profile image for ${userData[0].name}`}
                  className="profile-image"
                />
              </div>
              <Typography variant="h5" gutterBottom>
                {userData[0].name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {userData[0].country}
              </Typography>
            </div>
          </div>
          <div className="orange-box">
            <div className="tour-card">
              <img
                src={tourData[0].image}
                alt={`Tour image for ${tourData[0].place}`}
                className="tour-image"
              />
              <Typography variant="h8" gutterBottom>
                {tourData[0].place}
              </Typography>
              <div className="user-images">
                {tourData[0].users.map((user, userIndex) => (
                  <div key={userIndex} className="user-image-container">
                    <img
                      src={user.image}
                      alt={`Profile image for ${user.name}`}
                      className="tour-user-image"
                    />
                    {userIndex === tourData[0].users.length - 1 && (
                      <div className="plus">
                        <AddCircleOutline className="plus-icon" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {userData.slice(1, 4).map((user, userIndex) => (
              <div
                className={`user-card user-${userIndex + 2}`}
                key={userIndex}
              >
                <div className="profile-image-container">
                  <img
                    src={user.profileImage}
                    alt={`Profile image for ${user.name}`}
                    className="profile-image"
                  />
                </div>
                <Typography variant="h5" gutterBottom>
                  {user.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {user.country}
                </Typography>
              </div>
            ))}
          </div>
          <div className="yellow-box">
            <div className="user-card user-5">
              <div className="profile-image-container">
                <img
                  src={userData[4].profileImage}
                  alt={`Profile image for ${userData[4].name}`}
                  className="profile-image"
                />
              </div>
              <Typography variant="h5" gutterBottom>
                {userData[4].name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {userData[4].country}
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Community;

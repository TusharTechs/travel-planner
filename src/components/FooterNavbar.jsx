import { Box, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.css"; // Import CSS file

const FooterNavbar = () => {
  return (
    <Box
      className="footer-navbar"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="20px"
      paddingTop="80px"
    >
      <div className="bottom-logo">
        {/* Logo Link */}
        <Link
          href="#"
          color="inherit"
          underline="hover"
          style={{ marginLeft: "80px", fontSize: "28px", fontWeight: "bold" }}
        >
          Travellers
        </Link>
      </div>
      <div>
        {/* Bottom Navigation Links */}
        <Link
          href="#"
          color="inherit"
          underline="hover"
          style={{ marginRight: "20px", fontSize: "14px", fontWeight: "bold" }}
        >
          Reviews
        </Link>
        <Link
          href="#"
          color="inherit"
          underline="hover"
          style={{ marginRight: "20px", fontSize: "14px", fontWeight: "bold" }}
        >
          People
        </Link>
        <Link
          href="#"
          color="inherit"
          underline="hover"
          style={{ marginRight: "20px", fontSize: "14px", fontWeight: "bold" }}
        >
          Partners
        </Link>
        <Link
          href="#"
          color="inherit"
          underline="hover"
          style={{ marginRight: "20px", fontSize: "14px", fontWeight: "bold" }}
        >
          Feedbacks
        </Link>
        <Link
          href="#"
          color="inherit"
          underline="hover"
          style={{ marginRight: "20px", fontSize: "14px", fontWeight: "bold" }}
        >
          Pricing
        </Link>
      </div>
      <div>
        {/* Social Media Icons */}
        <Box
          display="flex"
          alignItems="center"
          className="social-icons"
          style={{ marginRight: "120px" }}
        >
          {/* Facebook Icon */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="40px"
            height="40px"
            borderRadius="50%"
            bgcolor="#3b5998"
            marginRight="10px"
          >
            <FacebookIcon style={{ color: "#fff" }} />
          </Box>
          {/* Instagram Icon */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="40px"
            height="40px"
            borderRadius="50%"
            bgcolor="#e4405f"
            marginRight="10px"
          >
            <InstagramIcon style={{ color: "#fff" }} />
          </Box>
          {/* Twitter Icon */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="40px"
            height="40px"
            borderRadius="50%"
            bgcolor="#55acee"
            marginRight="10px"
          >
            <TwitterIcon style={{ color: "#fff" }} />
          </Box>
          {/* YouTube Icon */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="40px"
            height="40px"
            borderRadius="50%"
            bgcolor="#ff0000"
          >
            <YouTubeIcon style={{ color: "#fff" }} />
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default FooterNavbar;

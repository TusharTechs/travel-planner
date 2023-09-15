/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

import { Typography, Divider, Grid, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./PricingTable.css";

const PricingTable = () => {
  const [isMonthlyBilling, setIsMonthlyBilling] = useState(true);

  const toggleBillingCycle = () => {
    setIsMonthlyBilling((prevIsMonthlyBilling) => !prevIsMonthlyBilling);
  };

  return (
    <div className="pricing-table-container" id="pricing-section">
      <Typography variant="h8" style={{ color: "#777", fontWeight: "bold" }}>
        PRICING TABLE
      </Typography>
      <Typography variant="h4" style={{ color: "black" }}>
        Choose the plan that's right for you
      </Typography>
      <Divider sx={{ borderTop: "2px solid orange" }} />

      <div className="price-background">
        <div className="billing-toggle">
          <Button
            variant={isMonthlyBilling ? "outlined" : "contained"}
            color="primary"
            onClick={() => setIsMonthlyBilling(true)}
          >
            Bill Monthly
          </Button>
          <div
            className={`toggle-button ${isMonthlyBilling ? "active" : ""}`}
            onClick={toggleBillingCycle}
          >
            <div
              className={`toggle-button-circle ${
                isMonthlyBilling ? "active" : ""
              }`}
            />
          </div>
          <Button
            variant={!isMonthlyBilling ? "outlined" : "contained"}
            color="primary"
            onClick={() => setIsMonthlyBilling(false)}
          >
            Bill Annually
          </Button>
        </div>

        {/* Pricing cards */}
        <Grid container spacing={2}>
          <div className="pricing-cards">
            {/* Card 1 */}
            <Grid item xs={12} md={4}>
              <div className="pricing-card">
                <Typography variant="h8">
                  <span style={{ fontSize: "30px" }}>$29</span> /month
                </Typography>{" "}
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  Standard
                </Typography>
                <Typography variant="body1" style={{ color: "grey" }}>
                  All the basics for business that are just getting started.
                </Typography>
                <ul className="features">
                  <li>
                    <CheckCircleIcon sx={{ color: "green" }} /> Organizes your
                    travel plans
                  </li>
                  <li>
                    <CheckCircleIcon sx={{ color: "green" }} /> Find places near
                    hotel
                  </li>
                  <li>
                    <CheckCircleIcon sx={{ color: "green" }} /> Tallies and
                    displays travel stats
                  </li>
                </ul>
                <center>
                  <Button
                    variant="outlined"
                    color="secondary"
                    style={{ marginTop: "50px" }}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Get started
                  </Button>
                </center>
              </div>
            </Grid>

            {/* Card 2 */}
            <Grid item xs={12} md={4}>
              <div className="pricing-card">
                <Typography variant="h8">
                  <span style={{ fontSize: "30px" }}>$99</span> /month
                </Typography>{" "}
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  Essentials
                </Typography>
                <Typography variant="body1" style={{ color: "grey" }}>
                  Advanced features for traveling that are needed.
                </Typography>
                <ul className="features">
                  <li>
                    <CheckCircleIcon sx={{ color: "green" }} /> Tracks reward
                    programs
                  </li>
                  <li>
                    <CheckCircleIcon sx={{ color: "green" }} /> Find places near
                    hotel
                  </li>
                  <li>
                    <CheckCircleIcon sx={{ color: "green" }} /> Find alternative
                    flights
                  </li>
                  <li>
                    <CheckCircleIcon sx={{ color: "green" }} /> Shows
                    transportation options
                  </li>
                </ul>
                <center>
                  <Button
                    variant="outlined"
                    color="secondary"
                    style={{ marginTop: "20px" }}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Get started
                  </Button>
                </center>
              </div>
            </Grid>

            {/* Card 3 */}
            <Grid item xs={12} md={4}>
              <div className="pricing-card">
                <Typography variant="h8">
                  <span style={{ fontSize: "30px" }}>$129</span> /month
                </Typography>{" "}
                <Typography
                  variant="subtitle1"
                  style={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  Premium
                </Typography>
                <Typography variant="body1" style={{ color: "grey" }}>
                  Advanced features for pros who need more customization.
                </Typography>
                <ul className="features">
                  <li>
                    <CheckCircleIcon sx={{ color: "green" }} /> Country-specific
                    travel info
                  </li>
                  <li>
                    <CheckCircleIcon sx={{ color: "green" }} /> Find better
                    hotels
                  </li>
                  <li>
                    <CheckCircleIcon sx={{ color: "green" }} /> Shows security
                    wait times
                  </li>
                  <li>
                    <CheckCircleIcon sx={{ color: "green" }} /> Tracks reward
                    programs
                  </li>
                </ul>
                <center>
                  <Button
                    variant="outlined"
                    color="secondary"
                    style={{ marginTop: "20px" }}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Get started
                  </Button>
                </center>
              </div>
            </Grid>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default PricingTable;

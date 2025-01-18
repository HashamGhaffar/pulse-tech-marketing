"use client";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { localColorTheme } from "@/_utils/themes";

const MarketingExpertise: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "60px 20px",
            sm: "80px 40px",
            md: "90px 60px",
            lg: "120px 100px",
            xl: "140px 120px",
          },
          backgroundImage: "url(./bgMarketingExpertise.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          background: `linear-gradient(180deg, ${localColorTheme.deepPurple} 25.61%, ${localColorTheme.midnightBlue} 100%)`,
        }}
      >
        <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={7}></Grid>
            <Grid item xs={12} md={5}></Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default MarketingExpertise;

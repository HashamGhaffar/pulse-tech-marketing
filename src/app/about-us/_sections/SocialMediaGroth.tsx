"use client";
import React from "react";
import { Box, Grid } from "@mui/material";
import { localColorTheme, localFontSize } from "@/_utils/themes";
import { Typography } from "@mui/material";
import Image from "next/image";
import pngs from "@/_assets/pngs";

const SocialMediaGroth: React.FC = () => {
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
          borderTop: `1px solid ${localColorTheme.white}`,
          background: `linear-gradient(180deg, ${localColorTheme.cosmicNavy} 18.67%, ${localColorTheme.shadowAmethyst} 100%)`,
        }}
      >
        <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
          <Grid
            sx={{ justifyContent: "space-between", alignItems: "center" }}
            container
            spacing={2}
          >
            <Grid item xs={12} md={6} xl={5}>
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: localFontSize.h3,
                  lineHeight: { sm: localFontSize.h3 },
                  color: localColorTheme.white,
                  paddingRight: {
                    md: "40px",
                    lg: "70px",
                  },
                }}
              >
                Increase Business on Social Media Reach
              </Typography>
              <Typography
                sx={{
                  fontSize: localFontSize.p3,
                  color: localColorTheme.whiteTransparent,
                  paddingRight: {
                    md: "40px",
                    lg: "70px",
                  },
                  paddingTop: {
                    xs: "15px",
                    sm: "20px",
                    lg: "30px",
                    xl: "50px",
                  },
                }}
              >
                Using our network of industry influencers, we help promote your
                content
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} xl={7}>
              <Box sx={{ maxWidth: "670px" }}>
                <Image
                  style={{
                    height: "auto",
                    width: "100%",
                    objectFit: "contain",
                  }}
                  src={pngs.SocialMediaGroth}
                  alt="social media groth"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default SocialMediaGroth;

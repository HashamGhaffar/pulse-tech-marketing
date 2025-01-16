"use client";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { localColorTheme, localFontSize } from "@/_utils/themes";
import { Typography } from "@mui/material";
import CustomButton from "@/_components/Button";
import pngs from "@/_assets/pngs";
import Image from "next/image";

const HeroHome: React.FC = () => {
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
          background: `linear-gradient(180deg, ${localColorTheme.aquaBright} 0%, ${localColorTheme.deepPurple} 91.36%)`,
        }}
      >
        <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: "20px", md: "30px", lg: "50px" },
                }}
              >
                <Typography
                  sx={{
                    color: localColorTheme.white,
                    fontWeight: "800",
                    fontSize: localFontSize.h2,
                    lineHeight: `calc(${localFontSize.h2} + (${localFontSize.h2} * 0.18))`,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Grow Your Brand{" "}
                  <span
                    style={{
                      background: `linear-gradient(90deg, ${localColorTheme.softLavender}  0%, ${localColorTheme.fieryRose} 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: "inherit",
                      fontFamily: "inherit",
                      lineHeight: "inherit",
                    }}
                  >
                    Faster
                  </span>
                </Typography>
                <Typography
                  sx={{
                    color: localColorTheme.whiteTransparent,
                    fontSize: localFontSize.p4,
                  }}
                >
                  Unlock your business&apos;s full potential with tailored
                  digital marketing strategies designed to boost visibility,
                  drive engagement, and maximize ROI.
                </Typography>
                <Box>
                  <CustomButton text="Let's Talk" />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box sx={{ maxWidth: { xs: "500px", xl: "100%" } }}>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={pngs.brandGroth}
                  alt="brand groth"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default HeroHome;

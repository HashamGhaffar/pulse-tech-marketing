"use client";
import React from "react";
import { Box, Grid } from "@mui/material";
import { localColorTheme, localFontSize } from "@/_utils/themes";
import { Typography } from "@mui/material";
import CustomButton from "@/_components/Button";
import Image from "next/image";
import pngs from "@/_assets/pngs";

const WhyUs: React.FC = () => {
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
          background: `linear-gradient(180deg, ${localColorTheme.obsidianPurple} 18.67%, ${localColorTheme.shadowAmethyst} 100%)`,
        }}
      >
        <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "flex-start", md: "normal" },
              gap: { xs: "20px", md: "30px", lg: "50px" },
            }}
          >
            <Box sx={{ width: "fit-content" }}>
              <CustomButton
                text="WHY CHOOSE US"
                color1="#F093FB"
                color2="#F5576C"
                customStyles={{
                  padding: {
                    xs: "10px 18px",
                    md: "10px 20px",
                    lg: "10px 25px",
                  },
                }}
              />
            </Box>
            <Grid
              sx={{ justifyContent: "space-between" }}
              container
              spacing={2}
            >
              <Grid item xs={12} md={6}>
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
                  Why We Stand Out in Digital Marketing Excellence
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  sx={{
                    color: localColorTheme.whiteTransparent,
                    fontSize: localFontSize.p4,
                    textAlign: "left",
                    maxWidth: { xs: "90vw", md: "normal" },
                  }}
                >
                  Choosing the right digital marketing partner makes all the
                  difference. At [Agency Name], we bring expertise, innovation,
                  and a results-oriented approach to every campaign. Our
                  personalized strategies, transparent communication, and
                  unwavering commitment to your success set us apart. With us,
                  you gain more than a service provider—you gain a dedicated
                  team focused on growing your brand and delivering measurable
                  impact.
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              paddingTop: { xs: "40px", md: "80px", lg: "120px" },
              margin: "auto",
              paddingX: { sm: "30px", md: "50px", xl: "80px" },
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              src={pngs.DigitalMarketing}
              alt="digital marketing"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WhyUs;

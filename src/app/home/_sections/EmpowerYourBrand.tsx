"use client";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { localColorTheme, localFontSize } from "@/_utils/themes";
import { Typography } from "@mui/material";
import CustomButton from "@/_components/Button";
import pngs from "@/_assets/pngs";
import Image from "next/image";

const EmpowerYourBrand: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          padding: {
            xs: "60px 20px 60px 20px",
            sm: "80px 40px 80px 40px",
            md: "90px 60px 90px 0",
            lg: "120px 100px 120px 0",
            xl: "140px 120px 140px 0",
          },
          background: `linear-gradient(180deg, ${localColorTheme.deepPurple} 0%, ${localColorTheme.midnightBlue} 100%)`,
        }}
      >
        <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
          <Grid
            sx={{ rowGap: "30px" }}
            container
            spacing={2}
            alignItems="center"
          >
            <Grid sx={{ order: { xs: 2, md: 1 } }} item xs={12} md={5}>
              <Box sx={{ maxWidth: { xs: "300px", lg: "400px", xl: "500px" } }}>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={pngs.EmpowerYourBrand}
                  alt="brand groth"
                />
              </Box>
            </Grid>
            <Grid sx={{ order: { xs: 1, md: 2 } }} item xs={12} md={7}>
              <Box
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: { xs: "flex-start", md: "normal" },
                  gap: { xs: "20px", md: "30px", lg: "50px" },
                }}
              >
                <Box sx={{ width: "fit-content" }}>
                  <CustomButton
                    text="About Us"
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
                <Typography
                  sx={{
                    color: localColorTheme.white,
                    fontWeight: "800",
                    fontSize: localFontSize.h3,
                    lineHeight: `calc(${localFontSize.h3} + (${localFontSize.h3} * 0.18))`,
                    fontFamily: "Montserrat, sans-serif",
                    textAlign: "left",
                    width: "100%",
                    maxWidth: { xs: "80vw", md: "normal" },
                  }}
                >
                  Empowering Your Brand in the Digital Era
                </Typography>
                <Typography
                  sx={{
                    color: localColorTheme.whiteTransparent,
                    fontSize: localFontSize.p4,
                    textAlign: "left",
                    maxWidth: { xs: "90vw", md: "normal" },
                  }}
                >
                  We are a team of passionate digital strategists, creative
                  thinkers, and technology enthusiasts dedicated to helping your
                  brand thrive in the ever-evolving digital landscape. We
                  specialize in crafting personalized strategies that drive
                  meaningful engagement, increase brand visibility, and achieve
                  measurable results.{" "}
                </Typography>
                <Box sx={{ width: "fit-content" }}>
                  <CustomButton text="Let's Talk" />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default EmpowerYourBrand;

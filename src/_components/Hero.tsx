"use client";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { localColorTheme, localFontSize } from "@/_utils/themes";
import { Typography } from "@mui/material";
import CustomButton from "@/_components/Button";
import Image, { StaticImageData } from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface HeroProps {
  aboutButtonText: string;
  headingText: string;
  highlightedText: string;
  descriptionText: string;
  ctaButtonText: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  showAboutButton?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  aboutButtonText,
  headingText,
  highlightedText,
  descriptionText,
  ctaButtonText,
  imageSrc,
  imageAlt,
  showAboutButton = false,
}) => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);
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
          <Grid
            data-aos="zoom-in"
            data-aos-duration="500"
            container
            spacing={2}
            alignItems="center"
          >
            <Grid item xs={12} md={7}>
              {/* ✅ Conditionally render About Button */}
              {showAboutButton && (
                <Box
                  sx={{
                    width: "fit-content",
                    paddingBottom: { xs: "20px", md: "0px" },
                  }}
                >
                  <CustomButton
                    text={aboutButtonText}
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
              )}

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
                  {headingText}{" "}
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
                    {highlightedText}
                  </span>
                </Typography>
                <Typography
                  sx={{
                    color: localColorTheme.whiteTransparent,
                    fontSize: localFontSize.p4,
                    // width: { lg: "80%" },
                    paddingRight: { lg: "40px" },
                  }}
                >
                  {descriptionText}
                </Typography>
                <Box>
                  <CustomButton text={ctaButtonText} />
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
                  src={imageSrc}
                  alt={imageAlt}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Hero;

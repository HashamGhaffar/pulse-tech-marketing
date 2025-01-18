"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { localColorTheme, localFontSize } from "@/_utils/themes";
import Image from "next/image";
import svgs from "@/_assets/svgs";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        padding: "60px 20px",
        background: `linear-gradient(180deg, ${localColorTheme.velvetBerry} 0%, ${localColorTheme.crimsonBlush} 100%)`,
        color: "#FFFFFF",
        textAlign: "center",
      }}
    >
      <Box sx={{ position: "relative" }}>
        {/* Background LOGO */}
        {/* <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: { xs: "100px", md: "200px" },
            fontWeight: "bold",
            color: "rgba(255, 255, 255, 0.05)",
            zIndex: 0,
            userSelect: "none",
          }}
        >
          LOGO
        </Typography> */}

        {/* Footer Content */}
        <Box sx={{ position: "relative", zIndex: "1" }}>
          {/* Quick Links */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: "50px", md: "80px" },
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "30px",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: localFontSize.h4,
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Quick Links
              </Typography>

              {/* Navigation Links */}
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: "30px", md: "70px" },
                  margin: "auto",
                  flexWrap: "wrap",
                  fontSize: localFontSize.h4,
                  color: localColorTheme.whiteTransparent,
                }}
              >
                <Typography>Home</Typography>
                <Typography>About</Typography>
                <Typography>Contact</Typography>
                <Typography>Projects</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "30px",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "700",
                  fontSize: localFontSize.p4,
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Contact Us
              </Typography>

              {/* Navigation Links */}
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: "30px", md: "60px" },
                  margin: "auto",
                  flexWrap: "wrap",
                }}
              >
                <Image
                  src={svgs.Facebook}
                  height={40}
                  width={40}
                  alt="Facebook"
                />
                <Image
                  src={svgs.Instagram}
                  height={40}
                  width={40}
                  alt="Instagram"
                />
                <Image
                  src={svgs.Twitter}
                  height={40}
                  width={40}
                  alt="Twitter"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

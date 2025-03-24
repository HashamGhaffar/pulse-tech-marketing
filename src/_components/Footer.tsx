"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { localColorTheme, localFontSize } from "@/_utils/themes";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer: React.FC = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToProjects = () => {
    if (isClient) {
      const target = document.getElementById("ourProjects");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  return (
    <Box
      sx={{
        background: `linear-gradient(180deg, ${localColorTheme.velvetBerry} 0%, ${localColorTheme.crimsonBlush} 100%)`,
        color: "#FFFFFF",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          data-aos="zoom-in"
          data-aos-duration="500"
          sx={{
            position: "relative",
            zIndex: "1",
            width: "100%",
            padding: {
              xs: "0 20px 0 20px",
              sm: "0 40px 0 40px",
              md: "0 60px 0 60px",
              lg: "0 100px 0 100px",
              xl: "100px 120px 0 120px",
            },
            maxWidth: "1440px",
            margin: "auto",
            borderTop: {
              xs: `1px solid ${localColorTheme.whiteTransparent}`,
              md: "0px",
              xl: `1px solid ${localColorTheme.whiteTransparent}`,
            },
          }}
        >
          <Box
            sx={{
              paddingTop: {
                xs: "60px",
                sm: "80px",
                md: "90px",
                lg: "100px",
                xl: "0px",
              },
              display: "flex",
              justifyContent: "center",
              gap: { xs: "50px", md: "80px" },
              alignItems: "center",
              flexDirection: "column",
              borderTop: {
                md: `1px solid ${localColorTheme.whiteTransparent}`,
                xl: "none",
              },
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

              <Box
                sx={{
                  display: "flex",
                  gap: { xs: "30px", md: "70px" },
                  margin: "auto",
                  flexWrap: "wrap",
                  fontSize: localFontSize.h4,
                  color: localColorTheme.whiteTransparent,
                  "& > *": {
                    cursor: "pointer",
                  },
                }}
              >
                <Typography onClick={() => router.push("/")}>Home</Typography>
                <Typography onClick={() => router.push("/about-us")}>
                  About
                </Typography>
                <Typography onClick={() => router.push("/contact-us")}>
                  Contact
                </Typography>
                <Typography onClick={scrollToProjects}>Projects</Typography>
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
                  fontSize: localFontSize.h4,
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

        <Box
          sx={{
            height: { xs: "100px", md: "160px" },
            width: "100%",
            marginTop: {
              xs: "60px",
              sm: "80px",
              md: "90px",
              lg: "100px",
              xl: "100px",
            },
            backgroundImage: "url(./bgFooter.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: { xs: "center", xl: "top" },
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              color: localColorTheme.white,
              fontSize: localFontSize.p4,
              position: "absolute",
              bottom: { xs: "15px", sm: "20px", md: "38px", xl: "30px" },
              left: "50%",
              transform: "translateX(-50%)",
              width: "100%",
              paddingX: "20px",
            }}
          >
            QashNova © Copyright 2020, Inc. All rights reserved
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

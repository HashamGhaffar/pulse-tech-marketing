"use client";
import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { localColorTheme, localFontSize } from "@/_utils/themes";
import { Typography } from "@mui/material";
import CustomButton from "@/_components/Button";
import CustomAccordion from "../_components/CustomAccordion";
import AOS from "aos";
import "aos/dist/aos.css";

const OurService: React.FC = () => {
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
          background: `linear-gradient(180deg, ${localColorTheme.midnightBlue} 0%, ${localColorTheme.royalViolet} 100%)`,
        }}
      >
        <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
          <Box
            sx={{
              textAlign: { xs: "center", md: "left" },
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "flex-start", md: "normal" },
              gap: { xs: "20px", md: "30px", lg: "50px" },
            }}
          >
            <Box
              data-aos="fade-right"
              data-aos-duration="500"
              sx={{ width: "fit-content" }}
            >
              <CustomButton
                text="Our Services"
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
              data-aos="fade-right"
              data-aos-duration="500"
              sx={{
                color: localColorTheme.whiteTransparent,
                fontSize: localFontSize.p4,
                textAlign: "left",
                maxWidth: { xs: "90vw", md: "normal" },
              }}
            >
              At [Your Agency Name], we provide tailored digital marketing
              solutions to help your business thrive online. From SEO and PPC to
              social media and content marketing, we craft strategies that boost
              visibility, engage your audience, and drive measurable results.
              Let us elevate your brand and deliver success in the digital
              world.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                width: "100%",
              }}
            >
              <CustomAccordion
                number="01"
                title="Search Engine Optimization (SEO)"
                content="Elevate your online presence with effective SEO strategies. We optimize your website to rank higher
on search engines, driving organic traffic and improving visibility."
              />
              <CustomAccordion
                number="02"
                title="Web Application Development"
                content="A Website is an extension of yourself and we can help you to express it properly. Your website is
your number one marketing asset because we live in a digital age."
              />
              <CustomAccordion
                number="03"
                title="Custom Web Design & Development"
                content="Create visually appealing, responsive websites tailored to your brand. Our custom solutions ensure
a user-friendly experience that drives engagement and growth."
              />
            </Box>
            <Box
              data-aos="fade-right"
              data-aos-duration="500"
              sx={{ width: "fit-content" }}
            >
              <CustomButton text="Learn More" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OurService;

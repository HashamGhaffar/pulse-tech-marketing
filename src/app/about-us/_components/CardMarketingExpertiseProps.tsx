"use client";
import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localColorTheme, localFontSize } from "@/_utils/themes";
import AOS from "aos";
import "aos/dist/aos.css";

interface CardMarketingExpertiseProps {
  imageSrc: StaticImageData;
  imageAlt: string;
  title: string;
}

const CardMarketingExpertise: React.FC<CardMarketingExpertiseProps> = ({
  imageSrc,
  imageAlt,
  title,
}) => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  return (
    <Box
      data-aos="zoom-in"
      data-aos-duration="500"
      sx={{
        background: `linear-gradient(90deg, ${localColorTheme.mintGreen} 0%, ${localColorTheme.mistBlue} 100%)`,
        width: "100%",
        height: "100%",
        aspectRatio: "1.16 / 1",
        borderRadius: "12px",
        maxWidth: { xs: "300px", xl: "none" },
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        justifyContent: "center",
        padding: "30px",
        gap: "30px",
        margin: "auto",
      }}
    >
      <Box sx={{ maxWidth: "75px !important" }}>
        <Image
          style={{
            height: "auto",
            width: "100%",
            objectFit: "contain",
            maxWidth: "75px !important",
          }}
          src={imageSrc}
          alt={imageAlt}
        />
      </Box>
      <Typography
        sx={{
          fontSize: localFontSize.p3,
          color: localColorTheme.whiteTransparent,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default CardMarketingExpertise;

"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { localColorTheme, localFontSize } from "@/_utils/themes";

interface ProjectCardProps {
  title: string;
  description: string;
  description2: string;
  imageUrl: StaticImageData;
  projectLink: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  description2,
  imageUrl,
  projectLink,
  tags,
}) => {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        paddingTop: {
          xs: "30px",
          sm: "40px",
          md: "60px",
          xl: "80px",
        },
      }}
    >
      {/* Project Image */}
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Image
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
          }}
          src={imageUrl}
          alt={`${title} Logo`}
        />
      </Box>

      {/* Project Title */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: "700",
          marginTop: "20px",
          color: localColorTheme.white,
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        {title}
      </Typography>

      {/* Project Description */}
      <Typography
        sx={{
          marginTop: "10px",
          color: localColorTheme.whiteTransparent,
          fontSize: localFontSize.p4,
        }}
      >
        {description}
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: localColorTheme.white }}
        >
          {projectLink}
        </a>
        {description2}
      </Typography>

      {/* Tags */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "15px",
        }}
      >
        {tags.map((tag, index) => (
          <Box
            key={index}
            sx={{
              background: `linear-gradient(90deg, ${localColorTheme.mintGreen} 0%, ${localColorTheme.mistBlue} 100%)`,
              color: localColorTheme.white,
              fontWeight: "600",
              padding: "10px 20px",
              borderRadius: "10px",
              fontSize: localFontSize.p4,
              cursor: "pointer",
            }}
          >
            {tag}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProjectCard;

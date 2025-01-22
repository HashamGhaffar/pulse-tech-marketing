"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { localColorTheme, localFontSize } from "@/_utils/themes";

interface CustomAccordionProps {
  number: string; // Accordion number (e.g., "01")
  title: string; // Accordion title (e.g., "SEO Optimization")
  content: string; // Accordion content/description
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  number,
  title,
  content,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Box
      data-aos="zoom-in"
      data-aos-duration="500"
      sx={{
        borderRadius: "30px",
        backgroundClip: "border",
        border: `2px solid ${localColorTheme.mistBlue}`,
        overflow: "hidden",
      }}
    >
      <Accordion
        expanded={expanded}
        onChange={handleChange}
        sx={{
          background: expanded
            ? `linear-gradient(to right, ${localColorTheme.softLavender} 0%, ${localColorTheme.aquaGlow} 100%)`
            : "transparent",
          boxShadow: "none",
          borderRadius: "30px",
        }}
      >
        <AccordionSummary
          expandIcon={
            <IconButton
              sx={{
                width: "40px",
                height: "40px",
                background: `linear-gradient(90deg, ${localColorTheme.softLavender}, ${localColorTheme.fieryRose})`,
                borderRadius: "10px",
              }}
            >
              <ExpandMoreIcon sx={{ color: localColorTheme.white }} />
            </IconButton>
          }
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            paddingY: "10px",
          }}
        >
          {/* Dynamic List Number */}
          <Box
            sx={{
              width: "40px",
              height: "40px",
              background: `linear-gradient(90deg, ${localColorTheme.softLavender}, ${localColorTheme.fieryRose})`,
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ color: localColorTheme.white, fontSize: localFontSize.p4 }}
            >
              {number}
            </Typography>
          </Box>

          {/* Dynamic Title */}
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: localFontSize.h4,
              lineHeight: { sm: localFontSize.h4 },
              color: localColorTheme.white,
              paddingLeft: "15px",
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>

        {/* Dynamic Content */}
        <AccordionDetails
          sx={{
            color: localColorTheme.white,
            padding: "16px",
            borderRadius: "10px",
          }}
        >
          <Typography
            sx={{
              // textAlign: "center",
              paddingX: { xs: "10px", sm: "25px", md: "40px" },
            }}
          >
            {content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CustomAccordion;

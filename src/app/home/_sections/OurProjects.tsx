"use client";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { localColorTheme, localFontSize } from "@/_utils/themes";
import CustomButton from "@/_components/Button";
import ProjectCard from "../_components/ProjectCard";
import pngs from "@/_assets/pngs";

const OurProjects: React.FC = () => {
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
          background: `linear-gradient(180deg, ${localColorTheme.shadowAmethyst} 18.67%, ${localColorTheme.obsidianPurple} 100%)`,
        }}
      >
        <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: "20px", md: "50px", lg: "80px", xl: "100px" },
            }}
          >
            <Box sx={{ width: "fit-content" }}>
              <CustomButton
                text="OUR PROJECTS"
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
                fontWeight: "700",
                fontSize: localFontSize.h3,
                color: localColorTheme.white,
              }}
            >
              Driven by Results: A Journey Through Our Most Impactful Client
              Successes
            </Typography>
          </Box>
          <Box sx={{}}>
            <Grid
              sx={{
                justifyContent: "space-between",
              }}
              container
              spacing={2}
            >
              <Grid sx={{ margin: "auto" }} item xs={12} sm={8} md={5.5}>
                <ProjectCard
                  title="Sabir’s Grill"
                  description="I am proud to showcase my work on Sabir’s ("
                  description2="), a project where I brought together creativity, technical expertise, and strategic marketing."
                  imageUrl={pngs.SabirsProject}
                  projectLink="https://sabirs.co.uk/"
                  tags={[
                    "Food",
                    "UI/UX Design",
                    "UI/UX Design",
                    "Development",
                    "Social Media Marketing",
                  ]}
                />
                <ProjectCard
                  title="Saif’s Boxing & Fitness"
                  description="We are proud to have partnered with Saif’s Boxing Gym on a complete digital overhaul, showcasing our expertise in design, development, and social media marketing."
                  description2={""}
                  projectLink={""}
                  imageUrl={pngs.SaifProject}
                  tags={[
                    "Food",
                    "UI/UX Design",
                    "UI/UX Design",
                    "Development",
                    "Social Media Marketing",
                  ]}
                />
              </Grid>
              <Grid sx={{ margin: "auto" }} item xs={12} sm={8} md={5.5}>
                <ProjectCard
                  title="Saif’s Boxing & Fitness"
                  description="We are proud to have partnered with Saif’s Boxing Gym on a complete digital overhaul, showcasing our expertise in design, development, and social media marketing."
                  description2={""}
                  projectLink={""}
                  imageUrl={pngs.SaifProject}
                  tags={[
                    "Food",
                    "UI/UX Design",
                    "UI/UX Design",
                    "Development",
                    "Social Media Marketing",
                  ]}
                />
                <ProjectCard
                  title="Sabir’s Grill"
                  description="I am proud to showcase my work on Sabir’s ("
                  description2="), a project where I brought together creativity, technical expertise, and strategic marketing."
                  imageUrl={pngs.SabirsProject}
                  projectLink="https://sabirs.co.uk/"
                  tags={[
                    "Food",
                    "UI/UX Design",
                    "UI/UX Design",
                    "Development",
                    "Social Media Marketing",
                  ]}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OurProjects;

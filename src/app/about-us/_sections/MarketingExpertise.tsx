"use client";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { localColorTheme, localFontSize } from "@/_utils/themes";
import svgs from "@/_assets/svgs";
import CardMarketingExpertise from "../_components/CardMarketingExpertiseProps";
import { Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MarketingExpertise: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <Box
        sx={{
          background: `linear-gradient(180deg, ${localColorTheme.deepPurple} 25.61%, ${localColorTheme.midnightBlue} 100%)`,
        }}
      >
        <Box
          sx={{
            padding: {
              xs: "60px 20px",
              sm: "80px 40px",
              md: "90px 60px",
              lg: "120px 100px",
              xl: "140px 120px",
            },
            backgroundImage: "url(./bgMarketingExpertise.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center right",
            backgroundSize: "contain",
          }}
        >
          <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
            {/* first row  */}
            <Grid
              sx={{ height: "100%" }}
              container
              spacing={2}
              alignItems="center"
            >
              <Grid sx={{ order: { xs: 2, md: 1 } }} item xs={12} md={6}>
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <CardMarketingExpertise
                        imageSrc={svgs.SEO}
                        imageAlt="Search Engine Optimization"
                        title="Search Engine Optimization"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CardMarketingExpertise
                        imageSrc={svgs.WebDesign}
                        imageAlt="web design"
                        title="Website design & Development"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid
                sx={{ order: { xs: 1, md: 2 }, height: "100%" }}
                item
                xs={12}
                md={6}
              >
                <Box
                  data-aos="fade-left"
                  data-aos-duration="500"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    justifyContent: "space-between",
                    width: "100%",
                    height: "100%",
                    maxWidth: "580px",
                  }}
                >
                  <Typography
                    sx={{
                      color: localColorTheme.white,
                      fontSize: localFontSize.h3,
                    }}
                  >
                    Our Digital Marketing Expertise
                  </Typography>
                  <Typography
                    sx={{
                      color: localColorTheme.silverMist,
                      fontSize: localFontSize.p4,
                    }}
                  >
                    We&rsquo;ve created a full-stack structure for our working
                    workflow processes, where from the funny the century initial
                    all made, have spare to negatives.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            {/* second row  */}
            <Grid
              sx={{ height: "100%", paddingTop: "16px" }}
              container
              spacing={2}
              alignItems="center"
            >
              <Grid sx={{ order: { xs: 2, md: 1 } }} item xs={12} md={6}>
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <CardMarketingExpertise
                        imageSrc={svgs.Video}
                        imageAlt="video"
                        title="Video editing & Production"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CardMarketingExpertise
                        imageSrc={svgs.ContentWriting}
                        imageAlt="Content Writing"
                        title="Content Writing"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid
                sx={{ order: { xs: 1, md: 2 }, height: "100%" }}
                item
                xs={12}
                md={6}
              >
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <CardMarketingExpertise
                        imageSrc={svgs.Marketing}
                        imageAlt="marketing"
                        title="Social media Marketing"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CardMarketingExpertise
                        imageSrc={svgs.PPC}
                        imageAlt="ppc"
                        title="Pay per click (PPC)"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MarketingExpertise;

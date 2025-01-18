"use client";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { localColorTheme, localFontSize } from "@/_utils/themes";
import { Typography } from "@mui/material";
import pngs from "@/_assets/pngs";
import Image from "next/image";

const CreativeMinds: React.FC = () => {
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
          background: `linear-gradient(180deg, ${localColorTheme.royalOrchid} 0%, ${localColorTheme.velvetBloom} 100%)`,
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
                    <Box sx={{ maxwidth: "300px", width: "100%" }}>
                      <Image
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                        src={pngs.P1}
                        alt="p1"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ maxwidth: "300px", width: "100%" }}>
                      <Image
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                        src={pngs.P2}
                        alt="p1"
                      />
                    </Box>
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
                  The Creative Minds Shaping Your Success{" "}
                </Typography>
                <Typography
                  sx={{
                    color: localColorTheme.silverMist,
                    fontSize: localFontSize.p4,
                  }}
                >
                  Learn about the dynamic team committed to delivering
                  outstanding digital marketing services.
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
                    <Box sx={{ maxwidth: "300px", width: "100%" }}>
                      <Image
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                        src={pngs.P3}
                        alt="p1"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ maxwidth: "300px", width: "100%" }}>
                      <Image
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                        src={pngs.P4}
                        alt="p1"
                      />
                    </Box>
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
                    <Box sx={{ maxwidth: "300px", width: "100%" }}>
                      <Image
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                        src={pngs.P5}
                        alt="p1"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ maxwidth: "300px", width: "100%" }}>
                      <Image
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                        src={pngs.P6}
                        alt="p1"
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default CreativeMinds;

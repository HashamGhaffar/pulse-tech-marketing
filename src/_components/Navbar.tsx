"use client";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Divider } from "@mui/material";
import { localColorTheme, localFontSize } from "@/_utils/themes";
import Image from "next/image";
import svgs from "@/_assets/svgs";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

  const getColor = (route: string) =>
    pathname === route
      ? localColorTheme.fieryRose
      : localColorTheme.whiteTransparent;

  return (
    <>
      {/* Navbar */}
      <Box
        sx={{
          backgroundColor: localColorTheme.aquaGlow,
          paddingX: {
            xs: "20px",
            sm: "40px",
            md: "60px",
            lg: "100px",
            xl: "120px",
          },
          marginBottom: "-1.8px",
          position: "relative",
          zIndex: "100",
        }}
      >
        <Box
          data-aos="fade-down"
          data-aos-duration="500"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: `1px solid ${localColorTheme.white}`,
            paddingY: { xs: "15px", md: "25px", lg: "30px" },
            maxWidth: "1440px",
            margin: "auto",
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              color: localColorTheme.white,
              fontSize: localFontSize.h4,
            }}
          >
            LOGO
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 4 }}>
            <Typography
              sx={{
                color: getColor("/"),
                fontSize: localFontSize.p4,
                cursor: "pointer",
              }}
            >
              Home
            </Typography>
            <Typography
              sx={{
                color: getColor("/about-us"),
                fontSize: localFontSize.p4,
                cursor: "pointer",
              }}
            >
              About
            </Typography>
            <Typography
              sx={{
                color: getColor("/contact-us"),
                fontSize: localFontSize.p4,
                cursor: "pointer",
              }}
            >
              Contact
            </Typography>
          </Box>

          {/* Hamburger Icon */}
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton onClick={() => toggleDrawer(true)}>
              <Image
                style={{ width: "24px", height: "24px" }}
                src={svgs.Hamburger}
                alt="hamburger"
              />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Drawer */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "250px",
            backgroundColor: localColorTheme.aquaGlow,
          },
        }}
        ModalProps={{
          sx: {
            backdropFilter: "blur(5px)",
            backgroundColor: localColorTheme.whiteTransparent,
          },
        }}
      >
        {/* Close Button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={() => toggleDrawer(false)}>
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <Image
                style={{ width: "24px", height: "24px" }}
                src={svgs.Hamburger}
                alt="hamburger"
              />
            </Box>
          </IconButton>
        </Box>

        {/* Drawer Navigation */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 2,
            textAlign: "right",
          }}
        >
          <Typography
            sx={{
              color: getColor("/"),
              fontSize: localFontSize.p4,
              cursor: "pointer",
            }}
          >
            Home
          </Typography>
          <Divider
            sx={{
              width: "100%",
              backgroundColor: localColorTheme.white,
            }}
          />
          <Typography
            sx={{
              color: getColor("/about-us"),
              fontSize: localFontSize.p4,
              cursor: "pointer",
            }}
          >
            About
          </Typography>
          <Divider
            sx={{
              width: "100%",
              backgroundColor: localColorTheme.white,
            }}
          />
          <Typography
            sx={{
              color: getColor("/contact-us"),
              fontSize: localFontSize.p4,
              cursor: "pointer",
            }}
          >
            Contact
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;

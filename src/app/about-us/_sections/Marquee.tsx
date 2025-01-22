"use client";
import svgs from "@/_assets/svgs";
import { localColorTheme } from "@/_utils/themes";
import { Box } from "@mui/material";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const logos = [
  { src: svgs.FacebookMarquee, alt: "Facebook" },
  { src: svgs.Google, alt: "Google" },
  { src: svgs.Slack, alt: "Slack" },
  { src: svgs.Amazon, alt: "Amazon" },
  { src: svgs.Logitech, alt: "Logitech" },
  { src: svgs.FacebookMarquee, alt: "Facebook" },
  { src: svgs.Google, alt: "Google" },
  { src: svgs.Slack, alt: "Slack" },
  { src: svgs.Amazon, alt: "Amazon" },
  { src: svgs.Logitech, alt: "Logitech" },
  { src: svgs.FacebookMarquee, alt: "Facebook" },
  { src: svgs.Google, alt: "Google" },
  { src: svgs.Slack, alt: "Slack" },
  { src: svgs.Amazon, alt: "Amazon" },
  { src: svgs.Logitech, alt: "Logitech" },
];

export default function LogoMarquee() {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  return (
    <Box
      sx={{
        background: `linear-gradient(180deg, ${localColorTheme.aquaGlow} 0%, ${localColorTheme.twilightIndigo} 100%)`,
        paddingY: "50px",
        overflow: "hidden",
      }}
    >
      <Marquee
        style={{ width: "100%" }}
        gradient={false}
        speed={150}
        pauseOnHover
      >
        {logos.map((logo, index) => (
          <Box
            sx={{ paddingX: { xs: "30px", sm: "45px", md: "65px" } }}
            key={index}
          >
            <Box
              sx={{
                width: "130px",
                height: "30px",
              }}
            >
              <Image
                data-aos="zoom-in"
                data-aos-duration="500"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                src={logo.src}
                alt={logo.alt}
              />
            </Box>
          </Box>
        ))}
      </Marquee>
    </Box>
  );
}

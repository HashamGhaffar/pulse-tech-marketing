"use client";
import { Box } from "@mui/material";
import Navbar from "@/_components/Navbar";
import GetInTouch from "@/_components/GetInTouch";
import Footer from "@/_components/Footer";
import { localColorTheme } from "@/_utils/themes";

export default function ContactUs() {
  return (
    <>
      <Box>
        <Navbar />
        <GetInTouch
          styles={{
            background: `linear-gradient(180deg, ${localColorTheme.aquaBright} 0%, ${localColorTheme.velvetBerry} 91.36%)`,
          }}
        />
        <Footer />
      </Box>
    </>
  );
}

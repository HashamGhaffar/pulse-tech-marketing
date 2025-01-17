"use client";
import Navbar from "@/_components/Navbar";
import { Box } from "@mui/material";
import HeroHome from "./_sections/HeroHome";
import EmpowerYourBrand from "./_sections/EmpowerYourBrand";
import OurService from "./_sections/OurService";
import WhyUs from "./_sections/WhyUs";

export default function HomePage() {
  return (
    <>
      <Box>
        <Navbar />
        <HeroHome />
        <EmpowerYourBrand />
        <OurService />
        <WhyUs />
      </Box>
    </>
  );
}

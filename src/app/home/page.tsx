"use client";
import Navbar from "@/_components/Navbar";
import { Box } from "@mui/material";
import HeroHome from "./_sections/HeroHome";
import EmpowerYourBrand from "./_sections/EmpowerYourBrand";
import OurService from "./_sections/OurService";

export default function HomePage() {
  return (
    <>
      <Box>
        <Navbar />
        <HeroHome />
        <EmpowerYourBrand />
        <OurService />
      </Box>
    </>
  );
}

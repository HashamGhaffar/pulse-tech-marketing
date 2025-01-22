"use client";
import { Box } from "@mui/material";
import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
import EmpowerYourBrand from "./_sections/EmpowerYourBrand";
import OurService from "./_sections/OurService";
import WhyUs from "./_sections/WhyUs";
import OurProjects from "./_sections/OurProjects";
import GetInTouch from "@/_components/GetInTouch";
import Footer from "@/_components/Footer";
import pngs from "@/_assets/pngs";

export default function HomePage() {
  return (
    <>
      <Box>
        <Navbar />
        <Hero
          aboutButtonText="About Us"
          headingText="Grow Your Brand"
          highlightedText="Faster"
          descriptionText="Unlock your business's full potential with tailored digital marketing strategies designed to boost visibility, drive engagement, and maximize ROI."
          ctaButtonText="Let’s Talk"
          imageSrc={pngs.brandGroth}
          imageAlt="Marketing Strategy"
          showAboutButton={false}
        />
        <EmpowerYourBrand />
        <OurService />
        <WhyUs />
        <OurProjects />
        <GetInTouch />
        <Footer />
      </Box>
    </>
  );
}

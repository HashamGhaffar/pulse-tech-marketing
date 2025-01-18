"use client";
import { Box } from "@mui/material";
import Navbar from "@/_components/Navbar";
import Hero from "@/_components/Hero";
// import Footer from "@/_components/Footer";
import pngs from "@/_assets/pngs";
import Marquee from "./_sections/Marquee";
import MarketingExpertise from "./_sections/MarketingExpertise";
import SocialMediaGroth from "./_sections/SocialMediaGroth";

export default function AboutUs() {
  return (
    <>
      <Box>
        <Navbar />
        <Hero
          aboutButtonText="THE BEST"
          headingText="Digital Marketing Agency"
          highlightedText=""
          descriptionText="Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer"
          ctaButtonText="Let’s Talk"
          imageSrc={pngs.MarketingAgency}
          imageAlt="Marketing Strategy"
          showAboutButton={true}
        />
        <Marquee />
        <MarketingExpertise />
        <SocialMediaGroth />
        {/* <Footer /> */}
      </Box>
    </>
  );
}

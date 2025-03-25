"use client";
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, SxProps, Theme } from "@mui/material";
import { localColorTheme, localFontSize } from "@/_utils/themes";
import CustomButton from "@/_components/Button";
import pngs from "@/_assets/pngs";
import Image from "next/image";
import CustomInput from "@/_components/CustomInput";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface GetInTouchProps {
  styles?: SxProps<Theme>;
}

const GetInTouch: React.FC<GetInTouchProps> = ({ styles }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 500, once: true });
    AOS.refresh();
  }, []);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });

    setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Please enter a message.";

    if (newErrors.name || newErrors.email || newErrors.message) {
      setErrors(newErrors);
      toast.error("Please fill in all input fields correctly.");
      return;
    }

    toast.success("Form submitted successfully!");
    // Clear form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Box
        sx={{
          padding: {
            xs: "60px 20px",
            sm: "80px 40px",
            md: "90px 60px",
            lg: "120px 100px",
            xl: "140px 120px",
          },
          background: `linear-gradient(180deg, ${localColorTheme.plumMystic} 18.67%, ${localColorTheme.velvetBerry} 100%)`,
          ...styles,
        }}
      >
        <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
          <Box
            data-aos="zoom-in"
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: "20px", md: "50px", lg: "80px", xl: "100px" },
            }}
          >
            <Box sx={{ width: "fit-content" }}>
              <CustomButton
                text="Contact Us"
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
              {`Have Questions? Get in Touch Today and Unlock Your Brand's Potential!`}
            </Typography>
          </Box>
          <Grid
            sx={{
              justifyContent: "space-between",
              paddingTop: {
                xs: "20px",
                sm: "40px",
                md: "60px",
              },
            }}
            container
            spacing={2}
          >
            <Grid
              data-aos="fade-right"
              sx={{ margin: "auto" }}
              item
              xs={12}
              sm={8}
              md={5.5}
            >
              <Box>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={pngs.GetInTouch}
                  alt="get in touch"
                />
              </Box>
            </Grid>
            <Grid
              data-aos="fade-left"
              sx={{ margin: "auto" }}
              item
              xs={12}
              sm={8}
              md={5.5}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  width: "100%",
                }}
              >
                {/* Name Input */}
                <CustomInput
                  label="Name"
                  type="text"
                  value={formData.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange("name", e.target.value)
                  }
                />
                {errors.name && (
                  <Typography sx={{ color: "red", fontSize: "14px" }}>
                    {errors.name}
                  </Typography>
                )}

                {/* Email Input */}
                <CustomInput
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange("email", e.target.value)
                  }
                />
                {errors.email && (
                  <Typography sx={{ color: "red", fontSize: "14px" }}>
                    {errors.email}
                  </Typography>
                )}

                {/* Message Input */}
                <CustomInput
                  label="Message"
                  multiline
                  rows={5}
                  value={formData.message}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange("message", e.target.value)
                  }
                />
                {errors.message && (
                  <Typography sx={{ color: "red", fontSize: "14px" }}>
                    {errors.message}
                  </Typography>
                )}

                {/* Submit Button */}
                <Box>
                  <CustomButton text="Get In Touch" onClick={handleSubmit} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default GetInTouch;

"use client";
import React from "react";
import { TextField, SxProps, Theme } from "@mui/material";

interface CustomInputProps {
  label: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
  customStyles?: SxProps<Theme>;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type = "text",
  multiline = false,
  rows = 4,
  customStyles,
}) => {
  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      fullWidth
      multiline={multiline}
      rows={multiline ? rows : 1}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          color: "#fff",
          "& fieldset": {
            borderColor: "#FFFFFF",
          },
          "&:hover fieldset": {
            borderColor: "#FFFFFF",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#FFFFFF",
          },
        },
        "& .MuiInputLabel-root": {
          color: "#FFFFFF80",
        },
        "& .MuiInputBase-input::placeholder": {
          color: "#FFFFFF80",
          opacity: 1,
        },
        ...customStyles,
      }}
    />
  );
};

export default CustomInput;

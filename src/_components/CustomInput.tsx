"use client";
import React from "react";
import { TextField, SxProps, Theme } from "@mui/material";

interface CustomInputProps {
  label: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
  customStyles?: SxProps<Theme>;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type = "text",
  multiline = false,
  rows = 4,
  customStyles,
  value,
  onChange,
  error = false,
  helperText = "",
}) => {
  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      fullWidth
      multiline={multiline}
      rows={multiline ? rows : 1}
      value={value}
      onChange={onChange}
      error={error}
      helperText={error ? helperText : ""}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
          color: "#fff",
          "& fieldset": {
            borderColor: error ? "#FF4C4C" : "#FFFFFF",
          },
          "&:hover fieldset": {
            borderColor: error ? "#FF4C4C" : "#FFFFFF",
          },
          "&.Mui-focused fieldset": {
            borderColor: error ? "#FF4C4C" : "#FFFFFF",
          },
        },
        "& .MuiInputLabel-root": {
          color: error ? "#FF4C4C" : "#FFFFFF80",
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

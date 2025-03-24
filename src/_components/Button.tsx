import React from "react";
import MUIButton from "@mui/material/Button";
import { SxProps, Theme } from "@mui/material/styles";
import { localFontSize } from "@/_utils/themes";

interface ButtonProps {
  text: string;
  customStyles?: SxProps<Theme>;
  color1?: string;
  color2?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({
  text,
  customStyles,
  color1 = "#74EBD5",
  color2 = "#9FACE6",
  onClick,
}) => {
  return (
    <MUIButton
      onClick={onClick}
      sx={{
        padding: { xs: "12px 30px", md: "14px 25px", lg: "16px 30px" },
        borderRadius: "10px",
        textTransform: "capitalize",
        textWrap: "nowrap",
        fontWeight: "700",
        fontSize: localFontSize.p4,
        background: `linear-gradient(90deg, ${color1 || "#74EBD5"} 0%, ${
          color2 || "#9FACE6"
        } 100%)`,
        color: "#ffffff",
        transition: "all 0.5s ease-in",
        "&:hover": {
          opacity: 0.8,
        },
        ...customStyles,
      }}
    >
      {text}
    </MUIButton>
  );
};

export default CustomButton;

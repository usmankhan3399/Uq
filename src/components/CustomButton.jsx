import React from "react";
import Button from "@mui/material/Button";
import "../assets/styles/CustomButton.css"; // Import external CSS for default styles if needed

const CustomButton = ({
  backgroundColor,
  textColor,
  height,
  width,
  onClick,
  borderRadius,
  padding,
  fontSize,
  text,
  icon,
  className,
  gap,
}) => {
  return (
    <Button
      onClick={onClick}
      className={className}
      style={{
        backgroundColor: backgroundColor || "#AA8950", // Default background color (MUI primary)
        color: textColor || "#FFFFFF",
        height: height || "38px", // Default height
        width: width || "155px", // Default width
        borderRadius: borderRadius || "240px", // You can customize more styles as needed
        padding: padding || "13px 29px 13px 29px",
        textTransform: "none", // Avoid transforming text to uppercase
        fontSize: fontSize || "16px",
        gap: gap || "8px",
      }}>
      {icon && <span>{icon}</span>} {/* Render icon if provided */}
      {text || "Button"}
    </Button>
  );
};

export default CustomButton;

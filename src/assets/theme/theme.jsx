import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#f5f5f5", // Background color for the whole app
      paper: "#E8F3F4", // Background color for cards, dialogs, etc.
    },
    primary: {
      main: "#1976d2", // Primary color
    },
    secondary: {
      main: "#dc004e", // Secondary color
    },
    text: {
      primary: "#2A6369",
      secondary: "#000000",
      tertiary: "#AA8950",
      quaternary: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: " 'Arial'",
    fontSize: 16.1, // Global font size
    h1: {
      fontSize: "60px", // Heading 1 font size
      fontWeight: 700, // Font weight for h1
      lineHeight: "77px",
    },
    h2: {
      fontSize: "16px",
      fontWeight: 400, // Font weight for h1
      lineHeight: "18.4px",
    },

    body1: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "24px",
      color: "#000000",
    },
    body2: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
      color: "#000000",
    },
    button: {
      textTransform: "capitalize",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
      xxl: 1440,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Customize the border radius for buttons
          padding: "8px 16px", // Padding for buttons
          fontSize: "1rem", // Button font size
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingLeft: "0 !important",
          paddingRight: "0 !important",
          margin: 0,
          minHeight: "88px",
          width: "100% !important",
        },
        gutters: {
          minHeight: "88px !important",
        },
        regular: {
          minHeight: "88px !important",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            backgroundColor: "#ffffff", // TextField background color
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#cccccc", // Border color
            },
            "&:hover fieldset": {
              borderColor: "#1976d2", // Border color on hover
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1976d2", // Border color when focused
            },
          },
        },
      },
    },
  },
});

export default theme;

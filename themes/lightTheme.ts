import { createTheme, Theme } from "@mui/material/styles";

export const lightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0e8390",
    },
    secondary: {
      main: "#d2e4e4",
    },
    info: {
      main: "#fff",
    },
    background: {
      default: "#d2e4e4",
      paper: "#1d2329",
    },
  },
  typography: {
    fontFamily: "Open Sans",
  },

  components: {
    // MuiDivider: {
    //   styleOverrides: {
    //     backgroundColor: "#bdd7d0",
    //   },
    // },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        position: "fixed",
      },
      styleOverrides: {
        root: {
          // backgroundColor: "white",
          height: 60,
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#0e8390",
          fontFamily: "Open Sans",
        },
        h1: {
          fontSize: 30,
          fontWeight: 800,
        },
        h2: {
          fontSize: 20,
          fontWeight: 700,
          color: "#1d3820",
        },
        h6: {
          fontWeight: 600,
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600,
        },
      },
    },

    MuiButton: {
      defaultProps: {
        variant: "contained",
        size: "small",
        disableElevation: false,
        // color: "info",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: 10,
          color: "white",
          backgroundColor: "##0e8ae7",
          ":hover": {
            backgroundColor: "#6c808f",
            color: "#2c343a",
            transition: "all 0.3s ease-in-out",
          },
        },
      },
    },

    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: "0px 5px 5px rgba(0,0,0,0.05)",
          borderRadius: "10px",
          backgroundColor: "#dae9ea",
        },
      },
    },
  },
});

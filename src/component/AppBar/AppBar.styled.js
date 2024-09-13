import { AppBar, Box, styled, Typography } from "@mui/material";

export const AppBarDiv = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  boxShadow: "none",
  color: "black",
  //   border: "1px solid",
  height: "60px",

  [theme.breakpoints.up("lg")]: {},
}));

export const LogoImag = styled("img")(({ theme }) => ({
  width: "30px",
  height: "30px",

  [theme.breakpoints.up("lg")]: {},
}));

export const TypographyText = styled(Typography)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  fontFamily: "Roboto",
  fontSize: "24px",
  fontWeight: 500,
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px"
  },
}));

export const Boxcontainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  marginLeft: "50px",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "10px",
  },
}));

export const BoxInnercontainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#F5F5F5",

  borderRadius: "20px",
  width: 250,
  height: 10,

  [theme.breakpoints.down("sm")]: {
    width: 120,
  },
}));

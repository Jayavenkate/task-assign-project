import { Card, styled } from "@mui/material";

export const CardSize = styled(Card)(({ theme }) => ({
  width: "200px",
  height: "80px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0px 10px",

  [theme.breakpoints.up("lg")]: {
    width: "200px",
  },
  [theme.breakpoints.down("md")]: {
    width: "150px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80px",
  },
}));

export const CardSizeTestValue = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",

  gap: "5px",

  [theme.breakpoints.up("lg")]: {},
}));

export const CardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "10px",
  marginTop: "20px",

  [theme.breakpoints.up("lg")]: {
    justifyContent: "flex-start",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "5px",
    justifyContent: "center",
    alignItems: "flex-start",
  },
}));

export const TypographyText = styled("p")(({ theme }) => ({
  fontFamily: "Inter",
  fontSize: "10px",
  fontWeight: 600,
  // color: "grey",
  margin: 0,
  padding: 0,
  [theme.breakpoints.down("sm")]: {
    fontWeight: 300,
    fontSize: "7px",
  },
}));

export const TypographyCount = styled("p")(({ theme }) => ({
  fontFamily: "Inter",
  fontSize: "16px",
  fontWeight: 600,
  margin: 0,
  padding: 0,

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
    fontWeight: 500,
  },
}));

export const TypographyBottomText = styled("p")(({ theme }) => ({
  fontFamily: "Inter",
  fontSize: "10px",
  fontWeight: 400,
  color: "grey",
  margin: 0,
  padding: 0,
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
    fontWeight: 300,
  },
}));

export const IconDiv = styled("div")(({ theme }) => ({
  height: "25px",
  width: "25px",
  borderRadius: "20px",
  border: "1px solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#FFFFFF",
  [theme.breakpoints.up("lg")]: {},
}));

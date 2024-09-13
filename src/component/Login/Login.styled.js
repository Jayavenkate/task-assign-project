import { Card, styled } from "@mui/material";

export const LoginDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100px",
  //   width:"100%",
  //   margin:"0 auto",
  //   gap:"10px"

  [theme.breakpoints.up("lg")]: {},
}));
export const InputContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  // justifyContent: "space-between",

  [theme.breakpoints.up("lg")]: {},
}));

export const Inputlabel = styled("label")(({ theme }) => ({
  fontFamily: "Inter",
  fontSize: "12px",
  fontWeight: 500,
  padding: "7px 0px",

  [theme.breakpoints.up("lg")]: {},
}));

export const InputBoxContainer = styled("input")(({ theme }) => ({
  width: "300px",
  height: "30px",
  paddingLeft: "12px",
  borderRadius: "6px",
  background: "var(--Primary-Gray-50, #F9FAFB)",

  border: "1px solid var(--Primary-Gray-300, #D2D5DA)",
  [theme.breakpoints.up("lg")]: {
    width: "459px",
  },
}));

export const FormDiv = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
  justifyContent: "center",
  margin: "60px auto 0px auto",

  width: "400px",
  height: "300px",

  [theme.breakpoints.down("md")]: {
    margin: "90px auto 0px auto",
    width: "370px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "559px",
  },
}));

export const PElementBack = styled("p")(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: "20px",
  fontWeight: 600,
  color: "#3F3F3F",

  [theme.breakpoints.up("lg")]: {},
  [theme.breakpoints.down("sm")]: {},
}));

export const AddButtonDiv = styled("button")(({ theme }) => ({
  width: "100px",
  height: "30px",
  paddingLeft: "12px",
  borderRadius: "6px",
  background: "#4992FF",

  border: "1px solid #4992FF",
  color: "#FFFFFF",
  fontFamily: "Inter",
  fontSize: "14px",
  fontWeight: 500,
  marginTop: "20px",
  [theme.breakpoints.up("lg")]: {
    width: "459px",
  },
}));

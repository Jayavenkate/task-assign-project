import { styled } from "@mui/material";

export const AddTaskContainer = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {},
}));

export const Createbutton = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  [theme.breakpoints.up("lg")]: {},
}));

export const PElemnt = styled("p")(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: "18px",
  fontWeight: 500,

  [theme.breakpoints.up("lg")]: {},
}));


export const AddButton = styled("button")(({ theme }) => ({
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: 400,
    backgroundColor:"#4992FF",
    color:"#FFFFFF",
    border:'none',
    outline:'none',
    borderRadius:"5px",
    height:"35px",
    display:'flex',
    alignItems:'center',
    gap:'3px',
    cursor:'pointer',
  
    [theme.breakpoints.up("lg")]: {},
  }));
  
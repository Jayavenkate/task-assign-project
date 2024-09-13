import { Box, styled, TableCell } from "@mui/material";

export const AddTaskContainer = styled("div")(({ theme }) => ({
  padding: "10px",

  [theme.breakpoints.up("lg")]: {},
}));

export const Createbutton = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  [theme.breakpoints.up("lg")]: {},
}));

export const PElement = styled("p")(({ theme }) => ({
  fontFamily: "Inter",
  fontSize: "20px",
  fontWeight: 600,

  [theme.breakpoints.up("lg")]: {},
}));

export const AddButton = styled("button")(({ theme }) => ({
  fontFamily: "Inter",
  fontSize: "12px",
  fontWeight: 500,
  border: "none",
  backgroundColor: "#4992FF",
  color: "#FFFFFF",
  width: "120px",
  height: "30px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",

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
  width: "350px",
  height: "30px",
  paddingLeft: "12px",
  borderRadius: "6px",
  background: "var(--Primary-Gray-50, #F9FAFB)",

  border: "1px solid var(--Primary-Gray-300, #D2D5DA)",
  [theme.breakpoints.up("lg")]: {
    width: "459px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "300px",
  },
}));

export const InputBoxContainerSelect = styled("select")(({ theme }) => ({
  width: "365px",
  height: "30px",
  paddingLeft: "12px",
  borderRadius: "6px",
  background: "var(--Primary-Gray-50, #F9FAFB)",

  border: "1px solid var(--Primary-Gray-300, #D2D5DA)",
  [theme.breakpoints.up("lg")]: {
    width: "459px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "320px",
  },
}));

export const DateContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "10px",
  // justifyContent: "space-between",

  [theme.breakpoints.up("lg")]: {},
}));

export const InputBoxContainerdate = styled("input")(({ theme }) => ({
  width: "165px",
  height: "30px",
  paddingLeft: "12px",
  borderRadius: "6px",
  background: "var(--Primary-Gray-50, #F9FAFB)",

  border: "1px solid var(--Primary-Gray-300, #D2D5DA)",
  [theme.breakpoints.up("lg")]: {
    width: "459px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "140px",

  },
}));

export const InputBoxContainerSelectOption = styled("select")(({ theme }) => ({
  width: "178px",
  height: "30px",
  paddingLeft: "12px",
  borderRadius: "6px",
  background: "var(--Primary-Gray-50, #F9FAFB)",

  border: "1px solid var(--Primary-Gray-300, #D2D5DA)",
  [theme.breakpoints.up("lg")]: {
    width: "459px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "152px",

  },
}));

export const FormDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "10px",
  // justifyContent: "space-between",

  [theme.breakpoints.up("lg")]: {},
}));

export const InputButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  // alignItems: "flex-end",
  gap: "10px",
  marginTop: "10px",

  [theme.breakpoints.up("lg")]: {},
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
  [theme.breakpoints.up("lg")]: {
    width: "459px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
}));

export const CancelButtonDiv = styled("button")(({ theme }) => ({
  width: "100px",
  height: "30px",
  paddingLeft: "12px",
  borderRadius: "6px",
  background: "#FFFFFF",

  border: "1px solid var(--Primary-Gray-300, #D2D5DA)",
  color: "#4992FF",
  fontFamily: "Inter",
  fontSize: "14px",
  fontWeight: 500,
  [theme.breakpoints.up("lg")]: {
    width: "459px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
}));

export const AddButtonArrow = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",

  //   [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.down("sm")]: {},
}));

export const PElementBack = styled("p")(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: "20px",
  fontWeight: 600,
  color: "#3F3F3F",

    [theme.breakpoints.up("lg")]: {},
    [theme.breakpoints.down("sm")]: {},
}));

export const Boxcontainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.up("lg")]: {},
}));

export const BoxInnercontainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#eeeeee",

  borderRadius: "20px",
  width: 250,
  height: 10,

  [theme.breakpoints.up("lg")]: {},
}));


export const StyledTableCell = styled(TableCell)`
  font-size: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    font-size: 10px;
  }
     @media (min-width: ${({ theme }) => theme.breakpoints.values.xs}px) {
    font-size: 10px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    font-size: 12px;
  }
`;
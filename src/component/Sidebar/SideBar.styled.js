import { styled } from "@mui/material";

export const SideBarDiv = styled("div")(({ theme }) => ({
  height: `calc(100vh - 60px)`,
  width: "200px",
  //   border: "1px solid",
  paddingLeft: "20px",

  [theme.breakpoints.down("md")]: {
    position: "fixed",
    bottom: 0,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // width: "100%",
    height: `calc(100vh - 960px)`,
    // border: "1px solid",
  },
}));

export const SideBarDivRes = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: 0,

  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "50px",

  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const SideBarlabel = styled("p")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "10px",

  [theme.breakpoints.down("md")]: {
    gap: "5px",
  },
}));

export const SideBarlabelContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  //   border: "1px solid",
  [theme.breakpoints.down("md")]: {},
}));

export const SideBarRightSide = styled("div")(({ theme }) => ({
  //   border: "1px solid",
  height: `calc(100vh - 65px)`,
  width: `calc(100vw - 200px)`,
  backgroundColor: "#F5F5F5",
  borderRadius: "20px",
  padding: "0px 20px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: `calc(100vh - 125px)`,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    position: "fixed",
    padding: "0px 10px",
  },
}));

export const SideBarlabelButton = styled("button")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  alignItems: "center",
  border: "none",
  background: "none",
  cursor: "pointer",
  width: "150px",
  borderRadius: "20px",
  fontSize: "14px",
  fontFamily: "Roboto",

  [theme.breakpoints.down("md")]: {
    width: "120px",
    gap: "5px",
    fontSize: "12px",
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    width: "70px",
    gap: "5px",
    fontSize: "8px",
    justifyContent: "center",
  },
}));

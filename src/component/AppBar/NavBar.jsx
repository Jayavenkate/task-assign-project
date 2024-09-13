import Toolbar from "@mui/material/Toolbar";

import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";

import Badge from "@mui/material/Badge";

import AccountCircle from "@mui/icons-material/AccountCircle";

import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import {
  AppBarDiv,
  Boxcontainer,
  BoxInnercontainer,
  LogoImag,
  TypographyText,
} from "./AppBar.styled";
import Logo from "../Images/task.png";
import { useNavigate } from "react-router-dom";
export const NavBar = () => {
  const navigate = useNavigate()
  return (
    <AppBarDiv position="sticky">
      <Toolbar>
        <TypographyText variant="h6" component="div">
          <LogoImag src={Logo} /> Task Me
        </TypographyText>

        <Boxcontainer>
          <BoxInnercontainer
            sx={{
              px: 2,
              py: 1,
            }}
          >
            <SearchIcon sx={{ mr: 1 }} fontSize="small" />
            <InputBase placeholder="Search…" sx={{ flex: 1 }} />
          </BoxInnercontainer>
        </Boxcontainer>
        <Box>
          <IconButton size="small" color="#FFFFFF">
            <Badge>
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="small"
            edge="end"
            aria-label="account of current user"
            color="primary"
            onClick={() => navigate("/")}
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBarDiv>
  );
};

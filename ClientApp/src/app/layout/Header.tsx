import {
  AppBar,
  List,
  ListItem,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Badge,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ShoppingCart } from "@mui/icons-material";

interface Props {
  darkmode: boolean;
  handleThemeChange: () => void;
}

const midLinks = [
  {
    title: "catalog",
    path: "/catalog",
  },
  {
    title: "about",
    path: "/about",
  },
  {
    title: "contact",
    path: "/contact",
  },
];

const rightLinks = [
  {
    title: "login",
    path: "/login",
  },
  {
    title: "register",
    path: "/register",
  },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  "&:hover": {
    color: "info.light",
  },
  "&.active": {
    color: "info.dark",
  },
};

export default function Header({ darkmode, handleThemeChange }: Props) {
  return (
    <AppBar position={"sticky"} sx={{ mb: 4 }}>
      <Toolbar sx={{ justifyContent: "space-around" }}>
        {/* IconButton - DarkMode */}
        <Tooltip title={darkmode ? "Modo claro" : "Modo escuro"}>
          <IconButton color="inherit" onClick={handleThemeChange}>
            {darkmode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>

        {/* Title */}
        <Typography variant="h6" component={NavLink} to={"/"} sx={navStyles}>
          RE-STORE
        </Typography>

        {/* Links */}
        <List sx={{ display: "flex" }}>
          {midLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        <Box display={"flex"}>
          {/* IconButton - Cart */}
          <IconButton
            size="large"
            edge={"start"}
            color="inherit"
            sx={{ mr: 2 }}
          >
            <Badge badgeContent={"4"} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          {/* Right Links */}
          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

import {
  AppBar,
  Box,
  FormControlLabel,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
interface Props {
  darkmode: boolean;
  handleThemeChange: () => void;
}

export default function Header({ darkmode, handleThemeChange }: Props) {
  return (
    <AppBar position={"static"} sx={{ mb: 4 }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" gutterBottom>
          Re-Store
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            name="switch"
            value="start"
            control={
              <Switch
                color="primary"
                checked={darkmode}
                onChange={handleThemeChange}
              />
            }
            label={<DarkModeIcon />}
            labelPlacement="start"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import 'reactjs-popup/dist/index.css';
import SelectLanguages from "./SelectLanguages";
import MenuLanguageSelect from "./MenuCountrySelect";
import VerticalToggleButtons from "./VerticalButtons";

/** Header */
export function Header() {

  const btnStyle = {
    backgroundImage: "url('GnNewsLogo.png')",
    backgroundSize: "contain",
    width: "100px",
    height: "100px"
  }

  const appBarStyle = {
    textAlign: "center",
    backgroundColor: "rgb(193, 255, 114)"
  }

  return (
    <AppBar position="static" sx={appBarStyle}>
      <Toolbar>
        <MenuLanguageSelect />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Button sx={btnStyle} href="/news"></Button>
        </Typography>
        <VerticalToggleButtons />
        <SelectLanguages />
      </Toolbar>
    </AppBar>
  )
}
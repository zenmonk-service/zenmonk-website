import { AppBar, Toolbar, Box } from "@mui/material";
import Image from "next/image";
import { Monk } from "@/assets/icons";
import ActionLinks from "./action-links";
import "./styles.scss";
import BaseButton from "../shared/button";
import { actionsLink } from "./action-links/links";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      className="app-bar-container"
      sx={{ position: "fixed" }}
      elevation={0}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 64px !important",
        }}
      >
        <Box display="flex" alignItems="center">
          {Monk && <Image src={Monk} alt="Logo" width={71} height={71} />}
        </Box>
        <ActionLinks />
        <BaseButton>{actionsLink[actionsLink.length - 1].name}</BaseButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

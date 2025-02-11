import { AppBar, Toolbar, Box } from "@mui/material";
import Image from "next/image";
import { Monk } from "@/assets/icons";
import ActionLinks from "./action-links";
import "./styles.scss"

const Navbar = () => {
  return (
    <AppBar position="static" className="app-bar-container" elevation={0}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 15px !important",
        }}
      >
        <Box display="flex" alignItems="center">
          <Image src={Monk} alt="Logo" width={71} height={71} />
        </Box>
        <ActionLinks />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

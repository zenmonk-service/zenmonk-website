
import { AppBar, Toolbar, Box } from "@mui/material";
import Image from "next/image";
import { Monk } from "@/assets/icons";
import ActionLinks from "./action-links";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ paddingX: 2, backgroundColor: "var(--background)" ,position:"fixed"}} elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box display="flex" alignItems="center">
          <Image src={Monk} alt="Logo" width={74} height={72} />
        </Box>
        <ActionLinks />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

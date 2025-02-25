"use client";
import { AppBar, Toolbar, Box, useScrollTrigger, Slide } from "@mui/material";
import Image from "next/image";
import { Monk } from "@/assets/icons";
import ActionLinks from "./action-links";
import BaseButton from "@/components/shared/button";
import { actionsLink } from "./action-links/links";
import { useRouter } from "next/navigation";
import "./styles.scss";

interface Props {
  window?: () => Window;
  children?: React.ReactElement<unknown>;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}
const Navbar = (props: Props) => {
  const { push } = useRouter();
  const navigateToHome = () => push("/");
  return (
    <HideOnScroll {...props}>
      <AppBar className="app-bar-container" elevation={0}>
        <Toolbar className="toolbar">
          <Box display="flex" alignItems="center">
            {Monk && (
              <Image
                src={Monk}
                alt="Logo"
                width={71}
                height={71}
                className="logo"
                onClick={navigateToHome}
              />
            )}
          </Box>
          <ActionLinks />
          <BaseButton>{actionsLink[actionsLink.length - 1].name}</BaseButton>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;

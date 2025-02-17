'use client'
import React, { useState } from "react";
import { Box, Button, createTheme, IconButton, useMediaQuery } from "@mui/material";
import { ExpandMore, ExpandLess, Menu } from "@mui/icons-material";
import { ActionLink, actionsLink } from "./links";
import BaseButton from "@/components/shared/button";
import "./styles.scss";

interface OptionProps {
    id: string;
    isExpanded: boolean;
    onClick: () => void;
}

const theme = createTheme()
const ActionLinks = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleExpand = () => setIsExpanded((prev) => !prev);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

    return !isSmallScreen ? <Box className="action-links-wrapper">
        <Box className="action-links">
            {actionsLink.slice(0, actionsLink.length - 1).map(({ href, name, options }: ActionLink,index) => (
                <Button
                    sx={{
                        textTransform: "none",
                        "&:hover": {
                            backgroundColor: "transparent",
                        },
                    }}
                    key={index}
                    color="inherit"
                    disableRipple
                >
                    {name}
                    {options && <Option id={href} isExpanded={isExpanded} onClick={toggleExpand} />}
                </Button>
            ))}
        </Box>
    </Box> : <IconButton sx={{ fontSize: "32px", color: "var(--primary)", fontWeight: 800 }}><Menu fontSize="inherit" /></IconButton>;
};

export default ActionLinks;

const Option: React.FC<OptionProps> = ({ isExpanded, onClick }) => (
    <Box onClick={onClick} sx={{ display: "inline-flex", alignItems: "center", cursor: "pointer" }}>
        {isExpanded ? <ExpandMore color="inherit" /> : <ExpandLess color="inherit" />}
    </Box>
);

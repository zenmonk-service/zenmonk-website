'use client'
import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { ActionLink, actionsLink } from "./links";
import "./styles.scss";
import BaseButton from "@/components/shared/button";

interface OptionProps {
    id: string;
    isExpanded: boolean;
    onClick: () => void;
}
const ActionLinks = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded((prev) => !prev);

    return (
        <Box className="action-links-wrapper">
            <Box className="action-links">
                {actionsLink.slice(0, actionsLink.length - 1).map(({ href, name, options }: ActionLink) => (
                    <Button
                        sx={{
                            textTransform: "none",
                            "&:hover": {
                                backgroundColor: "transparent",
                            },
                        }}
                        key={href}
                        color="inherit"
                        disableRipple
                    >
                        {name}
                        {options && <Option id={href} isExpanded={isExpanded} onClick={toggleExpand} />}
                    </Button>
                ))}
            </Box>
            <BaseButton>
                {actionsLink[actionsLink.length - 1].name}
            </BaseButton>
        </Box>

    );
};

export default ActionLinks;

const Option: React.FC<OptionProps> = ({ isExpanded, onClick }) => (
    <Box onClick={onClick} sx={{ display: "inline-flex", alignItems: "center", cursor: "pointer" }}>
        {isExpanded ? <ExpandMore color="inherit" /> : <ExpandLess color="inherit" />}
    </Box>
);

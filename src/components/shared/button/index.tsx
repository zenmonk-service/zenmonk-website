"use client";

import { Button, ButtonProps } from "@mui/material";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "./styles.scss";

interface BaseButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const BaseButton = ({ children, ...props }: BaseButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [borderRadius, setBorderRadius] = useState<string>("");

  useEffect(() => {
    if (buttonRef.current) {
      const radius = window.getComputedStyle(buttonRef.current).borderRadius;
      setBorderRadius(radius);
    }
  }, []);

  return (
    <motion.div
      style={{
        width: props.fullWidth ? "100%" : "fit-content",
        height: "fit-content",
        borderRadius: borderRadius,
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
      }}
      transition={{ type: "spring", stiffness: 150 }}
    >
      <Button
        className={`${props.className} base-button`}
        ref={buttonRef}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  );
};

export default BaseButton;

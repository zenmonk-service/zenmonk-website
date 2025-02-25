import { Box, CircularProgress } from "@mui/material";
import React from "react";

const loading = () => {
  return (
    <Box>
      <CircularProgress sx={{ bgcolor: "gray" }} />
    </Box>
  );
};

export default loading;

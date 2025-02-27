import { Box } from "@mui/material";

const loading = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
     <Box component='img' src="/logo.svg" alt="logo" className="flicker-logo"/>
    </Box>
  );
};

export default loading;

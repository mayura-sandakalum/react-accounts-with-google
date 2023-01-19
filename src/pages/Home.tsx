import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Home = () => {
  return (
    <Box width="100%">
      <Box
        sx={{
          width: "150px",
          left: "50%",
          position: "absolute",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Button variant="contained" href="/signin" sx={{ width: "150px" }}>
          Sign in
        </Button>
        <br />
        <br />
        <Button variant="contained" href="/signup" sx={{ width: "150px" }}>
          Sign up
        </Button>
      </Box>
    </Box>
  );
};

export default Home;

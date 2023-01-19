import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

import SignupImage from "../assets/backgrounds/SignupBack.png";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Login = () => {
  const [windowSize, setwindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowSize() {
      setwindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  return (
    <Box width={windowSize.innerWidth} height={window.innerHeight}>
      <Box
        width="50%"
        height={window.innerHeight}
        bgcolor={"blue"}
        sx={{ float: "left" }}
      >
        <Box>
          <Typography sx={{ height: "263px" }}>Form</Typography>
        </Box>
      </Box>
      <Box
        width="50%"
        height={window.innerHeight}
        sx={{ float: "right", backgroundImage: `url(${SignupImage})` }}
      ></Box>
    </Box>
  );
};

export default Login;

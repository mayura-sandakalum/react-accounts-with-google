import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Stack from "@mui/system/Stack";
import Input from "antd/es/input";

import SigninImage from "../assets/backgrounds/SigninBack.png";
import GoogleIcon from "../assets/svgs/GoogleIcon";
import SigninUnderlineIcon from "../assets/svgs/SigninUnderlineIcon";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Signin = () => {
  const [windowSize, setwindowSize] = useState(getWindowSize());

  const inputStyle = {
    width: "525px",
    height: "59px",
    fontSize: "20px",
    color: "rgba(16, 23, 39, 0.5)",
    fontWeight: 400,
    borderRadius: "10px",
  };

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
    <Box
      width={windowSize.innerWidth}
      height={window.innerHeight}
      id="full-screen"
    >
      <Box
        width="50%"
        height={window.innerHeight}
        sx={{ float: "left" }}
        id="left-half"
      >
        <Box
          sx={{
            marginLeft: "50%",
            marginTop: "100px",
            transform: "translateX(-50%)",
          }}
        >
          <Box id="titles">
            <Typography
              fontWeight={600}
              fontSize="50px"
              color="rgb(16, 23, 39)"
            >
              Welcome back
            </Typography>
            <Typography
              fontWeight={400}
              fontSize="24px"
              color="rgba(16, 23, 39, 0.5)"
            >
              Welcome back! Please enter your details.
            </Typography>
          </Box>
          <Box id="form" marginTop="48px">
            <Box id="input-email" marginTop="30px">
              <Typography fontSize="20px" fontWeight={700} color="#101727">
                Email
              </Typography>
              <Input
                placeholder="Enter your email"
                style={inputStyle}
                onChange={(e) => {}}
              />
            </Box>
            <Box id="input-password" marginTop="30px">
              <Typography fontSize="20px" fontWeight={700} color="#101727">
                Password
              </Typography>
              <Input
                placeholder="Enter your password"
                style={{ ...inputStyle }}
                onChange={(e) => {}}
              />
            </Box>
            <Stack direction="row">
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: "#101727",
                      "&.Mui-checked": {
                        color: "#101727",
                      },
                    }}
                  />
                }
                label={
                  <Typography fontWeight={500} fontSize="20px" color="#101727">
                    Remember for 30 days
                  </Typography>
                }
              />
              <Link
                fontWeight={500}
                fontSize="20px"
                color="#101727"
                underline="none"
                marginTop="5px"
                marginLeft="60px"
              >
                Forgot password
              </Link>
            </Stack>
            <Box id="buttons" marginTop="40px">
              <Button
                sx={{
                  background: "#101727",
                  borderRadius: "10px",
                  width: "525px",
                  height: "59px",
                  ":hover": {
                    background: "rgba(16, 23, 39, 0.9)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: 600,
                    color: "white",
                    textTransform: "none",
                  }}
                >
                  Sign in
                </Typography>
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "10px",
                  width: "525px",
                  height: "59px",
                  marginTop: "20px",
                }}
              >
                <GoogleIcon />
                <Typography
                  sx={{
                    marginLeft: "15px",
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#363F4E",
                    textTransform: "none",
                    fontFamily: "ProductSans",
                  }}
                >
                  Sign in with Google
                </Typography>
              </Button>
            </Box>
            <Box
              id="sign-in"
              marginTop="45px"
              marginLeft="100px"
              textAlign="center"
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "rgba(16, 23, 39, 0.3)",
                  fontWeight: 600,
                }}
              >
                Don't have an account?{" "}
                <Link
                  underline="none"
                  sx={{ color: "#101727", fontWeight: 600, fontSize: "20px" }}
                >
                  Sign up for free
                </Link>
              </Typography>
              <SigninUnderlineIcon />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        width="50%"
        height={window.innerHeight}
        sx={{ float: "right", backgroundImage: `url(${SigninImage})` }}
        id="right-half"
      ></Box>
    </Box>
  );
};

export default Signin;

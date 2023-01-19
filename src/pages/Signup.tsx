import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Input from "antd/es/input";

import SignupImage from "../assets/backgrounds/SignupBack.png";
import GoogleIcon from "../assets/svgs/GoogleIcon";
import SignupUnderlineIcon from "../assets/svgs/SignupUnderlineIcon";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

const Signup = () => {
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
            marginTop: "50px",
            transform: "translateX(-50%)",
          }}
        >
          <Box id="titles">
            <Typography
              fontWeight={600}
              fontSize="50px"
              color="rgb(16, 23, 39)"
            >
              Create an Account
            </Typography>
            <Typography
              fontWeight={400}
              fontSize="24px"
              color="rgba(16, 23, 39, 0.5)"
            >
              Free forever. No credit card needed.
            </Typography>
          </Box>
          <Box id="form" marginTop="48px">
            <Box id="input-name">
              <Typography fontSize="20px" fontWeight={700} color="#101727">
                Name
              </Typography>
              <Input
                placeholder="Enter your name"
                style={inputStyle}
                onChange={(e) => {}}
              />
            </Box>
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
            <FormControlLabel
              sx={{ marginTop: "29px" }}
              control={
                <Checkbox
                  defaultChecked
                  sx={{
                    color: "rgba(16, 23, 39, 0.3)",
                    "&.Mui-checked": {
                      color: "rgba(16, 23, 39, 0.3)",
                    },
                  }}
                />
              }
              label={
                <Typography
                  fontWeight={500}
                  fontSize="20px"
                  color="rgba(16, 23, 39, 0.3)"
                >
                  I agree to all the{" "}
                  <Link color="#101727" underline="hover">
                    Term
                  </Link>
                  ,{" "}
                  <Link color="#101727" underline="hover">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link color="#101727" underline="hover">
                    Fees
                  </Link>
                  .
                </Typography>
              }
            />
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
                  Sign up
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
              marginLeft="50px"
              textAlign="center"
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "rgba(16, 23, 39, 0.3)",
                  fontWeight: 600,
                }}
              >
                Already have an account?{" "}
                <Link
                  underline="none"
                  sx={{ color: "#101727", fontWeight: 600, fontSize: "20px" }}
                >
                  Sign in
                </Link>
              </Typography>
              <SignupUnderlineIcon />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        width="50%"
        height={window.innerHeight}
        sx={{ float: "right", backgroundImage: `url(${SignupImage})` }}
        id="right-half"
      ></Box>
    </Box>
  );
};

export default Signup;

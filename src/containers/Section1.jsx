import {
  Box,
  Button,
  Container,
  Hidden,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import LaunchButton from "../components/landing-page/Buttons/LaunchButton";
import { section1Content } from "../utils/content";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import useMeasure from "react-use-measure";
import Title from "../components/landing-page/Title";
import {PostAdd, PostAddRounded} from "@mui/icons-material"

const {
  MainBG,
  TreesImage,
  CliffImage,
  HorseImage,
  ShootingStarImage,
  title,
  subtitle,
} = section1Content;

const CustomButton = ({ children, ...props }) => (
  <Button
    variant="outlined"
    sx={{
      borderRadius: 4,
      color: "text.primary",
      borderColor: "text.primary",
      height: 58,
      px: 2,
    }}
    {...props}
  >
    {children}
  </Button>
);

const Section1 = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [ref, { height }] = useMeasure();

  return (
    <Box sx={{ height: "100vh" , width:"100vw"}}>
      {/*/!* Main Background *!/*/}
      <Box sx={{ position: "absolute", zIndex: -1, top: 0, left: 0, right: 0, bottom:0 }}>
        <img src={MainBG} style={{ height: "100vh", width:"100vw" }} />
      </Box>
        <img
            src={ShootingStarImage}
            style={{

                position: "absolute",
                top: "30px",
                right: "15%",
                width: "500px",
            }}
        />

      {/*/!* backgrounds elements *!/*/}


      {/* Content */}
      <Container
        sx={{
          height: "100vh",
          mt: 10,
          [theme.breakpoints.up("md")]: { mt: 6 },
          textAlign:"center"
        }}

      >
        <Stack sx={{ height: "100vh" }} justifyContent="center">
          <Title
            variant={{ xs: "h3", sm: "h2", md: "h1" }}
            sx={{ letterSpacing: "0.02em", mb: 1 }}
          >
              {title} <span style={{color:"#cb3a54"}}>content</span>
          </Title>

          <Title
            variant={{ xs: "h3", sm: "h2", md: "h1" }}
            sx={{  letterSpacing: "0.05em", mb: 5 }}
          >
            {subtitle}
          </Title>

          {/*<LaunchButton*/}
          {/*    fullWidth={isSmallScreen}*/}
          {/*    sx={{  height:52, px: 3 ,margin: 0,*/}
          {/*            position: "absolute",*/}
          {/*            top: "65%",*/}
          {/*            left: "50%",*/}
          {/*        "-ms-transform": "translate(-50%, -50%)",*/}
          {/*        transform: "translate(-50%, -50%)"}}*/}
          {/*  text="Create posts"*/}
          {/*  icon={PostAddRounded}*/}
          {/*/>*/}

          {/*<Stack*/}
          {/*  direction={{ xs: "column", md: "row" }}*/}
          {/*  alignItems="center"*/}
          {/*  spacing={4}*/}
          {/*>*/}


            {/*<CustomButton fullWidth={isSmallScreen}>*/}
            {/*  <AppleIcon sx={{ fontSize: 36, ml: -1 }} />*/}

            {/*  <Stack sx={{ textAlign: "left", ml: 1 }}>*/}
            {/*    <Typography variant="caption" sx={{ lineHeight: 1 }}>*/}
            {/*      Sign in with*/}
            {/*    </Typography>*/}
            {/*    <Typography variant="h5">Apple</Typography>*/}
            {/*  </Stack>*/}
            {/*</CustomButton>*/}

            {/*<CustomButton fullWidth={isSmallScreen}>*/}
            {/*  <GoogleIcon sx={{ fontSize: 36, ml: -1 }} />*/}

            {/*  <Stack sx={{ textAlign: "left", ml: 1 }}>*/}
            {/*    <Typography variant="caption" sx={{ lineHeight: 1 }}>*/}
            {/*      Sign in with*/}
            {/*    </Typography>*/}
            {/*    <Typography variant="h5">Google</Typography>*/}
            {/*  </Stack>*/}
            {/*</CustomButton>*/}
          {/*</Stack>*/}
        </Stack>
      </Container>
    </Box>
  );
};

export default Section1;

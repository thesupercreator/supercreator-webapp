import {Container, Grid, Stack, Typography} from "@mui/material";
import ServiceCard from "../components/landing-page/Cards/ServiceCard";
import Title from "../components/landing-page/Title";
import { section9Content } from "../utils/content";
import React, {forwardRef}  from "react";
import WaitlistServiceCard from "../components/landing-page/Cards/WaitlistServiceCard.jsx";
import OutlinedButton from "../components/landing-page/Buttons/OutlinedButton.jsx";
import NewsImg from "../assets/images/section4/news-image.webp";
const { title, ITEMS } = section9Content;
import SupermanImg from "../assets/images/section4/news-image.webp";
const Section9 = forwardRef((props,ref) => {

    const [waitlistSuccess, setWaitlistSuccess] = React.useState(false);
  return (
    <Container ref={ref} sx={{ mt: { xs: 10, md: 20, lg: 25 } }}>
        <Container sx={{ textAlign: "left" }}>
            <Title variant={{ xs: "h3", md: "h2" }} >
                <span style={{color:"gray"}}>{title}</span><span style={{fontSize:"3rem"}}>super<span style={{color:"#cb3a54"}}>creator.</span></span>
            </Title>
            <Typography variant="h3" color="text.secondary" >
                because being just a creator isn't enough!
            </Typography>
        </Container>

        <Grid sx={{mt:{ xs: 2.5, md: 3, lg: 5 }}} container spacing={10} flexWrap="wrap-reverse" alignItems="center">
            {/* Left */}
            <Grid item xs={12} md={6}>
                <img
                    src={NewsImg}
                    style={{ width: "100%", objectFit: "contain" }}
                />
            </Grid>
            <Grid item xs={12} md={6}>


                { !waitlistSuccess?<WaitlistServiceCard success={setWaitlistSuccess}  />:<Container maxWidth="100vw" maxHeight="100vh">
                <Title variant={{ xs: "h4", md: "h3" }} sx={{ textAlign: "center" }}>
                   Thank you showing interest!
                </Title>
            </Container>}
            </Grid>

            {/* Right */}

        </Grid>
    </Container>
  );
});

export default Section9;

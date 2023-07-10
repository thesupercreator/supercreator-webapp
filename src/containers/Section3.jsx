import { Container, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Title from "../components/landing-page/Title";
import { section3Content } from "../utils/content";
import {forwardRef} from "react";
import {Parallax} from "react-scroll-parallax";

const { title, ITEMS } = section3Content;

const Section3 = forwardRef((refs) => {

  return (
      // <Parallax speed={-10} translateX={['-50px', '100px']}>
    <Container sx={{height:"80vh", width:"100vw",mt: { xs: 10, md: 20 } , alignItems:"center"}}>
        <Grid container spacing={8} flexWrap="wrap-reverse" alignItems="center">
            {/* Left */}
            <Grid item xs={12} md={6} >
                <Grid container spacing={6} sx={(theme) => ({
                    mt:4,
                    cursor: "pointer",
                    "& :hover": {
                        "& img": {
                            transform: "scale(1.2)",
                            transition: "transform .3s",
                        },
                        "& p": { color: "text.primary", transition: "all .3s ease-in" },
                    },
                })} justifyContent="left">
                    {ITEMS.map(({ name, logo }) => (
                        <Grid item xs={4} md={3} lg={3.4} key={name}>
                            <Stack alignItems="center">
                                <img
                                    src={logo}
                                    style={{ height: "100px", objectFit: "contain" }}
                                />

                                <Typography variant="body" color="text.secondary">
                                    <p>{name}</p>
                                </Typography>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
            <Container maxWidth="100vw" maxHeight="100vh">
                <Title variant={{ xs: "h3", md: "h2" }} sx={{ textAlign: "center" }}>
                    {title}
                </Title>
            </Container>
            </Grid>

        </Grid>

    </Container>
      // </Parallax>
  );
});

export default Section3;

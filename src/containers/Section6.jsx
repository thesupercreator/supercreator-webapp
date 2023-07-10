import { Container, Grid } from "@mui/material";
import React from "react";
import ServiceCard from "../components/landing-page/Cards/ServiceCard";
import Title from "../components/landing-page/Title";
import { section6Content } from "../utils/content";
import {Parallax} from "react-scroll-parallax";

const { title, ITEMS } = section6Content;

const Section6 = () => {
  return (
      // <Parallax speed={-10} translateX={['-50px', '100px']}>
    <Container sx={{ mt: { xs: 10, md: 20, lg: 25 } }}>
      <Title variant={{ xs: "h3", md: "h2" }} sx={{ mb: { xs: 5, md: 10 },mt: { xs: 5, md: 10 } }}>
        {title}
      </Title>

      <Grid container spacing={3} sx={{maxHeight: '100vh', overflow: 'auto'}} >
        {ITEMS.map((item) => (
          <Grid item xs={12} md={4} key={item.title}>
            <ServiceCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
      // </Parallax>
  );
};

export default Section6;

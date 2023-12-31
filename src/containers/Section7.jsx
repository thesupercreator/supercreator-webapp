import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "../components/landing-page/Cards/ServiceCard";
import Title from "../components/landing-page/Title";
import { section7Content } from "../utils/content";
import PricingServiceCard from "../components/landing-page/Cards/PricingServiceCard.jsx";

const { title, subtitle, ITEMS } = section7Content;

const Section7 = () => {
  return (
    <Container sx={{ mt: { xs: 10, md: 20, lg: 25 } }}>
      <Title variant={{ xs: "h3", md: "h2" }} sx={{ mb: 2 }}>
        {title}
      </Title>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: { xs: 5, md: 8 } }}
      >
        {subtitle}
      </Typography>

      <Grid container height="70vh" spacing={3}>
        {ITEMS.map((item) => (
          <Grid item xs={12} md={6}  key={item.title}>
              <PricingServiceCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Section7;

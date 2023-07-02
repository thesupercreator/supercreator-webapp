import { Box, Stack, Typography } from "@mui/material";
import Title from "../Title";
import CustomInput from "../Input/CustomInput.jsx";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight.js";
import LaunchButton from "../Buttons/LaunchButton.jsx";

const WaitlistServiceCard = () => {
  return (
    <Box
      sx={{

        height: "100%",
        position: "relative",
        p: 4,
        borderRadius: "30px",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "30px",
          border: "1px solid transparent",
          background: "linear-gradient(120deg,#5f5f61,transparent) border-box",
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exlude",
        },
      }}
    >
      <Stack sx={{ height: "100%"}} spacing={1}>
          <Title variant={{ xs: "h4", md: "h4" }}>Name</Title>

          <Typography variant="body2" color="text.secondary">
              <CustomInput placeholder="Your name"/>
          </Typography>
        <Title variant={{ xs: "h4", md: "h4" }}>Email</Title>

        <Typography variant="body2" color="text.secondary">
            <CustomInput placeholder="Your email" />
        </Typography>



          <LaunchButton sx={{borderRadius: 3, width:"30vh"}} text="Request Access" icon={KeyboardArrowRightIcon}/>
      </Stack>
    </Box>
  );
};

export default WaitlistServiceCard;

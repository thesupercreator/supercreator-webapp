import { Box, Stack, Typography } from "@mui/material";
import Title from "../Title";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight.js";
import SubmitButton from "../Buttons/SubmitButton.jsx";
import FormInput from "../Input/FormInput.jsx";
import axios from "axios";
import {useState} from "react";


const WaitlistServiceCard = ({success}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create an object with name and email data
        const data = {
            name,
            email
        };
        const config = {
            'Access-Control-Allow-Origin':'*'
        }
        //axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.defaults.headers.post['Content-Type'] ='application/json';
        // Send a POST request to the API endpoint
        await  axios.post('https://us-central1-supercreator-webapp.cloudfunctions.net/api/users', data)
            .then((response) => {
                console.log('Data sent successfully!', response.data);
                setName('');
                setEmail('');
            })
            .catch((error) => {
                console.error('Error sending data:', error);
                setName('');
                setEmail('');
            });
success(true);
    };
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
        <form onSubmit={handleSubmit}>
      <Stack sx={{ height: "100%"}} spacing={1}>
          <Title variant={{ xs: "h4", md: "h4" }}>Name</Title>

          <Typography variant="body2" color="text.secondary">
              <FormInput type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"/>
          </Typography>
        <Title variant={{ xs: "h4", md: "h4" }}>Email</Title>

        <Typography variant="body2" color="text.secondary">
            <FormInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" />
        </Typography>

          <SubmitButton sx={{ height: 60, my: 5 }} type="submit" text="Request Access" icon={KeyboardArrowRightIcon}/>
      </Stack>
        </form>
    </Box>
  );
};

export default WaitlistServiceCard;

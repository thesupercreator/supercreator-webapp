import {Button, SvgIcon} from "@mui/material";


const SubmitButton = ({ sx = {},fit, ...props }) => {
  return (
    <Button variant="outlined"
            sx={{
                borderRadius: 2,

                color: "text.primary",
                borderColor: "text.primary",
                width: fit ? "fit-content" : "100%",
                ...sx,
            }} {...props} type={props["type"]}>
        {/* eslint-disable-next-line react/prop-types */}
        {props["text"]}
        {/* eslint-disable-next-line react/prop-types */}
      <SvgIcon component={props["icon"]} fontSize={"inherit"} inheritViewBox />
    </Button>
  );
};

export default SubmitButton;

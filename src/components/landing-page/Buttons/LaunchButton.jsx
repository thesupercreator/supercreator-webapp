import {Button, SvgIcon} from "@mui/material";


const LaunchButton = ({ sx = {}, ...props }) => {
  return (
    <Button variant="contained" sx={{ borderRadius: 4, ...sx }} {...props} onClick={props["onClick"]}>
        {/* eslint-disable-next-line react/prop-types */}
        {props["text"]}
        {/* eslint-disable-next-line react/prop-types */}
      <SvgIcon component={props["icon"]} fontSize={"inherit"} inheritViewBox />
    </Button>
  );
};

export default LaunchButton;

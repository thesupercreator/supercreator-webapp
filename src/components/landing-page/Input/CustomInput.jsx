import Input from '@mui/base/Input';
import {TextField} from "@mui/material";

const CustomInput = ({ sx = {}, ...props })=>{
    // eslint-disable-next-line react/prop-types
    return <TextField id="outlined-basic" placeholder={props["placeholder"]} sx={{width:"100%", mt:"10px", mb:"10px"}} />
}

export default CustomInput;
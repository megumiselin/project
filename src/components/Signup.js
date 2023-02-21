import { Avatar, Button, Grid, Paper, TextField, Typography , Checkbox, FormControlLabel} from "@mui/material";
import { width } from "@mui/system";
import React from "react";

const Signup = () =>  {
    const paperStyle = {padding : 20 , height : '80vh' , width: 380 , margin : '20px auto' }
    const avatarStyle = {backgroundColor: 'pink'}
    const headerStyle = { margin:0}
    const marginStyle = {marginBottom:'15px'}

return(
    <Grid align='center' >
        <Paper style= {paperStyle} >
            <Grid>
                <Avatar style = {avatarStyle}  > 
                </Avatar>
                <h1 style={headerStyle}>Sign Up</h1>
                <Typography variant='caption'>
                    please fill this form to create an account
                </Typography>
            </Grid>

            <form>
                <TextField fullWidth label = 'Name' style={marginStyle} placeholder="Enter your name" />
                <TextField fullWidth label = 'e-mail'style={marginStyle} placeholder="Enter your e-mail" />
                <TextField fullWidth label = 'Phone Number' style={marginStyle} placeholder="5** *** ** ** " />
                <TextField fullWidth label = 'Password' style={marginStyle} placeholder="Choose a password"/>
                <TextField fullWidth label = 'Confirm your Password' style={{marginBottom: "15px"}} placeholder="Write same password again" />
              
                <FormControlLabel
            control={
           <Checkbox name="checkedA"  color="secondary"/>
                    }
            label="I read & accept all the policies "
                />    

                <Button type='submit' variant="contained" color="primary">  Sign Up </Button>



            </form>


    
        </Paper>
    </Grid>
     
    
);
};
export default Signup;

import React, { useState } from "react";
import { Avatar,Checkbox,FormControlLabel, Grid,Paper,TextField,Button,Typography,Link} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate ();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const validateEmail = (e) => {
  const emailValue = e.target.value;
  setEmail(emailValue); } 
   
    /*const validateEmail = (e,) => {
    const emailValue = e.target.value;
    if (/\S+@\S+\.\S+/.test(emailValue)) {
      setEmail(emailValue);}
       else {
      alert("Email should be in correct format (example@domain.com)");
  }};  */

  
     const validatePassword = (e) => {
     const passwordValue = e.target.value;
     if (/^\d+$/.test(passwordValue)) {
       setPassword(passwordValue);
     } else {
      alert("Password should contain only numbers");
     }};


   /*const validatePassword = (e) => {
    const passwordValue = e.target.value;
    if (/^\d+$/.test(passwordValue) && passwordValue.length >= 4) {
      setPassword(passwordValue);
    } else {
      alert("Password should contain only numbers and be longer than 4 characters");
    }
  }; */
  

    const checkUserInfo = () => {
      if (email !== "" && password !== "") {
        navigate("/home")
      } else {
        alert("lütfen kullanıcı bilgilerini giriniz")
      } };

 
  
  
  const paperStyle = {
    padding: 30,
    height: "80vh",
    width: 300,
    margin: "20px auto",
   
                      };
  
  const avatarStyle = { backgroundColor: "#f73378",marginBottom:'15px' };
  const btnStyle = { margin: "8px 0" , backgroundColor:"#ff9100" };


  
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}  >
         {" "} <LockOutlinedIcon />{" "}
          </Avatar>

  <Typography style={{ color: 'blue', fontStyle:'-moz-initial',marginBottom:'15px' }}>
    Login Form 
  </Typography>
    </Grid>

  

    <Grid align="center">
          
     <TextField
         label="e-mail*"
         type="text"
         value={email}
         onChange={validateEmail}
         placeholder="Enter e-mail"
         style={{ marginBottom: "15px" }} />

     <TextField
       label="Password*"
       type="password"
       value={password}
       onChange={validatePassword}
       placeholder="Enter Password"
       style={{ marginBottom: "20px" }}/>


  
    </Grid>

    <Grid align="center">
          <FormControlLabel
            control={<Checkbox name="checkedB" color="secondary" />}
            label="Remember me "
          />
    </Grid>

        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          style={btnStyle}
          onClick={() => {checkUserInfo()}}
          >
          {" "} Log in {" "}
        </Button>

        <Typography>
          <Link href="#"> Forgot Password? </Link>
        </Typography>

        <Typography>
          {" "}
          Do you have an account?
          <Link href="#"> Sign up </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
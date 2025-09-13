import React, { useEffect } from 'react';
import { Box,Typography,TextField,Button, Stack,IconButton } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';



export default function Signup() {

  const [formState,setFormState]=useState(0);
  const [formData,setFormData]=useState({username:"",email:"",password:""});
  const[showPassword,setShowPassword]=useState(false);
  const [error,setError]=useState("null");
  const [open,setOpen]=useState(false);

  const handleFormState=(e)=>{
    if(e.target.id==="login"){
      setFormState(1)
    }else{
      setFormState(0)
    }

    
   
  }
  const handleShow=()=>{
    setShowPassword(!showPassword);
  }

  const handleClose=()=>{
    setOpen(false);
  }

  const action =(<IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>);

  const handleChange=(e)=>{
  
       setFormData({...formData,[e.target.name]:e.target.value});
  }


  const handleSubmit=(e)=>{
              e.preventDefault();
              //console.log("form submitted",formData);
             const baseURL = process.env.REACT_APP_BACKEND_URL;
              const URL=formState===0?`${baseURL}/zerodha/signup`:`${baseURL}/zerodha/login`;
             // console.log(URL);
               axios.post(URL,{
                username:formData.username,
                email:formData.email,
                password:formData.password
               },{withCredentials:true}).then((res)=>{
                  setOpen(true);
                    // console.log(res.data.message);
                     //res.data will give an object but res.data.message will give string 
                     setError(res.data.message);
                 //   console.log(res.data.token);
                  

                  fetchDashboard(res.data.redirectURL);


 
                   
               }).catch(e=>{
                setOpen(true);
                if (e.response) {
               // backend responded with an error status
                     if (e.response.status === 400) {
                     setError(e.response.data.message);
                     } 
                  else if (e.response.status === 500) {
                   setError("Some internal error occurred");
                  } 
            else {
           setError("Something went wrong");
           }

            //console.log("Status:", e.response.status);
           // console.log("Message:", e.response.data.message);
          } else if (e.request) {
           //  request made but no response
            setError("No response from server");
         } else {
           // something else went wrong
            setError("Request error: " + e.message);
              }
              });
              
             
               setFormData({username:"",email:"",password:""});
             

  } 

  const fetchDashboard=(URL)=>{
    
           axios.get(URL, {withCredentials: true}).then((res)=>{

            if(res.status===200){
                window.location.href=res.data.url;
            }
              
           })
    .catch(e=>{
     // console.log(e.response.status);
      console.log(`Error ${e}`);
    })
  }


  useEffect(()=>{
    window.scrollTo(0,0);
  },[])


     
  return (
     <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        minHeight:400,
        margin: "auto",
        mt: 5,
        p: 3,
        boxShadow: 3,
        borderRadius: 2
      }}
    >
      <Stack direction={"row"} spacing={2} justifyContent={"center"} >
       
       
     <Button variant={formState===0?"contained":""} onClick={handleFormState} id='signup'>Signup</Button>
     <Button variant={formState===1?"contained":""} onClick={handleFormState}id='login'>Login</Button>
      </Stack>
    

      
      {formState===0&&
       <TextField
        label="Username"
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        fullWidth
        required
      />}

      <TextField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
      />


      <TextField
        label="Password"
        type={showPassword===true?"text":"password"}
        name="password"
        value={formData.password}
        onChange={handleChange}
        fullWidth
        required
      />
     
      {showPassword===false?

       <span style={{display:"flex"}}> 
          <img width="20" height="20" src="https://img.icons8.com/ios/50/show-password.png" alt="show-password" onClick={handleShow}/>
          <p className='ms-2'>  Show password</p>
           </span>
       :
        <span style={{display:"flex"}}>
        <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/hide.png" alt="hide" onClick={handleShow}/>
        <p className='ms-2'>Hide password</p> 
        </span> }
    
      <Button variant="contained" type="submit" fullWidth>
        Submit
      </Button>
       <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={error}
        action={action}
         anchorOrigin={{ vertical: "top", horizontal: "right" }}
          ContentProps={{
        sx: {
          backgroundColor: "white",
          color: "black",
         border: "1px solid #ccc",
         borderRadius: "8px",
        }
        }}
       
      />
    </Box>
  );
}

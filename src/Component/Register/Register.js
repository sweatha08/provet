import React from 'react';
import { Grid, Paper, Typography, TextField, Button , Box} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
// import Img from '../../Images/probg.jpg';
// import { createTheme } from '@material-ui/core/styles';
const Register = () => {

    const paperStyle = { padding: '30px 35px', width: '500px', margin: "60px auto" }
    const headerStyle = { margin: 0 }
    const namestyles = { margin: '40px 35px', width: '400px'}
    const emailstyles={ width:'400px', margin: '-27px 35px'}
    const phonestyles={width:'400px', margin: '35px 35px'}
    const pswdstyles={ width:'400px', margin:'-27px 35px'}
    const pswdstyle={width:'400px', margin:'35px 55px'}
   
    return (
        <div className="sample">
            <Grid container spacing={40}>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>

                        <h2 style={headerStyle}>SIGN UP</h2>
                        <Typography variant='caption' gutterBottom>Please fill this form to create an account</Typography>
                    </Grid>
                    <form  >
                         <PersonIcon style={{ margin: '65px auto' }}/>
                        <TextField style={namestyles} fullWidth label='Name' placeholder="Enter your name" />
                        <EmailIcon  style={{ margin: '0px auto' }} />
                        <TextField style={emailstyles} fullWidth label='Email' placeholder="Enter your email" />
                        <PhoneAndroidIcon style={{ margin: '55px auto'}} />
                        <TextField style={phonestyles} fullWidth label='Phone Number' placeholder="Enter your phone number" />
                        <LockIcon  />
                        <TextField style={pswdstyles} fullWidth label='Password' placeholder="Enter your password" />
                        <TextField style={pswdstyle} fullWidth label='Confirm Password' placeholder="Confirm your password" />
                        <br />
                        <Box textAlign='center'><Button type='submit' variant='contained' color='primary' >Sign up</Button></Box>
                    </form>
                </Paper>
            </Grid>
        </div>
    );
}


export default Register;


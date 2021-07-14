import React from 'react';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core'
// import Img from '../../Images/probg.jpg';
// import { createTheme } from '@material-ui/core/styles';
const Register = () => {

    const paperStyle = { padding: '30px 35px', width: 375, margin: "140px auto" }
    const headerStyle = { margin: 0 }
    const styles = { margin: '8px auto' }


    return (
        <div className="sample">
            <Grid container spacing={40}>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>

                        <h2 style={headerStyle}>SIGN UP</h2>
                        <Typography variant='caption' gutterBottom>Please fill this form to create an account</Typography>
                    </Grid>
                    <form  >
                        <TextField style={styles} fullWidth label='Name' placeholder="Enter your name" />
                        <TextField style={styles} fullWidth label='Email' placeholder="Enter your email" />
                        <TextField style={styles} fullWidth label='Phone Number' placeholder="Enter your phone number" />
                        <TextField style={styles} fullWidth label='Password' placeholder="Enter your password" />
                        <TextField style={styles} fullWidth label='Confirm Password' placeholder="Confirm your password" />
                        <br /><Button type='submit' variant='contained' color='primary'>Sign up</Button>

                    </form>
                </Paper>
            </Grid>
        </div>
    );
}


export default Register;


import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

function login() {
	const paperStyle = { height: '500px', width: '500px', margin: '100px auto' };
	const nameStyle = { margin: '40px 10px', width: '300px' };
	const passStyle = { margin: '10px 10px', width: '300px' };
	const buttonStyle = { margin: '50px auto' };
	return (
		<Grid align="center">
			<Paper elevation={10} style={paperStyle}>
				<h1>LOGIN</h1>
				<PersonIcon style={{ margin: '60px auto' }} />
				<TextField style={nameStyle} label="Username" placeholder="Enter username" />
				<br />
				<LockIcon style={{ margin: '30px auto' }} />
				<TextField style={passStyle} label="Password" placeholder="Enter password" type="password" />
				<br />
				<Button style={buttonStyle} variant="contained" color="primary">
					login
				</Button>
				<Typography>
					Do you have an account?
					<Link href="#">&nbsp;Signup</Link>
				</Typography>
			</Paper>
		</Grid>
	);
}

export default login;

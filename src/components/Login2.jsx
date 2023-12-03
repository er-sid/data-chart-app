import React, { useState } from 'react';
import { Grid,Paper, TextField, Button,Avatar  } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


    const Login2 = ({ onLogin }) => {
        const paperStyle={padding :20,height:'40vh',width:280, margin:"20px auto"}
        const avatarStyle={backgroundColor:'#1bbd7e'}
        const btnstyle={margin:'8px 0'}

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

      
        const handleLogin = () => {
          
          onLogin();
        };
  return (
    
 <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     { <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar> }
                    <h2>Log In</h2>
                </Grid>
            
                <TextField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} fullWidth required />
                <TextField type="password" label="Password" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth required/>
                
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth onClick={handleLogin}>Login as guest</Button>

                </Paper>
    </Grid>

  
  )
}

export default Login2;
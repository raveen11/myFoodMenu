import React,{useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link,useHistory} from 'react-router-dom'
import {auth} from '../firebase'
import Logo from '../components/UI/Logo/Logo'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color:'black'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor:'black',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const history=useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const signIn = e => {
    e.preventDefault();

    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
}

  const register = e => {
    e.preventDefault();

    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // it successfully created a new user with email and password
            if (auth) {
                alert('Created Successfully',auth)
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
}






  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <Link to="/">
            <Logo/>
          </Link>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={email}
            style={{color:'black'}}
            onChange={e=>setEmail(e.target.value)}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            style={{color:'black'}}
            value={password}
            onChange={e=>setPassword(e.target.value)}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={signIn}
            className={classes.submit}
          >
            Sign In
          </Button>
            <Grid item xs>
              <span href="#" variant="body2">
                Forgot password?
              </span>
            </Grid>
          
          
          <Grid item>
              <span href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </span>
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={register}
            className={classes.submit}
          >
            Sign Up
          </Button>
        
      </div>
    </Container>
  );
}
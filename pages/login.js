import React from 'react';
import {
  Button,
  List,
  ListItem,
  TextField,
  Link,
  Typography,
} from '@material-ui/core';
import Layout from '../components/Layout';
import useStyles from '../utils/styles';
import NextLink from 'next/link';

export default function Login() {
  const classes = useStyles();
  return (
    <Layout title="Login">
      <form className={classes.form}>
        <Typography component="h1" variant="h1">
          Login
        </Typography>
        <List>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
              imputProps={{ type: 'email' }}
            ></TextField>
          </ListItem>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="password"
              label="Password"
              imputProps={{ type: 'password' }}
            ></TextField>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Login
            </Button>
          </ListItem>
          <ListItem>
            Don't have an account? &nbsp;
            <NextLink href="/register" passHref>
              <Link> Register</Link>
            </NextLink>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}

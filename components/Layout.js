import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

export default function Layout({ children }) {
  return (
    <div>
      <Head> Next e-Auto</Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>eAuto</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved. Next eAuto 2021.</Typography>
      </footer>
    </div>
  );
}

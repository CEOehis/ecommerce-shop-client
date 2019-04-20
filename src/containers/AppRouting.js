import React from 'react';
import { Router } from '@reach/router';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F62F5E',
    },
    secondary: {
      light: '#ffffff',
      main: '#ff9900',
      contrastText: '#ffffff',
    },
  },
  status: {
    danger: 'orange',
  },
});

const AppRouting = () => (
  <MuiThemeProvider theme={theme}>
    <NavBar />
    <Router style={{ flex: 1 }}>
      <Home path="/" />
      <Dashboard path="/dashboard" />
    </Router>
    <Footer />
  </MuiThemeProvider>
);

const Home = () => (
  <div>
    <h2>Welcome</h2>
  </div>
);

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

export default AppRouting;

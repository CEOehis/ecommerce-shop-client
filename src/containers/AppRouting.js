import React from 'react';
import { Router } from '@reach/router';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
} from '@material-ui/core/styles';
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

const styles = {
  layout: {
    width: 'auto',
    flex: 1,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    [theme.breakpoints.up(1200 + theme.spacing.unit * 3 * 2)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
};

const Routes = ({ classes }) => (
  <Router className={classes.layout}>
    <Home path="/" />
    <Dashboard path="/dashboard" />
  </Router>
);

const StyledRoutes = withStyles(styles)(Routes);

const AppRouting = () => (
  <MuiThemeProvider theme={theme}>
    <NavBar />
    <StyledRoutes />
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

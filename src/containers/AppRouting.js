import React from 'react';
import { Router } from '@reach/router';
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles,
} from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Home from './pages/Home';
import ItemDetail from './pages/ItemDetail';
import Catalog from './pages/Catalog';

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
  typography: {
    useNextVariants: true,
  },
});

const styles = {
  layout: {
    width: 'auto',
    flex: 1,
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
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
    <ItemDetail path="/item/:itemId" />
    <Catalog path="/catalog" />
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

export default AppRouting;

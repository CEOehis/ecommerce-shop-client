import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import hero from '../../assets/hero.png';
import ItemCard from '../../components/ItemCard';
import DepartmentGrid from '../../components/DepartmentGrid';

const styles = theme => ({
  layout: {
    width: 'auto',
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
    [theme.breakpoints.up(1200 + theme.spacing.unit * 3 * 2)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  mainFeaturedPost: {
    backgroundImage: `url(${hero})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      minHeight: '450px',
      paddingTop: '40px',
    },
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  me: {
    padding: '20px',
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const Home = ({ classes }) => (
  <>
    <main className={classes.layout}>
      <Paper className={classes.mainFeaturedPost}>
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                Up to 80% off
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Get mouth watering, eye popping deals from our stores. Up to 80%
                discounts on premium products in every category.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </main>

    <Grid classes={{ container: classes.me }} container spacing={40}>
      <Grid spacing={8} marginBottom={40} item xs={12} md={4}>
        <ItemCard />
      </Grid>
      <Grid spacing={8} marginBottom={40} item xs={12} md={4}>
        <ItemCard />
      </Grid>
      <Grid spacing={8} marginBottom={40} item xs={12} md={4}>
        <ItemCard />
      </Grid>
    </Grid>
    <DepartmentGrid />
  </>
);

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

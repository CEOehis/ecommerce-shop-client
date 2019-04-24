import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Spinner from 'react-spinkit';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ItemCard from '../../components/ItemCard';
import DepartmentGrid from '../../components/DepartmentGrid';
import { getFeaturedProducts } from '../../actions/product';
import config from '../../config/config';

const { imageBaseUrl } = config;

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
    backgroundImage: `url(${imageBaseUrl}/hero.png)`,
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

class Home extends Component {
  state = {};

  componentDidMount() {
    const { getFeatured, featured } = this.props;
    if (featured.length) {
      return;
    }
    getFeatured();
  }

  render() {
    const { classes, featured, loading } = this.props;
    return (
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
                    Get mouth watering, eye popping deals from our stores. Up to
                    80% discounts on premium products in every category.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </main>
        <Typography variant="h4">Featured</Typography>
        {loading && (
          <Grid classes={{ container: classes.me }} container spacing={40}>
            <Grid item xs={12}>
              <Spinner
                style={{
                  textAlign: 'center',
                  height: '100px',
                }}
                name="line-scale-pulse-out"
                color="coral"
              />
            </Grid>
          </Grid>
        )}
        <Grid classes={{ container: classes.me }} container spacing={40}>
          {featured.map(product => (
            <Grid key={product.product_id} item xs={12} md={4}>
              <ItemCard product={product} />
            </Grid>
          ))}
        </Grid>
        <DepartmentGrid />
      </>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ product }) => {
  const { loading, featured } = product;
  return {
    loading,
    featured,
  };
};

const mapDispatchToProps = dispatch => ({
  getFeatured() {
    dispatch(getFeaturedProducts());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Home));

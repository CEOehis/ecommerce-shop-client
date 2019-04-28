/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Pagination from 'material-ui-flat-pagination';
import { CircularProgress } from '@material-ui/core';
import ItemCard from '../../components/ItemCard';
import config from '../../config/config';
import {
  getAllProducts,
  getAllProductsInCategory,
  getAllProductsInDepartment,
} from '../../actions/product.action';
import { descriptions } from '../../assets/tileData';

const { imageBaseUrl } = config;

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.grey[800],
  },
  heroContent: {
    // maxWidth: 800,
    width: '90%',
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    color: 'white',
    textShadow: '0px 2px 3px rgba(0, 0, 0, 1)',
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1200 + theme.spacing.unit * 3 * 2)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  loading: {
    padding: '20px',
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  pagination: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  progress: {
    textAlign: 'center',
    height: '100px',
    display: 'block',
    margin: '0 auto',
  },
});

class Catalog extends Component {
  state = {
    offset: 0,
    limit: 12,
  };

  componentDidMount() {
    const {
      getProducts,
      getProductsInCategory,
      getProductsInDepartment,
      department,
      category,
    } = this.props;

    const { search } = window.location;
    const decodedString = decodeURIComponent(search.substring(1));

    const isOnDepartmentCatalog = Boolean(department);
    const isOnCategoryCatalog = Boolean(category);
    if (isOnCategoryCatalog) {
      return getProductsInCategory(category);
    }
    if (isOnDepartmentCatalog) {
      return getProductsInDepartment(department);
    }
    return getProducts(decodedString);
  }

  componentDidUpdate(prevProps) {
    const {
      getProducts,
      getProductsInCategory,
      getProductsInDepartment,
      department,
      category,
      location: { pathname },
    } = this.props;

    const isOnDepartmentCatalog = Boolean(department);
    const isOnCategoryCatalog = Boolean(category);
    if (pathname !== prevProps.location.pathname) {
      if (isOnCategoryCatalog) {
        if (category !== prevProps.category) {
          return getProductsInCategory(category);
        }
      }
      if (isOnDepartmentCatalog) {
        if (department !== prevProps.department) {
          return getProductsInDepartment(department);
        }
      }
      return getProducts();
    }
    return null;
  }

  goToPage = page => {
    const {
      getProducts,
      getProductsInCategory,
      getProductsInDepartment,
      department,
      category,
    } = this.props;

    const isOnDepartmentCatalog = Boolean(department);
    const isOnCategoryCatalog = Boolean(category);
    const { search } = window.location;
    const decodedString = decodeURIComponent(search.substring(1));
    if (isOnCategoryCatalog) {
      return getProductsInCategory(category, page);
    }
    if (isOnDepartmentCatalog) {
      return getProductsInDepartment(department, page);
    }
    return getProducts(decodedString, page);
  };

  handlePagination = offset => {
    const { limit } = this.state;

    this.setState({ offset }, () => {
      const page = offset / limit + 1;
      this.goToPage(page);
    });
  };

  render() {
    const {
      department,
      category,
      classes,
      products,
      totalRecords,
      loading,
    } = this.props;
    const { offset } = this.state;

    return (
      <>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div
            className={classes.heroUnit}
            style={{
              backgroundImage: `url(${imageBaseUrl}/${department ||
                'hero'}.png)`,
            }}
          >
            <div className={classes.heroContent}>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="inherit"
                gutterBottom
              >
                {category
                  ? category.toUpperCase()
                  : department
                  ? department.toUpperCase()
                  : 'ALL PRODUCTS'}
              </Typography>
              <Typography variant="h6" color="inherit" paragraph>
                {category
                  ? descriptions[category]
                  : department
                  ? descriptions[department]
                  : descriptions['all products']}
              </Typography>
            </div>
          </div>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {products.length ? (
              <Pagination
                limit={12}
                offset={offset}
                total={totalRecords}
                onClick={(e, pageOffset) => this.handlePagination(pageOffset)}
                disabled={loading}
                className={classes.pagination}
              />
            ) : null}
            {loading ? (
              <Grid
                classes={{ container: classes.loading }}
                container
                spacing={40}
              >
                <Grid item xs={12}>
                  <CircularProgress
                    className={classes.progress}
                    color="secondary"
                  />
                </Grid>
              </Grid>
            ) : (
              <Grid container spacing={40}>
                {products.map(product => (
                  <Grid item key={product.product_id} sm={6} md={4} lg={3}>
                    <ItemCard product={product} />
                  </Grid>
                ))}
              </Grid>
            )}
          </div>
          {products.length ? (
            <Pagination
              limit={12}
              offset={offset}
              total={totalRecords}
              onClick={(e, pageOffset) => this.handlePagination(pageOffset)}
              disabled={loading}
              className={classes.pagination}
            />
          ) : null}
        </main>
      </>
    );
  }
}
Catalog.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ product }) => {
  const {
    loading,
    products,
    meta: { currentPage, totalRecords },
  } = product;
  return {
    loading,
    products,
    currentPage,
    totalRecords,
  };
};

const mapDispatchToProps = dispatch => ({
  getProducts(search, page, limit) {
    dispatch(getAllProducts(search, page, limit));
  },
  getProductsInCategory(category, page, limit) {
    dispatch(getAllProductsInCategory(category, page, limit));
  },
  getProductsInDepartment(department, page, limit) {
    dispatch(getAllProductsInDepartment(department, page, limit));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Catalog));

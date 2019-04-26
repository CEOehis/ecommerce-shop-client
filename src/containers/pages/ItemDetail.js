import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Spinner from 'react-spinkit';
import Button from '@material-ui/core/Button';
import ColorPicker from '../../components/ColorPicker';
import SizePicker from '../../components/SizePicker';
import QuantityPicker from '../../components/QuantityPicker';
import { getProductDetails } from '../../actions/product.action';
import config from '../../config/config';

const { imageBaseUrl } = config;

const styles = theme => ({
  layout: {
    width: 'auto',
    marginTop: '20px',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    [theme.breakpoints.up(1200 + theme.spacing.unit * 3 * 2)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.down(600 + theme.spacing.unit * 3 * 2)]: {
      marginLeft: '20px',
      marginRight: '20px',
    },
  },
  itemName: {
    margin: 'auto',
  },
  itemDescription: {
    width: '80%',
    marginTop: '20px',
    fontSize: '20px',
  },
  media: {
    height: '350px',
    backgroundSize: 'contain',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    marginLeft: '20px',
    borderRadius: theme.shape.borderRadius * 100,
    paddingLeft: '50px',
    paddingRight: '50px',
  },
});

class ItemDetail extends Component {
  state = {};

  componentDidMount() {
    const { getProduct, itemId } = this.props;
    getProduct(itemId);
  }

  render() {
    const { classes, loading, singleProduct } = this.props;
    return (
      <>
        <main className={classes.layout}>
          {loading ? (
            <Grid
              classes={{ container: classes.loading }}
              container
              spacing={40}
            >
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
          ) : (
            singleProduct && (
              <Grid container>
                <Grid item xs={12} md={5}>
                  <CardMedia
                    className={classes.media}
                    image={`${imageBaseUrl}/${singleProduct.image}`}
                    title="Contemplative Reptile"
                    height="100px"
                  />
                </Grid>
                <Grid item xs={12} md={7}>
                  <Typography
                    className={classes.itemName}
                    gutterBottom
                    variant="h4"
                  >
                    {singleProduct.name}
                  </Typography>
                  <Typography
                    className={classes.itemPrice}
                    gutterBottom
                    variant="h5"
                    component="h2"
                    color="primary"
                  >
                    ${singleProduct.price}
                  </Typography>
                  <Typography
                    className={classes.itemDescription}
                    gutterBottom
                    variant="body1"
                  >
                    {singleProduct.description}
                  </Typography>
                  <QuantityPicker />
                  <ColorPicker />
                  <SizePicker />
                  <Button
                    variant="contained"
                    className={classes.button}
                    color="primary"
                  >
                    Add to cart
                  </Button>
                </Grid>
              </Grid>
            )
          )}
        </main>
      </>
    );
  }
}

const mapStateToProps = ({ product }) => {
  const { loading, singleProduct } = product;
  return {
    loading,
    singleProduct,
  };
};

const mapDispatchToProps = dispatch => ({
  getProduct(productId) {
    dispatch(getProductDetails(productId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ItemDetail));

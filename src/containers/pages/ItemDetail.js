import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Spinner from 'react-spinkit';
import Button from '@material-ui/core/Button';
import cookieParse from 'cookie-parse';
import ColorPicker from '../../components/ColorPicker';
import SizePicker from '../../components/SizePicker';
import QuantityPicker from '../../components/QuantityPicker';
import CardNotification from '../../components/CartNotification';
import { getProductDetails } from '../../actions/product.action';
import config from '../../config/config';
import { addToCart } from '../../actions/cart.action';
import * as types from '../../actions/action.types';

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
  state = {
    quantity: 1,
    size: null,
    color: null,
    showSuccessMessage: false,
  };

  componentDidMount() {
    const { getProduct, itemId } = this.props;
    getProduct(itemId);
  }

  reduceQuantity = () => {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity - 1,
    });
  };

  increaseQuantity = () => {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity + 1,
    });
  };

  selectColor = color => {
    this.setState({
      color,
    });
  };

  selectSize = size => {
    this.setState({
      size,
    });
  };

  addToCart = async () => {
    const { quantity, size, color } = this.state;
    const { addItemToCart, itemId } = this.props;
    const { cartId } = cookieParse.parse(document.cookie);
    const attributes = `${size}, ${color}`;
    const status = await addItemToCart({
      quantity,
      attributes,
      cartId,
      productId: itemId,
    });
    if (status.type === types.ADD_TO_CART_SUCCESS) {
      this.setState({
        quantity: 1,
        size: null,
        color: null,
        showSuccessMessage: true,
      });
    }
  };

  closeSnackBar = () => {
    this.setState({
      showSuccessMessage: false,
    });
  };

  render() {
    const { classes, loading, singleProduct, addingToCart } = this.props;
    const { quantity, size, color, showSuccessMessage } = this.state;

    return (
      <>
        <main className={classes.layout}>
          <CardNotification
            shouldOpen={showSuccessMessage}
            closeSnackBar={this.closeSnackBar}
          />
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
                  <QuantityPicker
                    quantity={quantity}
                    onIncreaseQuantity={this.increaseQuantity}
                    onReduceQuantity={this.reduceQuantity}
                  />
                  <ColorPicker color={color} onColorChange={this.selectColor} />
                  <SizePicker size={size} onSizeChange={this.selectSize} />
                  <Button
                    variant="contained"
                    className={classes.button}
                    color="primary"
                    onClick={this.addToCart}
                    disabled={!quantity || !size || !color || addingToCart}
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

const mapStateToProps = ({ product, cart }) => {
  const { loading, singleProduct } = product;
  return {
    loading,
    singleProduct,
    addingToCart: cart.loading,
  };
};

const mapDispatchToProps = dispatch => ({
  getProduct(productId) {
    dispatch(getProductDetails(productId));
  },
  addItemToCart(payload) {
    return dispatch(addToCart(payload));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ItemDetail));

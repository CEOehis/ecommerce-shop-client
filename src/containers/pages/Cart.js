import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link as ReachLink } from '@reach/router';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import config from '../../config/config';
import { deleteItem } from '../../actions/cart.action';

const { imageBaseUrl } = config;

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
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
  table: {
    minWidth: 700,
  },
  heroContent: {
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 2}px`,
  },
  name: {
    marginBottom: 0,
  },
  actionButton: {
    margin: '10px auto',
    borderRadius: '500px',
    paddingLeft: '30px',
    paddingRight: '30px',
    fontSize: '16px',
    background: theme.palette.primary.main,
    color: 'white',
    paddingTop: '12px',
    paddingBottom: '12px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  emptyCart: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
});

function Cart(props) {
  const { classes, cart, removeItem } = props;

  const subTotal = cart.reduce((acc, curr) => {
    return Number(acc) + Number(curr.Product.price) * curr.quantity;
  }, 0);

  const discountedTotal = cart.reduce((acc, curr) => {
    const price = Number(curr.Product.price);
    const discountedPrice = Number(curr.Product.discounted_price);
    return Number(acc) + (discountedPrice || price) * curr.quantity;
  }, 0);

  if (!cart.length) {
    return (
      <main className={classes.emptyCart}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Your cart is empty.
          </Typography>

          <Typography component="h1" variant="h6">
            You would not want to leave this shop empty handed now, would you.{' '}
          </Typography>
          <Typography component="h1" variant="h6">
            <Link
              size="large"
              color="secondary"
              component={ReachLink}
              to="/catalog"
              underline="none"
            >
              Click here to continue shopping
            </Link>
          </Typography>
        </Paper>
      </main>
    );
  }

  return (
    <>
      <main className={classes.layout}>
        <div className={classes.heroContent}>
          <Typography
            component="h1"
            variant="h5"
            color="textPrimary"
            gutterBottom
          >
            Cart({cart.length} items)
          </Typography>
        </div>

        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Item</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell align="right">Unit Price</TableCell>
                <TableCell align="right">Total price</TableCell>
                <TableCell />
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map(item => (
                <TableRow key={item.item_id}>
                  <TableCell component="th" scope="row">
                    <img
                      alt={item.Product.name}
                      src={`${imageBaseUrl}/${item.Product.thumbnail}`}
                    />
                  </TableCell>
                  <TableCell>
                    <h3 className={classes.name}>{item.Product.name}</h3>
                    <br />
                    {item.attributes}
                  </TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell align="right">${item.Product.price}</TableCell>
                  <TableCell align="right">
                    ${(item.Product.price * item.quantity).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => removeItem(item.item_id)}
                      color="primary"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell>Sub - Total</TableCell>
                <TableCell align="right">${subTotal.toFixed(2)}</TableCell>
                <TableCell />
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell>Total discount</TableCell>
                <TableCell align="right">
                  ${(subTotal - discountedTotal).toFixed(2)}
                </TableCell>
                <TableCell />
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell>Total</TableCell>
                <TableCell align="right">
                  ${discountedTotal.toFixed(2)}
                </TableCell>
                <TableCell />
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell />
                <TableCell align="right">
                  <Link
                    className={classes.actionButton}
                    size="large"
                    color="secondary"
                    component={ReachLink}
                    to="/checkout"
                    underline="none"
                  >
                    Checkout
                  </Link>
                </TableCell>
                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </main>
    </>
  );
}

Cart.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart.cart,
});

const mapDispatchToProps = dispatch => ({
  removeItem(itemId) {
    dispatch(deleteItem(itemId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Cart));

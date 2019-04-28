import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import StripeCheckout from 'react-stripe-checkout';
import { payOrder } from '../../actions/cart.action';

const styles = theme => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
  progress: {
    textAlign: 'center',
    height: '100px',
    display: 'block',
    margin: '0 auto',
  },
});

const stripeApiKey = 'pk_test_Vm9TOT7YisZiGSdd5dQ39Zis00NRuNM3St';

class PaymentForm extends Component {
  state = {};

  handleClose = () => {
    console.log('App#handleClose');
  };

  handleToken = async token => {
    const { email, id: stripeToken } = token;
    const { order, payWithStripe, handleNext } = this.props;
    await payWithStripe({ email, stripeToken, orderId: order.order_id });
    handleNext();
  };

  render() {
    const { classes, order, handleBack, loading } = this.props;

    return (
      <React.Fragment>
        {loading ? (
          <>
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
                <Typography variant="h6" align="center">
                  Finalizing payment
                </Typography>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Typography variant="h6" gutterBottom>
              Payment method
            </Typography>
            <StripeCheckout
              allowRememberMe={false}
              amount={(order.total_amount.toFixed(2) * 100).toFixed()}
              closed={this.handleClose}
              description="Payment for T-Shirt"
              label="Pay with Stripe 💳"
              locale="auto"
              name="Shopmate"
              opened={this.handleOpen}
              panelLabel="Pay {{amount}}"
              stripeKey={stripeApiKey}
              token={this.handleToken}
            />
            <div className={classes.buttons}>
              <Button onClick={handleBack} className={classes.button}>
                Back
              </Button>
            </div>
          </>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  order: state.cart.order,
  loading: state.cart.loading,
});

const matchDispatchToProps = dispatch => ({
  payWithStripe(payload) {
    return dispatch(payOrder(payload));
  },
});

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(withStyles(styles)(PaymentForm));

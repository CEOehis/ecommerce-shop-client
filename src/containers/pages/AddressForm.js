/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { Link as ReachLink } from '@reach/router';
import Link from '@material-ui/core/Link';
import { updateShipping } from '../../actions/cart.action';

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

class AddressForm extends Component {
  state = {
    updated: false,
    name: this.props.user ? this.props.user.name : '',
    address1: this.props.user ? this.props.user.address_1 : '',
    address2: this.props.user ? this.props.user.address_2 : '',
    city: this.props.user ? this.props.user.city : '',
    region: this.props.user ? this.props.user.region : '',
    postalCode: this.props.user ? this.props.user.postal_code : '',
    country: this.props.user ? this.props.user.country : '',
  };

  handleInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
      updated: true,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { handleNext, updateShippingInfo } = this.props;
    const {
      name,
      address1,
      address2,
      city,
      region,
      postalCode,
      country,
      updated,
    } = this.state;

    if (updated) {
      await updateShippingInfo({
        name,
        address1,
        address2,
        city,
        region,
        postalCode,
        country,
      });
    }
    handleNext();

    // return handleLogIn({ email, password });
  };

  render() {
    const { classes, products } = this.props;
    const {
      name,
      address1,
      address2,
      city,
      region,
      postalCode,
      country,
    } = this.state;

    if (!products.length) {
      return (
        <main className={classes.layout}>
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
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <TextField
                required
                id="name"
                name="name"
                label="Full name"
                fullWidth
                autoComplete="name"
                value={name}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="address1"
                name="address1"
                label="Address line 1"
                fullWidth
                autoComplete="billing address-line1"
                value={address1}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address2"
                name="address2"
                label="Address line 2"
                fullWidth
                autoComplete="billing address-line2"
                value={address2}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                autoComplete="billing address-level2"
                value={city}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="region"
                name="region"
                label="State/Province/Region"
                fullWidth
                value={region}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="postalCode"
                name="postalCode"
                label="Zip / Postal code"
                fullWidth
                autoComplete="billing postal-code"
                value={postalCode}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="billing country"
                value={country}
                onChange={this.handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="saveAddress" value="yes" />
                }
                label="Use this address for payment details"
              />
            </Grid>
          </Grid>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleNext}
              type="submit"
              className={classes.button}
            >
              Next
            </Button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

AddressForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  updateShippingInfo(payload) {
    return dispatch(updateShipping(payload));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(AddressForm));

import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '75px',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    flexDirection: 'row',
  },
  button: {
    marginRight: '10px',
    marginTop: '10px',
    '&:first-child': {
      marginLeft: 0,
    },
  },
  sizes: {
    marginBottom: theme.spacing.unit,
  },
  buttonGroup: {
    paddingLeft: 0,
  },
});

class QuantityPicker extends Component {
  state = {
    quantity: 1,
  };

  handleChange = event => {
    this.setState({
      quantity: event.target.value,
    });
  };

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

  render() {
    const { classes } = this.props;
    const { quantity } = this.state;
    return (
      <div>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Quantity</FormLabel>
          <div>
            <Button
              variant="extendedFab"
              className={classes.button}
              onClick={this.reduceQuantity}
              disabled={quantity === 1}
              color="primary"
            >
              -
            </Button>
            <TextField
              id="filled-number"
              value={quantity}
              type="number"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              margin="dense"
              variant="filled"
              disabled
            />
            <Button
              variant="extendedFab"
              className={classes.button}
              onClick={this.increaseQuantity}
              disabled={quantity === 5}
              color="primary"
            >
              +
            </Button>
          </div>
        </FormControl>
      </div>
    );
  }
}

QuantityPicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuantityPicker);

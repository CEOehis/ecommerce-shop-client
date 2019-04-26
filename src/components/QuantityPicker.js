import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Fab } from '@material-ui/core';

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
    marginBottom: 0,
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
  state = {};

  render() {
    const {
      classes,
      quantity,
      onIncreaseQuantity,
      onReduceQuantity,
    } = this.props;
    return (
      <div>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Quantity</FormLabel>
          <div>
            <Fab
              color="primary"
              className={classes.button}
              onClick={onReduceQuantity}
              disabled={quantity === 1}
              variant="extended"
            >
              -
            </Fab>
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
            <Fab
              onClick={onIncreaseQuantity}
              disabled={quantity === 5}
              color="primary"
              className={classes.button}
              variant="extended"
            >
              +
            </Fab>
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

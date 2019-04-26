import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
    display: 'flex',
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

class SizePicker extends React.Component {
  state = {};

  handleSelect = event => {
    const { onSizeChange } = this.props;
    onSizeChange(event.target.innerText);
  };

  render() {
    const { classes, size } = this.props;

    return (
      <div>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Size</FormLabel>
          <Grid container spacing={0} className={classes.sizes}>
            <Grid item classes={{ item: classes.buttonGroup }}>
              <Button
                variant="contained"
                className={classes.button}
                color={size === 'S' ? 'primary' : null}
                onClick={this.handleSelect}
              >
                S
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                color={size === 'M' ? 'primary' : null}
                onClick={this.handleSelect}
              >
                M
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                color={size === 'L' ? 'primary' : null}
                onClick={this.handleSelect}
              >
                L
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                color={size === 'XL' ? 'primary' : null}
                onClick={this.handleSelect}
              >
                XL
              </Button>
              <Button
                variant="contained"
                className={classes.button}
                color={size === 'XXL' ? 'primary' : null}
                onClick={this.handleSelect}
              >
                XXL
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </div>
    );
  }
}

SizePicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SizePicker);

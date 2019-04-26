import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
    marginBottom: 0,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    flexDirection: 'row',
  },
  radio: {
    [theme.breakpoints.down(600 + theme.spacing.unit * 3 * 2)]: {
      marginRight: '1px',
    },
  },
});

class ColorPicker extends React.Component {
  state = {};

  handleChange = event => {
    const { onColorChange } = this.props;
    onColorChange(event.target.value);
  };

  render() {
    const { classes, color } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Color</FormLabel>
          <RadioGroup
            aria-label="Color"
            name="color"
            className={classes.group}
            value={color}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="white"
              classes={{ root: classes.radio }}
              control={
                <Radio
                  disableRipple
                  icon={
                    <RadioButtonUncheckedIcon
                      style={{
                        color: 'white',
                        background: 'white',
                        borderRadius: '0',
                        border: '1px solid black',
                      }}
                    />
                  }
                  checkedIcon={
                    <RadioButtonCheckedIcon
                      style={{
                        color: 'white',
                        background: 'white',
                        borderRadius: '50%',
                        border: '1px solid black',
                      }}
                    />
                  }
                />
              }
            />
            <FormControlLabel
              value="black"
              classes={{ root: classes.radio }}
              control={
                <Radio
                  disableRipple
                  icon={
                    <RadioButtonUncheckedIcon
                      style={{
                        color: 'black',
                        background: 'black',
                      }}
                    />
                  }
                  checkedIcon={
                    <RadioButtonCheckedIcon
                      style={{
                        color: 'black',
                        background: 'black',
                        borderRadius: '50%',
                      }}
                    />
                  }
                />
              }
            />
            <FormControlLabel
              value="red"
              classes={{ root: classes.radio }}
              control={
                <Radio
                  disableRipple
                  icon={
                    <RadioButtonUncheckedIcon
                      style={{
                        color: 'red',
                        background: 'red',
                      }}
                    />
                  }
                  checkedIcon={
                    <RadioButtonCheckedIcon
                      style={{
                        color: 'red',
                        background: 'red',
                        borderRadius: '50%',
                      }}
                    />
                  }
                />
              }
            />
            <FormControlLabel
              value="orange"
              classes={{ root: classes.radio }}
              control={
                <Radio
                  disableRipple
                  icon={
                    <RadioButtonUncheckedIcon
                      style={{
                        color: 'orange',
                        background: 'orange',
                      }}
                    />
                  }
                  checkedIcon={
                    <RadioButtonCheckedIcon
                      style={{
                        color: 'orange',
                        background: 'orange',
                        borderRadius: '50%',
                      }}
                    />
                  }
                />
              }
            />
            <FormControlLabel
              value="yellow"
              classes={{ root: classes.radio }}
              control={
                <Radio
                  disableRipple
                  icon={
                    <RadioButtonUncheckedIcon
                      style={{
                        color: 'yellow',
                        background: 'yellow',
                      }}
                    />
                  }
                  checkedIcon={
                    <RadioButtonCheckedIcon
                      style={{
                        color: 'yellow',
                        background: 'yellow',
                        borderRadius: '50%',
                      }}
                    />
                  }
                />
              }
            />
            <FormControlLabel
              value="green"
              classes={{ root: classes.radio }}
              control={
                <Radio
                  disableRipple
                  icon={
                    <RadioButtonUncheckedIcon
                      style={{
                        color: 'green',
                        background: 'green',
                      }}
                    />
                  }
                  checkedIcon={
                    <RadioButtonCheckedIcon
                      style={{
                        color: 'green',
                        background: 'green',
                        borderRadius: '50%',
                      }}
                    />
                  }
                />
              }
            />
            <FormControlLabel
              value="blue"
              classes={{ root: classes.radio }}
              control={
                <Radio
                  disableRipple
                  icon={
                    <RadioButtonUncheckedIcon
                      style={{
                        color: 'blue',
                        background: 'blue',
                      }}
                    />
                  }
                  checkedIcon={
                    <RadioButtonCheckedIcon
                      style={{
                        color: 'blue',
                        background: 'blue',
                        borderRadius: '50%',
                      }}
                    />
                  }
                />
              }
            />
            <FormControlLabel
              value="purple"
              classes={{ root: classes.radio }}
              control={
                <Radio
                  disableRipple
                  icon={
                    <RadioButtonUncheckedIcon
                      style={{
                        color: 'purple',
                        background: 'purple',
                      }}
                    />
                  }
                  checkedIcon={
                    <RadioButtonCheckedIcon
                      style={{
                        color: 'purple',
                        background: 'purple',
                        borderRadius: '50%',
                      }}
                    />
                  }
                />
              }
            />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

ColorPicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ColorPicker);

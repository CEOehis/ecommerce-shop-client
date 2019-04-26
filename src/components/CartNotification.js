import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import { Link as ReachLink } from '@reach/router';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit * 2,
  },
  success: {
    backgroundColor: green[600],
  },
  actionButton: {
    fontSize: '13px',
  },
});

class CardNotification extends React.Component {
  state = {
    open: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.shouldOpen !== prevState.open) {
      return {
        open: nextProps.shouldOpen,
      };
    }
    return null;
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    const { closeSnackBar } = this.props;

    this.setState({ open: false });
    closeSnackBar();
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={open}
          autoHideDuration={10000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
        >
          <SnackbarContent
            className={classes.success}
            aria-describedby="client-snackbar"
            message={<span id="message-id">Item added to cart</span>}
            action={[
              <Link
                className={classes.actionButton}
                size="large"
                color="secondary"
                component={ReachLink}
                to="/cart"
                underline="none"
              >
                VIEW CART
              </Link>,
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={this.handleClose}
              >
                <CloseIcon />
              </IconButton>,
            ]}
          />
        </Snackbar>
      </div>
    );
  }
}

CardNotification.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardNotification);

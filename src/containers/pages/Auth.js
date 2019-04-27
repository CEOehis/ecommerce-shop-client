import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link as ReachLink, Redirect } from '@reach/router';
import Link from '@material-ui/core/Link';
import { signUp, logIn } from '../../actions/auth.action';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Auth extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { handleSignUp, path, handleLogIn } = this.props;
    const { name, email, password } = this.state;

    const isRegisterPage = path === '/register';
    if (isRegisterPage) {
      return handleSignUp({ name, email, password });
    }
    return handleLogIn({ email, password });
  };

  render() {
    const { name, email, password } = this.state;
    const { classes, path, isAuthenticated } = this.props;
    const isRegisterPage = path === '/register';
    const promptMessage = isRegisterPage ? 'Already a user' : 'Not a user';
    const promptAction = isRegisterPage ? 'sign in' : 'sign up';
    const promptPath = isRegisterPage ? '/login' : '/register';

    if (isAuthenticated) {
      return <Redirect to="" noThrow />;
    }

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isRegisterPage ? 'Sign up' : 'Sign in'}
          </Typography>
          <form onSubmit={this.handleSubmit} className={classes.form}>
            {isRegisterPage ? (
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="name">Name</InputLabel>
                <Input
                  onChange={this.handleInputChange}
                  value={name}
                  id="name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
              </FormControl>
            ) : null}
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input
                onChange={this.handleInputChange}
                value={email}
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                onChange={this.handleInputChange}
                value={password}
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </Button>
          </form>
          <p>
            {promptMessage}{' '}
            <Link
              className={classes.actionButton}
              size="large"
              color="secondary"
              component={ReachLink}
              to={promptPath}
              underline="none"
            >
              {promptAction}
            </Link>
          </p>
        </Paper>
      </main>
    );
  }
}

Auth.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  handleSignUp(payload) {
    dispatch(signUp(payload));
  },
  handleLogIn(payload) {
    dispatch(logIn(payload));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Auth));

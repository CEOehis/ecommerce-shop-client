import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => {
  global.footerTheme = theme;
  return {
    footer: {
      marginTop: theme.spacing.unit * 8,
      padding: `${theme.spacing.unit * 6}px`,
      background: '#2E2E2E',
      color: '#FFFFFF',
      [theme.breakpoints.down(900 + theme.spacing.unit * 3 * 2)]: {
        paddingLeft: `${theme.spacing.unit * 4}px`,
        paddingRight: `${theme.spacing.unit * 4}px`,
      },
      [theme.breakpoints.down(500 + theme.spacing.unit * 3 * 2)]: {
        paddingLeft: `${theme.spacing.unit * 1}px`,
        paddingRight: `${theme.spacing.unit * 1}px`,
        display: 'block',
      },
    },
    item: {
      padding: '16px',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      [theme.breakpoints.up(1200 + theme.spacing.unit * 3 * 2)]: {
        width: 1200,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  };
};

const d = new Date();
const currentYear = d.getFullYear();
const footers = [
  {
    title: 'Questions?',
    description: ['Help', 'Track Order', 'Returns'],
  },
  {
    title: "What's in store",
    description: ['women', 'Men', 'Product A-Z', 'Buy Gift Vouchers'],
  },
  {
    title: 'Follow Us',
    description: ['Facebook', 'Twitter', 'YouTube'],
  },
  {
    title: '',
    description: [
      `© 2019 ${currentYear > 2019 ? `-${currentYear}` : ''} Shopmate Ltd.`,
    ],
  },
];

const Footer = ({ classes }) => (
  <footer className={classNames(classes.footer)}>
    <Grid
      classes={{ container: classes.layout }}
      container
      spacing={0}
      justify="space-evenly"
    >
      {footers.map(footer => (
        <Grid classes={{ item: classes.item }} item xs key={footer.title}>
          <Typography variant="h6" color="inherit" gutterBottom>
            {footer.title.toUpperCase()}
          </Typography>
          {footer.description.map(item => (
            <Typography key={item} variant="subtitle1" color="inherit">
              {item}
            </Typography>
          ))}
        </Grid>
      ))}
    </Grid>
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);

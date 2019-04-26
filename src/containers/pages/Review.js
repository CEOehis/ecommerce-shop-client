import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
});

function Review(props) {
  const { classes, products, user } = props;
  const addresses = [user.address_1, user.city, user.country, user.postal_code];
  const discountedTotal = products.reduce((acc, curr) => {
    const price = Number(curr.Product.price);
    const discountedPrice = Number(curr.Product.discounted_price);
    return Number(acc) + (discountedPrice || price) * curr.quantity;
  }, 0);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map(product => (
          <ListItem className={classes.listItem} key={product.item_id}>
            <ListItemText
              primary={product.Product.name}
              secondary={product.attributes}
            />
            <Typography variant="body2">
              {(product.Product.price * product.quantity).toFixed(2)}
            </Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            ${discountedTotal.toFixed(2)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{user.name}</Typography>
          <Typography gutterBottom>{addresses.join(' ')}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Review.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Review);

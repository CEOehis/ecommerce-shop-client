import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link as ReachLink } from '@reach/router';
import Link from '@material-ui/core/Link';
import config from '../config/config';

const { imageBaseUrl } = config;

const styles = theme => ({
  media: {
    height: 200,
    backgroundSize: 'contain',
  },
  itemName: {
    textAlign: 'center',
    width: '80%',
    margin: 'auto',
  },
  itemPrice: {
    textAlign: 'center',
  },
  actionButton: {
    margin: '5px auto',
    borderRadius: '500px',
    paddingLeft: '30px',
    paddingRight: '30px',
    fontSize: '16px',
    background: theme.palette.primary.main,
    color: 'white',
    paddingTop: '10px',
    paddingBottom: '10px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  cta: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: '-22px',
    margin: '0 auto',
    background: 'rgba(0, 0, 0, 0.6)',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
  },
});

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBuyNow: false,
    };
  }

  toggleShowBuyNow = show => () => {
    this.setState({
      showBuyNow: show,
    });
  };

  render() {
    const { classes, product } = this.props;
    const { showBuyNow } = this.state;
    const imageUrl = `${imageBaseUrl}/${product.image}`;
    return (
      <Card
        onMouseEnter={this.toggleShowBuyNow(true)}
        onMouseLeave={this.toggleShowBuyNow(false)}
        className={classes.card}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imageUrl}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              className={classes.itemName}
              gutterBottom
              variant="h6"
              component="h2"
            >
              {product.name}
            </Typography>
            <Typography
              className={classes.itemPrice}
              gutterBottom
              variant="h6"
              component="h2"
              color="primary"
            >
              ${product.price}
            </Typography>
            {showBuyNow && (
              <CardActions className={classes.cta}>
                <div className={classes.buttonGroup}>
                  <Link
                    className={classes.actionButton}
                    size="large"
                    color="secondary"
                    component={ReachLink}
                    to={`/item/${product.product_id}`}
                    underline="none"
                  >
                    Buy Now
                  </Link>
                </div>
              </CardActions>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemCard);

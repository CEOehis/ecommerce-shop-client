import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link as ReachLink } from '@reach/router';
import Link from '@material-ui/core/Link';
import shirt from '../assets/shirt.png';

const styles = {
  card: {
    // maxWidth: 345,
  },
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
};

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBuyNow: false,
    };
  }

  toggleShowBuyNow = () => {
    const { showBuyNow } = this.state;
    this.setState({
      showBuyNow: !showBuyNow,
    });
  };

  render() {
    const { classes } = this.props;
    const { showBuyNow } = this.state;
    return (
      <Card
        onMouseEnter={this.toggleShowBuyNow}
        onMouseLeave={this.toggleShowBuyNow}
        className={classes.card}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={shirt}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              className={classes.itemName}
              gutterBottom
              variant="h6"
              component="h2"
            >
              Pull& Bear Jumper In Textured Knit In Blue
            </Typography>
            <Typography
              className={classes.itemPrice}
              gutterBottom
              variant="h6"
              component="h2"
              color="primary"
            >
              $19.59
            </Typography>
            {showBuyNow && (
              <CardActions className={classes.cta}>
                <div className={classes.buttonGroup}>
                  <Link
                    className={classes.actionButton}
                    variant="contained"
                    size="large"
                    color="secondary"
                    component={ReachLink}
                    to="/item/sklakfs"
                  >
                    View details
                  </Link>
                  <Button
                    className={classes.actionButton}
                    variant="contained"
                    size="medium"
                    color="primary"
                  >
                    Buy now
                  </Button>
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
};

export default withStyles(styles)(ItemCard);

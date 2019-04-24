import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import ItemCard from '../../components/ItemCard';
import config from '../../config/config';

const { imageBaseUrl } = config;

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    // backgroundImage: `url(${imageBaseUrl}/nature.png)`,
    // backgroundImage: `url(${seasonal})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.grey[800],
  },
  heroContent: {
    // maxWidth: 800,
    width: '90%',
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    color: 'white',
    textShadow: '0px 2px 3px rgba(0, 0, 0, 1)',
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1200 + theme.spacing.unit * 3 * 2)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const product = {
  image: 'birds.gif',
  name: 'Random Shirt',
  price: '33.23',
  product_id: 44,
};

function Album(props) {
  const { classes } = props;
  const { department, category } = props;

  return (
    <>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div
          className={classes.heroUnit}
          style={{
            backgroundImage: `url(${imageBaseUrl}/${department || 'hero'}.png)`,
          }}
        >
          <div className={classes.heroContent}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="inherit"
              gutterBottom
            >
              {category ? category.toUpperCase() : null}
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
              The French have always had an eye for beauty. One look at the
              T-shirts below and you'll see that same appreciation has been
              applied abundantly to their postage stamps. Below are some of our
              most beautiful and colorful T-shirts, so browse away! And don't
              forget to go all the way to the bottom - you don't want to miss
              any of them!
            </Typography>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card} sm={6} md={4} lg={3}>
                <ItemCard product={product} />
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
    </>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);
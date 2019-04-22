import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import CardActions from '@material-ui/core/CardActions';
import { Typography } from '@material-ui/core';
import { Link as ReachLink } from '@reach/router';
import Link from '@material-ui/core/Link';
import tileData from '../assets/tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 500,
    // height: 450,
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

function ImageGridList(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={350} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
            <CardActions className={classes.cta}>
              <div className={classes.buttonGroup}>
                <Typography align="center" variant="h2" color="secondary">
                  {tile.title}
                </Typography>
                <Typography variant="h6" color="secondary">
                  {tile.description}
                </Typography>
                <Link
                  className={classes.actionButton}
                  variant="contained"
                  size="large"
                  color="secondary"
                  component={ReachLink}
                  to={tile.link}
                  underline="none"
                >
                  Shop Now
                </Link>
              </div>
            </CardActions>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageGridList);

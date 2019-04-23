import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import shirt from '../../assets/shirt.png';
import ColorPicker from '../../components/ColorPicker';
import SizePicker from '../../components/SizePicker';
import QuantityPicker from '../../components/QuantityPicker';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginTop: '20px',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    [theme.breakpoints.up(1200 + theme.spacing.unit * 3 * 2)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    [theme.breakpoints.down(600 + theme.spacing.unit * 3 * 2)]: {
      marginLeft: '20px',
      marginRight: '20px',
    },
  },
  itemName: {
    margin: 'auto',
  },
  itemDescription: {
    width: '80%',
    marginTop: '20px',
    fontSize: '20px',
  },
  media: {
    height: '350px',
    backgroundSize: 'contain',
  },
  radioGroup: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    marginLeft: '20px',
    borderRadius: theme.shape.borderRadius * 100,
    paddingLeft: '50px',
    paddingRight: '50px',
  },
});

const ItemDetail = ({ classes }) => (
  <>
    <main className={classes.layout}>
      <Grid container>
        <Grid item xs={12} md={5}>
          <CardMedia
            className={classes.media}
            image={shirt}
            title="Contemplative Reptile"
            height="100px"
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography className={classes.itemName} gutterBottom variant="h4">
            Pull & Bear Jumper In Textured Knit In Blue
          </Typography>
          <Typography
            className={classes.itemPrice}
            gutterBottom
            variant="h5"
            component="h2"
            color="primary"
          >
            $19.59
          </Typography>
          <Typography
            className={classes.itemDescription}
            gutterBottom
            variant="body1"
          >
            The War had just ended when this stamp was designed, and even so,
            there was enough optimism to show the destroyed oak tree sprouting
            again from its stump! What a beautiful T-shirt!
          </Typography>
          <QuantityPicker />
          <ColorPicker />
          <SizePicker />
          <Button
            variant="contained"
            className={classes.button}
            color="primary"
          >
            Add to cart
          </Button>
        </Grid>
      </Grid>
    </main>
  </>
);

export default withStyles(styles)(ItemDetail);

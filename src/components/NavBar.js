import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Link as ReachLink } from '@reach/router';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  root: {
    width: '100%',
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
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    fontSize: '24px',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  appBarLink: {
    display: 'block',
    padding: '11px 16px',
    outline: 'none',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.08)',
    },
  },
  menuItem: {
    color: '#ffffff',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius * 100,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 8,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
      '&:focus': {
        width: 300,
      },
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing.unit * 6,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  mobileNavItemHeader: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
});

class NavBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    regionalSubMenuAnchorEl: null,
    natureSubMenuAnchorEl: null,
    seasonalSubMenuAnchorEl: null,
    left: false,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleNavSubMenuOpen = anchorName => event => {
    this.setState({
      [anchorName]: event.currentTarget,
    });
  };

  handleNavSubMenuClose = anchorName => () => {
    this.setState({
      [anchorName]: null,
    });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const {
      anchorEl,
      mobileMoreAnchorEl,
      regionalSubMenuAnchorEl,
      natureSubMenuAnchorEl,
      seasonalSubMenuAnchorEl,
    } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isRegionalSubMenuOpen = Boolean(regionalSubMenuAnchorEl);
    const isNatureSubMenuOpen = Boolean(natureSubMenuAnchorEl);
    const isSeasonalSubMenuOpen = Boolean(seasonalSubMenuAnchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <p>Shopping Cart</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    const sideList = (
      <div className={classes.list}>
        <div className={classes.toolbar} />
        <div className={classes.drawerHeader}>
          <IconButton
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem>
            <MenuItem className={classes.mobileNavItemHeader} disabled>
              Regional
            </MenuItem>
          </ListItem>
          <Divider />
          <ListItem
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <Link
              className={classes.appBarLink}
              color="inherit"
              component={ReachLink}
              underline="none"
              to="/catalog"
            >
              French
            </Link>
          </ListItem>
          <ListItem
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <Link
              className={classes.appBarLink}
              color="inherit"
              component={ReachLink}
              underline="none"
              to="/catalog"
            >
              Italian
            </Link>
          </ListItem>
          <ListItem
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <Link
              className={classes.appBarLink}
              color="inherit"
              component={ReachLink}
              underline="none"
              to="/catalog"
            >
              Irish
            </Link>
          </ListItem>
          <ListItem>
            <MenuItem className={classes.mobileNavItemHeader} disabled>
              Nature
            </MenuItem>
          </ListItem>
          <Divider />
          <ListItem
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <Link
              className={classes.appBarLink}
              color="inherit"
              component={ReachLink}
              underline="none"
              to="/catalog"
            >
              Animal
            </Link>
          </ListItem>
          <ListItem
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <Link
              className={classes.appBarLink}
              color="inherit"
              component={ReachLink}
              underline="none"
              to="/catalog"
            >
              Flower
            </Link>
          </ListItem>
          <ListItem>
            <MenuItem className={classes.mobileNavItemHeader} disabled>
              Seasonal
            </MenuItem>
          </ListItem>
          <Divider />
          <ListItem
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <Link
              className={classes.appBarLink}
              color="inherit"
              component={ReachLink}
              underline="none"
              to="/catalog"
            >
              Christmas
            </Link>
          </ListItem>
          <ListItem
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <Link
              className={classes.appBarLink}
              color="inherit"
              component={ReachLink}
              underline="none"
              to="/catalog"
            >
              Valentine
            </Link>
          </ListItem>
        </List>
        <Divider />
      </div>
    );

    const renderMobileDrawer = (
      // eslint-disable-next-line react/destructuring-assignment
      <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
        <div tabIndex={0} role="button">
          {sideList}
        </div>
      </Drawer>
    );

    const renderRegionalSubMenu = (
      <Menu
        anchorEl={regionalSubMenuAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isRegionalSubMenuOpen}
        onClose={this.handleNavSubMenuClose('regionalSubMenuAnchorEl')}
      >
        <Link
          className={classes.appBarLink}
          color="inherit"
          component={ReachLink}
          underline="none"
          to="/catalog"
          onClick={this.handleNavSubMenuClose('regionalSubMenuAnchorEl')}
        >
          French
        </Link>
        <Link
          className={classes.appBarLink}
          color="inherit"
          component={ReachLink}
          underline="none"
          to="/catalog"
          onClick={this.handleNavSubMenuClose('regionalSubMenuAnchorEl')}
        >
          Italian
        </Link>
        <Link
          className={classes.appBarLink}
          color="inherit"
          component={ReachLink}
          underline="none"
          to="/catalog"
          onClick={this.handleNavSubMenuClose('regionalSubMenuAnchorEl')}
        >
          Irish
        </Link>
      </Menu>
    );

    const renderNatureSubMenu = (
      <Menu
        anchorEl={natureSubMenuAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isNatureSubMenuOpen}
        onClose={this.handleNavSubMenuClose('natureSubMenuAnchorEl')}
      >
        <Link
          className={classes.appBarLink}
          color="inherit"
          component={ReachLink}
          underline="none"
          to="/catalog"
          onClick={this.handleNavSubMenuClose('natureSubMenuAnchorEl')}
        >
          Animal
        </Link>
        <Link
          className={classes.appBarLink}
          color="inherit"
          component={ReachLink}
          underline="none"
          to="/catalog"
          onClick={this.handleNavSubMenuClose('natureSubMenuAnchorEl')}
        >
          Flower
        </Link>
      </Menu>
    );

    const renderSeasonalSubMenu = (
      <Menu
        anchorEl={seasonalSubMenuAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isSeasonalSubMenuOpen}
        onClose={this.handleNavSubMenuClose('seasonalSubMenuAnchorEl')}
      >
        <Link
          className={classes.appBarLink}
          color="inherit"
          component={ReachLink}
          underline="none"
          to="/catalog"
          onClick={this.handleNavSubMenuClose('seasonalSubMenuAnchorEl')}
        >
          Christmas
        </Link>
        <Link
          className={classes.appBarLink}
          color="inherit"
          component={ReachLink}
          underline="none"
          to="/catalog"
          onClick={this.handleNavSubMenuClose('seasonalSubMenuAnchorEl')}
        >
          Valentine
        </Link>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.layout}>
            <div className={classes.sectionMobile}>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Open drawer"
                onClick={this.toggleDrawer('left', true)}
              >
                <MenuIcon />
              </IconButton>
            </div>
            <Link
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
              component={ReachLink}
              to="/"
              underline="none"
            >
              SHOPMATE
            </Link>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <MenuItem
                onClick={this.handleNavSubMenuOpen('regionalSubMenuAnchorEl')}
                className={classes.menuItem}
              >
                Regional
              </MenuItem>
              <MenuItem
                onClick={this.handleNavSubMenuOpen('natureSubMenuAnchorEl')}
                className={classes.menuItem}
              >
                Nature
              </MenuItem>
              <MenuItem
                onClick={this.handleNavSubMenuOpen('seasonalSubMenuAnchorEl')}
                className={classes.menuItem}
              >
                Seasonal
              </MenuItem>
            </div>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search anything…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
        {renderMobileDrawer}
        {renderRegionalSubMenu}
        {renderNatureSubMenu}
        {renderSeasonalSubMenu}
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);

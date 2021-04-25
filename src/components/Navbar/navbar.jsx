import React from 'react'
import './navbar.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import BuildIcon from '@material-ui/icons/Build';
import StorefrontIcon from '@material-ui/icons/Storefront';
import DeckIcon from '@material-ui/icons/Deck';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    navbar: {
        display: 'flex',
      alignItems: 'space-between',
      justifyContent: 'center',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow:0,
      display: 'none',
      marginRight: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: '100%',
        },
    },
    AccountCircle:{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center'
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

const Navbar = ({ children }) => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    

    const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          id="drawer"
        >
          <List id="Login">
          <ListItem>
            <Button style={{display:"inline",color:"white", lineHeight:"1.3", fontSize:"100%", postition:"fixed", padding:"0.5rem", margin:"0px"}}>
                Hello, Sign-in <AccountCircle style={{fontSize:"130%"}}/> <br/>
                <b style={{display:"inline",fontSize:"140%",postition:"fixed", padding:"0.5rem", margin:"0px"}}>
                or register
                </b>
            </Button>
            </ListItem>
            </List>
            <div style={{padding:"0", margin:"0", display:"flex", justifyContent:"center", backgroundColor:"Orange", height:"3vh"}}>
                <h3 style={{padding:"0",margin:"0", alignItems:"center"}}>CATEGORIES</h3>
            </div>
            <Divider />
            <List style={{padding:'0'}}>
            <Link style={{textDecoration:"none",color:"black"}} onClick={() => {window.location.href="/filter/?f=Furniture"}} to={`/filter/?f=Furniture`}>
              <ListItem button key='Furniture'>
                <ListItemIcon><DeckIcon /> </ListItemIcon>
                <ListItemText primary={'Furniture'} />
              </ListItem>
            </Link>
            <Link style={{textDecoration:"none",color:"black"}} onClick={() => {window.location.href="/filter/?f=Electronics"}} to={`/filter/?f=Electronics`}>
              <ListItem button key='Electronics'>
                <ListItemIcon><LaptopChromebookIcon /></ListItemIcon>
                <ListItemText primary='Electronics' />
              </ListItem>
            </Link>
            <Link style={{textDecoration:"none",color:"black"}} onClick={() => {window.location.href="/filter/?f=Clothing"}}  to={`/filter/?f=Clothing`}>
              <ListItem button key='Clothing'>
                <ListItemIcon><StorefrontIcon /></ListItemIcon>
                <ListItemText primary='Clothing' />
              </ListItem>
            </Link>
            <Link style={{textDecoration:"none",color:"black"}} onClick={() => {window.location.href="/filter/?f=Tools"}}  to={`/filter/?f=Tools`}>
              <ListItem button key='Tools'>
                <ListItemIcon><BuildIcon /></ListItemIcon>
                <ListItemText primary='Tools' />
              </ListItem>
            </Link>
          </List>
          <Divider />
            <div style={{padding:"0", margin:"0", display:"flex", justifyContent:"center", position:"relative", top:'45vh',}}>
                <h6 style={{padding:"0",margin:"0", alignItems:"center"}}>© mineShop</h6>
            </div>
        </div>
      );

    return (
        <>
        <div className={classes.root}>
        <AppBar position="static" className={classes.navbar} style={{"backgroundColor":"black"}}>
            <Toolbar>
            <span>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer('left', true)}
                
            >
                <MenuIcon/>
            </IconButton>
            </span>
            <span>
            <Link style={{textDecoration:"none",color:"white"}} to={`/`}>
            <Typography style={{fontFamily: 'Shadows Into Light', textShadow: '1px 1px Orange', fontSize: '200%'}} className={classes.title} variant="h3" noWrap>
                mineShop
            </Typography>
            </Link>
            </span>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                <SearchIcon />
                </div>
                <InputBase
                
                placeholder="Search for products…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <span>
            <IconButton
              edge="end"
              aria-label="account of current user"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            </span>
            </Toolbar>
            <div style={{height:"1vh",backgroundColor:"Orange"}}>
        </div>
        </AppBar>
        {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
            </Drawer>
            </React.Fragment>
        ))}
        </div>
        
        {children}
        </>
    )
}

export default Navbar
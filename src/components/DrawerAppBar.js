import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TitlebarBelowImageList from './TitlebarBelowImageList';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  


  return (
    <Box sx={{ display: 'flex' , width: '80%'}}>
      <CssBaseline />
      <AppBar component="nav" color='secondary'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MMORPGs DB
          </Typography>
        </Toolbar>
      </AppBar>
      <Box  sx={{ width: '100%', margin: 'auto'}}>
        <Toolbar />
        <TitlebarBelowImageList/>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
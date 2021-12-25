import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Icon from '@mui/material/Icon';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import styles from './Header.module.scss';
import { Link } from "react-router-dom";

const pages = ['Domes','Cabins','Amazing pools','Ryokans','Beachfront','Ski-in/ski-out','Treehouses'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div className={styles.Header}>
        <AppBar position="static" sx={{ backgroundColor:'#fff', boxShadow:'none', borderBottom:'1px solid #eee'}}>
          <Container class="custom-container" sx={{ padding:0 }}>
            <Toolbar disableGutters>
              <Icon
                          component="div"
                          sx={{ mr: 2, display: { xs:'none', sm: 'none', md: 'flex'}, width: '120px', height: '80px'}}>
                <img src="/Airbnb_logo.svg" sx={{ width: '100%' }} />
              </Icon>
              <Icon
                          component="div"
                          sx={{ mr: 2,flexGrow: 1, display: { sm: 'flex', md: 'none'}, width: '30px', height: '80px'}}>
                <img src="/airbnb_small.svg" style={{width:'30px'}} />
              </Icon>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'end', alignItems: 'center'}}>
                  <Button
                    key="Become"
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#000', display: 'block', textTransform: 'none'}}
                  >
                    Become a host
                  </Button>
                  <IconButton
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', sm: 'block'} }}>
                      <Avatar src="/lang.svg" sx={{ width: 16, height: 16 }}/>
                  </IconButton>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Button onClick={handleOpenUserMenu} variant="outlined" startIcon={<Avatar alt="Remy Sharp" src="/menu.svg" sx={{ ml: 1, width: 16, height: 16}}/>} sx={{ backgroundColor:"#fff", borderRadius:'25px',  borderColor: '#ccc', padding:'5px', ':hover': {backgroundColor: 'white'} }}>
                  <Avatar alt="Remy Sharp" src="/profile.svg" sx={{ width: 30, height: 30 }}/>
                </Button>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;

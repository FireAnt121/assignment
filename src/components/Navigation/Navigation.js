import styles from './Navigation.module.scss';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { connect } from 'react-redux';

const pages = ['Domes','Cabins','Amazing pools','Ryokans','Beachfront','Ski-in/ski-out','Treehouses'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  const mapStateToProps = (state) => {
    return {
      data: state.cat
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      changeCat: (string) => { dispatch({type: 'CATEGORY', payload: string})}
    }
  };
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
const Navigation = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [more, setMore] = React.useState([]);
  const [cats,setCats] = React.useState([]);
  const [age, setAge] = React.useState("");
  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeInCat = (event) => {
    props.changeCat(event.target.value);
    console.log(props.data);
  }

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

  function setNavigationItem(){
    let m = [];

    while(pages.length * 100 > (windowDimensions.width / 3)){
      m.push(pages[pages.length -1]);
      pages.pop();
    }
    setCats(pages);
    setMore(m);
  }
  function handleResize() {
    setWindowDimensions(getWindowDimensions());
    setNavigationItem()
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    setNavigationItem()
  }, []);
  return (
        <AppBar position="sticky" sx={{ backgroundColor:'#fff', boxShadow:'none' }}>
          <Container className="custom-container" sx={{ padding:'14px 0 !important' }}>
            <Toolbar disableGutters sx={{justifyContent:'space-between'}}>
              <Box sx={{display: 'flex'}}>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                  {cats.map((page,index) => (
                    <Button
                      key={index}
                      onClick={handleChangeInCat}
                      value={page}
                      className={(props.data === page)? styles.catActive : ''}
                      sx={{ my: 2, color: '#717171', display: 'block', minWidth: 'auto', textTransform: 'none', whiteSpace: 'nowrap', width:'100%'}}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>
                <Box sx={{display:'flex'}}>
                      <Select
                        value={age}
                        onClick={handleChange}
                        className={styles.select}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value="">More</MenuItem>
                        {more.map((page,index) => (
                          <MenuItem key={index} value={page}>{page}</MenuItem>
                        ))}
                      </Select>
                </Box>
              </Box>
              <Box sx={{display: 'flex'}}>
                <Box sx={{ flexGrow: 0 , paddingRight:'8px'}}>
                  <Button onClick={handleOpenUserMenu} variant="outlined" endIcon={<Avatar alt="Remy Sharp" src="/bot_arrow.svg" sx={{ ml: 1, width: 12, height: 12}}/>} sx={{ backgroundColor:"#fff", borderRadius:'25px',  border:'2px solid #000', padding:'10px 16px', ':hover': {backgroundColor: 'white'} }}>
                    <Typography
                    variant="body2"
                    sx= {{ textTransform: 'none', color: '#717171', whiteSpace: 'nowrap'}}
                  >
                    Jan, Feb, Mar, Apr..
                  </Typography>
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
                <Box sx={{ flexGrow: 0 , paddingRight:'8px'}}>
                  <Button onClick={handleOpenUserMenu} variant="outlined" endIcon={<Avatar alt="Remy Sharp" src="/bot_arrow.svg" sx={{ ml: 1, width: 12, height: 12}}/>} sx={{ backgroundColor:"#fff", borderRadius:'25px',  borderColor: '#ccc', padding:'10px 16px', ':hover': {backgroundColor: 'white'} }}>
                    <Typography
                    variant="body2"
                    color="text.secondary"
                    sx= {{ textTransform: 'none'}}
                  >
                    Guests
                  </Typography>
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
                <Box sx={{ flexGrow: 0 }}>
                  <Button onClick={handleOpenUserMenu} variant="outlined" startIcon={<Avatar alt="Remy Sharp" src="/filter.svg" sx={{ ml: 1, width: 16, height: 16}}/>} sx={{ backgroundColor:"#fff", borderRadius:'25px',  borderColor: '#ccc', padding:'10px 16px', ':hover': {backgroundColor: 'white'} }}>
                    <Typography
                    variant="body2"
                    sx= {{ textTransform: 'none', color: '#000', display: { sm: 'none', md: 'block' }}}
                  >
                    Filters
                  </Typography>
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
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
  );
}

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);

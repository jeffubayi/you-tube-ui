import * as React from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Avatar, Box, Stack, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import VideoCallIcon from '@mui/icons-material/VideoCallOutlined';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import Image from 'next/image';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Settings from '@mui/icons-material/SettingsOutlined';
import Logout from '@mui/icons-material/Logout';
import GoogleIcon from '@mui/icons-material/Google';
import SwitchAccountOutlinedIcon from '@mui/icons-material/SwitchAccountOutlined';
import SlowMotionVideoOutlinedIcon from '@mui/icons-material/SlowMotionVideoOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@mui/icons-material/FeedbackOutlined';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import AddModeratorOutlinedIcon from '@mui/icons-material/AddModeratorOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/KeyboardArrowRight';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: "50px",
  border: "1px solid #D9D9D9",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#F2F2F2",
  '&:hover': {
    backgroundColor: "#D9D9D9",
  },
  marginLeft: "0.5rem"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [anchorNotificationEl, setNotificationAnchorEl] = React.useState<null | HTMLElement>(null);
  const openNotification = Boolean(anchorNotificationEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setNotificationAnchorEl(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const theme = useTheme();
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    // <Menu
    //   anchorEl={anchorEl}
    //   anchorOrigin={{
    //     vertical: 'top',
    //     horizontal: 'right',
    //   }}
    //   id={menuId}
    //   keepMounted
    //   transformOrigin={{
    //     vertical: 'top',
    //     horizontal: 'right',
    //   }}
    //   open={isMenuOpen}
    //   onClose={handleMenuClose}
    // >
    //   <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    //   <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    // </Menu>
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          borderRadius: "10px",
          minWidth: 300,
          boxShadow: "10px 10px 8px rgb(157 168 189 / 17%)",
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 42,
            height: 42,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <List sx={{ bgcolor: 'background.paper' }}>
        <ListItem>
          <Avatar src="https://yt3.ggpht.com/yti/ADpuP3OnvT0N-o1FPFYmxTFMifN5FEwud9LOrTODFw=s88-c-k-c0x00ffffff-no-rj" />

          <ListItemText primary="king carter" secondary={
            <Stack>
              <Typography
                sx={{ display: 'inline' }}
                component="div"
                variant="body2"
              >
                @kingcarter4408
              </Typography>
              <Typography
                sx={{ color: "#095ED5", cursor: "pointer", mt: 1, mb: -1 }}
                component="div"
                variant="body2"
              >
                View your channel
              </Typography>
            </Stack>
          }
          />
        </ListItem>
      </List>
      <Divider />

      <MenuItem sx={{ fontSize: "0.9rem" }} >
        <ListItemIcon>
          <GoogleIcon fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.7 }} />
        </ListItemIcon>
        Google Account
      </MenuItem>
      <MenuItem sx={{ fontSize: "0.9rem" }}>
        <ListItemIcon>
          <SwitchAccountOutlinedIcon fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.7 }} />
        </ListItemIcon>
        Switch account
        <Box sx={{ flexGrow: 1 }} />
        <ArrowForwardIosIcon fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.7 }} />
      </MenuItem>
      <MenuItem sx={{ fontSize: "0.9rem" }}>
        <ListItemIcon>
          <Logout fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.7 }} />
        </ListItemIcon>
        Sign out
      </MenuItem>

      <Divider />
      <MenuItem sx={{ fontSize: "0.9rem" }}>
        <ListItemIcon>
          <SlowMotionVideoOutlinedIcon fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.7 }} />
        </ListItemIcon>
        Youtube studio
      </MenuItem>
      <MenuItem sx={{ fontSize: "0.9rem" }} >
        <ListItemIcon>
          <PaidOutlinedIcon fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.4 }} />
        </ListItemIcon>
        Purchases and memberships
      </MenuItem>
      <Divider />
      <MenuItem sx={{ fontSize: "0.9rem" }}>
        <ListItemIcon>
          <AddModeratorOutlinedIcon fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.7 }} />
        </ListItemIcon>
        Your data in YouTube
      </MenuItem>
      <MenuItem sx={{ fontSize: "0.9rem" }}>
        <ListItemIcon>
          <DarkModeOutlinedIcon fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.7 }} />
        </ListItemIcon>
        Appearance: Light
        <Box sx={{ flexGrow: 1 }} />
        <ArrowForwardIosIcon fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.7 }} />
      </MenuItem>
      <MenuItem sx={{ fontSize: "0.9rem" }}>
        <ListItemIcon>
          <TranslateOutlinedIcon fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.7 }} />
        </ListItemIcon>
        Language: British English
        <Box sx={{ flexGrow: 1 }} />
        <ArrowForwardIosIcon fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.7 }} />
      </MenuItem>
      <MenuItem sx={{ fontSize: "0.9rem" }}>
        <ListItemIcon>
          <AdminPanelSettingsOutlinedIcon fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.4 }} />
        </ListItemIcon>
        Restricted Mode: Off
        <Box sx={{ flexGrow: 1 }} />
        <ArrowForwardIosIcon fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.7 }} />
      </MenuItem>
      <MenuItem sx={{ fontSize: "0.9rem" }}>
        <ListItemIcon>
          <LanguageOutlinedIcon fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.7 }} />
        </ListItemIcon>
        Location: Kenya
        <Box sx={{ flexGrow: 1 }} />
        <ArrowForwardIosIcon fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.7 }} />
      </MenuItem>
      <MenuItem sx={{ fontSize: "0.9rem" }}>
        <ListItemIcon>
          <KeyboardAltOutlinedIcon fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.2 }} />
        </ListItemIcon>
        Keyboard shortcuts
      </MenuItem>
      <Divider />
      <MenuItem sx={{ fontSize: "0.9rem" }}>
        <ListItemIcon>
          <Settings fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.4 }} />
        </ListItemIcon>
        Settings
      </MenuItem>
      <Divider />
      <MenuItem sx={{ fontSize: "0.9rem" }}>
        <ListItemIcon>
          <HelpOutlineOutlinedIcon fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.2 }} />
        </ListItemIcon>
        Help
      </MenuItem>
      <MenuItem sx={{ fontSize: "0.9rem" }}>
        <ListItemIcon>
          <FeedbackOutlinedIcon fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.2 }} />
        </ListItemIcon>
        Send feedback
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      transformOrigin={{ horizontal: 'left', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      id={mobileMenuId}
      keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      PaperProps={{
        sx: {
          borderRadius: "15px",
          boxShadow: "10px 10px 8px rgb(157 168 189 / 17%)",
        }
      }}
    >
      <MenuItem sx={{ fontSize: "0.9rem" }}>
        <ListItemIcon>
          <SmartDisplayOutlinedIcon fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.7 }} />
        </ListItemIcon>
        Upload video
      </MenuItem>
      <MenuItem sx={{ fontSize: "0.9rem" }} >
        <ListItemIcon>
          <SensorsOutlinedIcon fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.4 }} />
        </ListItemIcon>
        Go live
      </MenuItem>
    </Menu>
  );

  return (
    <Box >
      <AppBar position="fixed" color="inherit" elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon sx={{ stroke: "#ffffff", strokeWidth: 1.2, fontSize: 30 }} />
          </IconButton>
          <Image src={theme.palette.mode === 'dark' ? "/YouTube-White.png" : "/YouTube.png"} alt="logo" width={117} height={75} quality={97} />
          <Box sx={{ flexGrow: 1 }} />
          <Paper

            elevation={0}
            component="form"
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', width: 600, borderRadius: "50px", border: "1px solid #CCCCCC", }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="   Search"
              inputProps={{ 'aria-label': 'search youtube' }}
            />
            <Paper sx={{ borderTopRightRadius: "50px", borderBottomRightRadius: "50px", bgColor: "red" }}>
              <Divider orientation="vertical" />
              <IconButton color="primary" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.7 }} />
              </IconButton>
            </Paper>
          </Paper>
          <StyledIconButton sx={{ display: { xs: 'none', md: 'flex' } }} >
            <Tooltip title="Search with your voice">
              <KeyboardVoiceIcon sx={{ color: "#000" }} />
            </Tooltip>
          </StyledIconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' }, }}>
            <IconButton color="inherit" onClick={handleMobileMenuOpen}>
              <Tooltip title="Create">
                <VideoCallIcon sx={{ stroke: "#ffffff", strokeWidth: 1, fontSize: 30 }} />
              </Tooltip>
            </IconButton>
            <IconButton
              aria-label="show new notifications"
              color="inherit"
              onClick={handleClick}
            >
              <Tooltip title="Notification">
                <Badge badgeContent={0} color="error">
                  <NotificationsIcon fontSize="large" sx={{ stroke: "#ffffff", strokeWidth: 1, fontSize: 30 }} />
                </Badge>
              </Tooltip>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar src="https://yt3.ggpht.com/yti/ADpuP3OnvT0N-o1FPFYmxTFMifN5FEwud9LOrTODFw=s88-c-k-c0x00ffffff-no-rj" sx={{ width: 34, height: 33 }} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorNotificationEl}
        open={openNotification}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: "15px",
            boxShadow: "10px 10px 8px rgb(157 168 189 / 17%)",
            minWidth: 300,
            maxWidth: 350
          }
        }}
      >
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <Settings fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.4 }} />
            </IconButton>
          }
        >
          <ListItemText
            primary="Notifications"
          />
        </ListItem>
        <Divider />
        <Stack
          direction="column"
          mt={4}
          mb={4}
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <IconButton
            color="inherit"
          >
            <NotificationsIcon  sx={{ color:"grey",fontSize:100}} />
          </IconButton>
          <Typography variant='subtitle2' sx={{fontWeight:"bold",color:"#606060"}}>
            Your notifications live here
          </Typography>

          <Typography variant='caption'sx={{px:12,color:"#606060"}} noWrap>

            Subscribe to your favorite channels to<br></br> receive notifications about their latest<br></br> videos.
          </Typography>
        </Stack>
      </Menu>
    </Box>
  );
}
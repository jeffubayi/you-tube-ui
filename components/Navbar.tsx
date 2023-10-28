import * as React from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import { Avatar, Box, ListItemAvatar, Stack, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircleOutlined';
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
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { Theme, CSSObject } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import ListSubheader from '@mui/material/ListSubheader';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import PlayCircleFilledOutlinedIcon  from '@mui/icons-material/PlayCircleFilledWhiteOutlined';

const data = [
  {
    src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
    title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
    channel: 'Don Diablo',
    views: '396k views',
    createdAt: 'a week ago',
  },
  {
    src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
    title: 'Queen - Greatest Hits',
    channel: 'Queen Official',
    views: '40M views',
    createdAt: '3 years ago',
  },
  {
    src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    channel: 'Calvin Harris',
    views: '130M views',
    createdAt: '10 months ago',
  },
];

interface MediaProps {
  loading?: boolean;
}

function Media(props: MediaProps) {
  const { loading = false } = props;

  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <Box key={index} sx={{ width: 400, marginRight: 0.5, my: 3, p: 1, cursor: "pointer" }}>
          {item ? (
            <img
              style={{ width: "100%", height: 220, borderRadius: "10px" }}
              alt={item.title}
              src={item.src}
            />
          ) : (
            <Skeleton variant="rectangular" width={380} height={220} sx={{ borderRadius: "10px" }} />
          )}
          {item ? (
            <Box sx={{ pr: 2 }}>
              <Typography gutterBottom variant="subtitle1">
                {item.title}
              </Typography>
              {/* <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    src={item.src}
                  />
                </ListItemAvatar>
                <ListItemText primary={item.title} />
              </ListItemButton> */}
              <Typography display="block" variant="caption" color="text.secondary">
                {item.channel}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {`${item.views} • ${item.createdAt}`}
              </Typography>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

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

const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isLoggedIn = Boolean(true);
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

  const [open, setOpen] = React.useState(false);
  const loading = false


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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
          boxShadow: "0 0 10px 7px rgb(157 168 189 / 17%)",
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
      {isLoggedIn && (
        <>
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
        </>
      )}
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
          borderRadius: "12px",
          boxShadow: "0 0 10px 7px rgb(157 168 189 / 17%)",
        }
      }}
    >
      <MenuItem sx={{ fontSize: "0.85rem" }}>
        <ListItemIcon>
          <SmartDisplayOutlinedIcon fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.7 }} />
        </ListItemIcon>
        Upload video
      </MenuItem>
      <MenuItem sx={{ fontSize: "0.85rem" }} >
        <ListItemIcon>
          <SensorsOutlinedIcon fontSize="small" sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.4 }} />
        </ListItemIcon>
        Go live
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" color="inherit" elevation={0}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon sx={{ stroke: "#ffffff", strokeWidth: 1.2, fontSize: 30 }} onClick={open ? handleDrawerClose : handleDrawerOpen} />
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
          {isLoggedIn ? (
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
          ) : (
            <Box sx={{ display: { xs: 'none', md: 'flex' }, }}>
              <IconButton
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
              <Chip icon={<AccountCircle sx={{ stroke: "#ffffff", strokeWidth: 0.8, fill: "#095ED5" }} />} label="Sign in" variant="outlined" sx={{ color: "#095ED5", cursor: "pointer" }} />
            </Box>
          )}
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
            boxShadow: "0 0 10px 7px rgb(157 168 189 / 17%)",
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
            <NotificationsIcon sx={{ color: "grey", fontSize: 100 }} />
          </IconButton>
          <Typography variant='subtitle2' sx={{ fontWeight: "bold", color: "#606060" }}>
            Your notifications live here
          </Typography>

          <Typography variant='caption' sx={{ px: 12, color: "#606060" }} noWrap>

            Subscribe to your favorite channels to<br></br> receive notifications about their latest<br></br> videos.
          </Typography>
        </Stack>
      </Menu>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
        </DrawerHeader>
        <List>
          <ListItem disablePadding sx={{ display: 'block' }} >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <HomeOutlinedIcon sx={{ stroke: "#ffffff", strokeWidth: 1, fontSize: 30, fill: "#000" }} />
              </ListItemIcon>

              <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0, fontSize: "0.5rem", }} />
            </ListItemButton>
            {!open &&
              <Typography sx={{ fontSize: "0.6rem", fontWeight: "490", mb: 1 }} align="center" >Home</Typography>
            }
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }} >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
               <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <PlayCircleFilledOutlinedIcon sx={{ stroke: "#ffffff", strokeWidth: 1, fontSize: 30, fill: "#000" }} />
              </ListItemIcon>
              <ListItemText primary="Shorts" sx={{ opacity: open ? 1 : 0, fontSize: "0.5rem" }} />
            </ListItemButton>
            {!open &&
              <Typography sx={{ fontSize: "0.6rem", fontWeight: "490", mb: 1 }} align="center" >Shorts</Typography>
            }
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }} >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <SubscriptionsOutlinedIcon sx={{ stroke: "#ffffff", strokeWidth: 1, fontSize: 30, fill: "#000" }} />
              </ListItemIcon>
              <ListItemText primary="Subscription" sx={{ opacity: open ? 1 : 0, fontSize: "0.2rem" }} />
            </ListItemButton>
            {!open &&
              <Typography sx={{ fontSize: "0.6rem", fontWeight: "490", mb: 1 }} align="center" >Subscription</Typography>
            }
          </ListItem>
          {!open &&
            <ListItem disablePadding sx={{ display: 'block', mt: 1 }} >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <VideoLibraryOutlinedIcon sx={{ stroke: "#ffffff", strokeWidth: 1, fontSize: 25, fill: "#000" }} />
                </ListItemIcon>
                <ListItemText primary="Subscription" sx={{ opacity: open ? 1 : 0, fontSize: "0.2rem" }} />
              </ListItemButton>

              <Typography sx={{ fontSize: "0.6rem", fontWeight: "490" }} align="center" >You</Typography>

            </ListItem>
          }
        </List>
        {open &&
          (
            <>
              <Divider />
              <List subheader={<ListSubheader sx={{ fontWeight: "bold", color: "#000" }}>Explore</ListSubheader>}>
                {['Trending', 'Music', 'Games', "Sports"].map((text, index) => (
                  <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List subheader={<ListSubheader sx={{ fontWeight: "bold", color: "#000" }}>More from YouTube</ListSubheader>}>
                {['YouTube studio', 'YouTube kids',].map((text, index) => (
                  <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List >
                {['Settings', 'Report history', 'Help', "Send feedback"].map((text, index) => (
                  <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />

              <Stack spacing={1} p={2}>
                <Typography variant="caption" component="div" sx={{ fontWeight: "bold", color: "grey" }}>
                  About Press Copyright <br></br> Contact us Creator Advertise <br></br> Developers
                </Typography>
                <Typography variant="caption" component="div" sx={{ fontWeight: "bold", color: "grey" }}>
                  Terms Privacy Policy & Safety <br></br> How YouTube works <br></br>Test new features
                </Typography>
                <Typography variant="caption" component="div">
                  © 2023 Google LLC
                </Typography>
              </Stack>
            </>)}

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Media />
        <Media loading />
        <Media loading />
        <Media loading />
        <Media loading />
      </Box>
    </Box>
  );
}
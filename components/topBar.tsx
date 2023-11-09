'use client'
import * as React from 'react';
import Image from 'next/image';
import { useRouter } from "next/router";
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { Avatar,Chip, Badge, Tooltip, LinearProgress, ListSubheader, CssBaseline, Paper, Toolbar, Divider, Box, InputAdornment, Typography, Autocomplete, IconButton, Menu, MenuItem, TextField, useMediaQuery, ListItemAvatar, Stack, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';

//icons
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircleOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import VideoCallIcon from '@mui/icons-material/VideoCallOutlined';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import Settings from '@mui/icons-material/SettingsOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/Home';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
//components
import YoutubeVideoCard from "./card"
import ChipData from "./filterComponent"
import BottomBar from "./bottomBar"
import RenderMenu from "./sideBar"
import { data, explore, sets } from "../utility/data";


const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#F2F2F2",
  '&:hover': {
    backgroundColor: "#D9D9D9",
    borderRadius: "10px"
  },
  marginLeft: "0.5rem"
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

export const DrawerHeader = styled('div')(({ theme }) => ({
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
    borderRight: "none ",
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
  const [open, setOpen] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false)
  const theme = useTheme();
  const menuId = 'primary-search-account-menu';
  const isMobile = useMediaQuery("(min-width:500px)");
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const router = useRouter();
  const [progress, setProgress] = React.useState(0);
  const [showProgress, setShowProgress] = React.useState(false)

  React.useEffect(() => {
    if (showProgress) {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 0);
    }
  }, [showProgress]);

  const handleView = (value: any) => {
    setShowProgress(true)
    setTimeout(() => {
      router.push(
        {
          pathname: "/watch",
          query: {
            ...value
          },
        },
        `/watch?v=${value?.id}`
      );
    }, 2000);
  };


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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };



  const renderCreateMenu = (
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

  const renderNotificationsMenu = (
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
        <Typography variant='caption' sx={{ px: 12, color: "#606060" }} align="center" noWrap>
          Subscribe to your favorite channels to<br></br> receive notifications about their latest<br></br> videos.
        </Typography>
      </Stack>
    </Menu>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" color="inherit" elevation={0}>
        {showProgress && (
          <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={progress} color="warning" />
          </Box>
        )}
        <Toolbar sx={{ my: -0.8 }}>
          <IconButton
            sx={{ display: { xs: 'none', md: 'flex' } }}
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={open ? handleDrawerClose : handleDrawerOpen}
          >
            <MenuIcon sx={{ stroke: "#ffffff", strokeWidth: 1.2, fontSize: 30 }} />
          </IconButton>
          <Image src={theme.palette.mode === 'dark' ? "/YouTube-White.png" : "/YouTube.png"} alt="logo" width={117} height={75} quality={97} />
          <Box sx={{ flexGrow: 1 }} />
          {/* {showSearch ? ( */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Autocomplete
              freeSolo
              noOptionsText="Video not available"
              getOptionLabel={(option: any) => option?.title}
              renderOption={(props, option) => (
                <ListItem
                  {...props} key={option?.id} >
                  <ListItemIcon>
                    <SearchIcon sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.7 }} />
                  </ListItemIcon>
                  <ListItemText
                    sx={{ fontWeight: "bold" }}
                    primary={option?.title}
                  />
                </ListItem>
              )}
              onChange={(e, value: any) => {
                if (e.type == "click") {
                  setShowSearch(true)
                  handleView(value)
                } else {
                  setShowSearch(false)
                }
              }}
              options={data}
              renderInput={(params) =>
                <TextField {...params}
                  fullWidth
                  size="small"
                  sx={{ width: showSearch ? 540 : 450, borderRadius: "50px", borderColor: "#FFF" }}
                  color="info"
                  placeholder="Search"
                  InputProps={{
                    ...params.InputProps,
                    style: {
                      borderRadius: "50px 0px  0px 50px",
                      border: "2 px solid #095ED5"
                    },
                    startAdornment: (
                      <>
                        {showSearch &&
                          <InputAdornment position="start">
                            <SearchIcon sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.7 }} />
                          </InputAdornment>
                        }
                      </>
                    ),
                  }}

                  variant="outlined"
                />}
            />
            <Paper
              elevation={0}
              sx={{ bgColor: "grey !important", display: 'flex', alignItems: 'center', width: 60, height: 37, borderRadius: "0px 50px  50px 0px", border: "1px solid #CCCCCC", }}
            >
              <IconButton type="button" sx={{ pl: '15px' }} aria-label="search" >
                <SearchIcon sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.7 }} />
              </IconButton>
            </Paper>
          </Box>

          <StyledIconButton sx={{ display: { xs: 'none', md: 'flex' } }} >
            <Tooltip title="Search with your voice">
              <KeyboardVoiceIcon sx={{ color: "#000" }} />
            </Tooltip>
          </StyledIconButton>
          <Box sx={{ flexGrow: 1 }} />
          {isLoggedIn ? (
            <Box >
              <IconButton color="inherit" onClick={handleMobileMenuOpen} >
                <Tooltip title="Create">
                  {!isMobile ? <SearchIcon sx={{ color: "#000", stroke: "#ffffff", strokeWidth: 0.7 }} /> : <VideoCallIcon sx={{ stroke: "#ffffff", strokeWidth: 1, fontSize: 30 }} />}
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
              {isMobile && (
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <Avatar src="/static/images/avatar/1.jpg" alt="Jeff" sx={{ width: 34, height: 33, bgcolor: "purple" }} />
                </IconButton>
              )}
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
      {renderCreateMenu}
      <RenderMenu anchorEl={anchorEl} handleMenuClose={handleMenuClose} isMenuOpen={isMenuOpen} />
      {renderNotificationsMenu}
      <Drawer variant="permanent" open={open} sx={{ display: { xs: 'none', md: 'flex' } }}>
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
              <Typography sx={{ fontSize: "0.6rem", fontWeight: "bold", mb: 1 }} align="center" >Home</Typography>
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
              <ListItemAvatar
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <Avatar sx={{ height: "2rem", width: "2rem" }} src="https://i.pinimg.com/originals/a6/e9/32/a6e932111d00d40b9fb129154bdbc616.png" />
              </ListItemAvatar>
              <ListItemText primary="Shorts" sx={{ opacity: open ? 1 : 0, fontSize: "0.5rem", ml: -1 }} />
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
                <SubscriptionsOutlinedIcon sx={{ stroke: "#ffffff", strokeWidth: 1, fontSize: 25, fill: "#000" }} />
              </ListItemIcon>
              <ListItemText primary="Subscription" sx={{ opacity: open ? 1 : 0, fontSize: "0.2rem" }} />
            </ListItemButton>
            {!open &&
              <Typography sx={{ fontSize: "0.6rem", fontWeight: "490", mb: 1 }} align="center" >Subscriptions</Typography>
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
                {explore.map((text, index) => (
                  <ListItem key={index} disablePadding sx={{ display: 'block' }}>
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
                        {text.icon}
                      </ListItemIcon>
                      <ListItemText primary={text.title} sx={{ opacity: open ? 1 : 0 }} />
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
                      <ListItemAvatar
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center',
                        }}
                      >
                        <Avatar sx={{ height: "2rem", width: "2rem" }} src={index % 2 === 0 ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStNoSlWjFn8GXQYLHbuhQ4QJIReq_4RSzVcVGIknfp6LFyktukZqSdlzTZ86N9OmiuAg8&usqp=CAU" : "https://play-lh.googleusercontent.com/S4wylkvt2jz16hnG9IG0pAZosbB82nWWy8P-rQkb54uH-SCVd5L2j7z7x1Vz5pZvIRc"} />
                      </ListItemAvatar>
                      <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, ml: -1 }} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List >
                {sets.map((text, index) => (
                  <ListItem key={index} disablePadding sx={{ display: 'block' }}>
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
                        {text.icon}
                      </ListItemIcon>
                      <ListItemText primary={text.title} sx={{ opacity: open ? 1 : 0 }} />
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
        <ChipData limit={isMobile ? 11 : 4} />
        <YoutubeVideoCard open={open} />
        <YoutubeVideoCard loading open={open} />
        {!isMobile && <BottomBar />}
      </Box>
    </Box>
  );
}
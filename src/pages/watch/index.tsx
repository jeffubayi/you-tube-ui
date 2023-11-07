'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Head from 'next/head'
import { styled, alpha, useTheme } from '@mui/material/styles';
import { useRouter } from "next/router";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircleOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import VideoCallIcon from '@mui/icons-material/VideoCallOutlined';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import Image from 'next/image';
import { Box, Paper, InputBase, Tooltip, TextField, Skeleton, useMediaQuery, ListSubheader, Badge, Avatar, Chip, Collapse, ListItemAvatar, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import ReactPlayer from 'react-player'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { data } from "../../../utility/data";
import ChipData from "../../../components/filterComponent";



const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: "#F2F2F2",
    '&:hover': {
        backgroundColor: "#D9D9D9",
    },
    marginLeft: "0.5rem"
}));

export default function FullScreenDialog() {
    const [openDialog, setOpenDialog] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);

    const playNextVideo = () => {
        if (currentVideoIndex < data.length - 1) {
            setCurrentVideoIndex(currentVideoIndex + 1);
        }
    };

    const playPreviousVideo = () => {
        if (currentVideoIndex > 0) {
            setCurrentVideoIndex(currentVideoIndex - 1);
        }
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
    const theme = useTheme();
    const menuId = 'primary-search-account-menu';
    const router = useRouter();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);
    const isSmallScreen = useMediaQuery("(max-width: 600px)");
    const isMenuOpen = Boolean(anchorEl);
    const isLoggedIn = Boolean(true);
    const isMobile = useMediaQuery("(min-width:500px)");
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [anchorNotificationEl, setNotificationAnchorEl] = React.useState<null | HTMLElement>(null);
    const openNotification = Boolean(anchorNotificationEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setNotificationAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setNotificationAnchorEl(null);
    };

    React.useEffect(() => {

    }, []);

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
    const {
        title,
    } = router.query;
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        router.back()
    };

    return (
        <div>
            <Dialog
                fullScreen
                open={openDialog}
                onClose={handleCloseDialog}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative', py: -1 }} color="inherit" elevation={0}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon sx={{ stroke: "#ffffff", strokeWidth: 1.2, fontSize: 30 }} onClick={handleCloseDialog} />
                        </IconButton>
                        <Image src={theme.palette.mode === 'dark' ? "/YouTube-White.png" : "/YouTube.png"} alt="logo" width={117} height={75} quality={97} onClick={handleCloseDialog} style={{ cursor: "pointer" }} />

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
                                <IconButton color="inherit"
                                //   onClick={handleMobileMenuOpen}
                                >
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
                                    <Avatar alt="Jeff Ubayi" src="/static/images/avatar/1.jpg" sx={{ width: 34, height: 33, bgcolor: "purple" }} />
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
                <Box sx={{ flexGrow: 1, py: isSmallScreen ? 0 : 1, px: isSmallScreen ? 2 : 3.5 }}>
                    <Head>
                        <title>{title || data[currentVideoIndex].title}</title>
                    </Head>
                    <Grid container spacing={3}>
                        <Grid item md={8} xl={8.5} xs={12} sx={{ maxHeight: isSmallScreen ? 300 : "70vh" }} mb={3}>
                            <div className='player-wrapper'>
                                <ReactPlayer
                                    url={`https://www.youtube.com/watch?v=${data[currentVideoIndex].id}`}
                                    light={data[currentVideoIndex].src}
                                    controls
                                    playing
                                    width="100%"
                                    height="100%"
                                    className='react-player'
                                    onEnded={playNextVideo}

                                />
                            </div>
                            <List
                                sx={{ mt: 1 }}
                                subheader={
                                    <ListSubheader component="div" id="nested-list-subheader">
                                        <Typography color="text.primary" sx={{ fontWeight: "bold", fontSize: "1.25rem" }}>
                                            {data[currentVideoIndex].title}
                                        </Typography>
                                    </ListSubheader>
                                }
                            >
                                {!isSmallScreen && (
                                    <ListItem
                                        sx={{ bgcolor: "background.paper", borderRadius: "0.7rem", mt: -1.7 }}
                                        secondaryAction={
                                            <Stack direction="row" spacing={2}>
                                                <Chip icon={<NotificationsActiveOutlinedIcon />} label="Subscribe" sx={{ bgColor: "red" }} />
                                                <Chip icon={<ThumbUpOutlinedIcon />} label="like" />
                                                <Chip icon={<ThumbDownOffAltOutlinedIcon />} label="dislike" />
                                                <Chip icon={<ReplyOutlinedIcon />} label="Share" />
                                                <IconButton
                                                    size="small"
                                                >
                                                    <MoreVertIcon sx={{ stroke: "#ffffff", strokeWidth: 1.2, fontSize: 30 }} />
                                                </IconButton>
                                            </Stack>
                                        }
                                    >
                                        <ListItemAvatar >
                                            <Avatar src={data[currentVideoIndex].avatar} />
                                        </ListItemAvatar>
                                        <ListItemText primary={
                                            <Typography variant="subtitle1" component="div" sx={{ fontWeight: "bold" }}>
                                                {data[currentVideoIndex].channel}
                                            </Typography>
                                        } secondary={`${data[currentVideoIndex].subs} subscribers`} />
                                    </ListItem >
                                )}
                            </List>

                            {/* </Stack> */}
                            <Box pt={1} px={2} py={2} sx={{ bgcolor: "#EBEBEB", borderRadius: "0.7rem" }} >

                                <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                                    {`${data[currentVideoIndex].views} • ${data[currentVideoIndex].createdAt}`}
                                </Typography>
                                <Typography variant="body2" component="div" >
                                    {data[currentVideoIndex].desc}
                                </Typography>
                            </Box>
                            <List sx={{ width: '100%', bgcolor: 'background.paper' }}
                                subheader={
                                    <ListSubheader component="div" id="nested-list-subheader">
                                        {!isSmallScreen && (<Typography color="text.primary" sx={{ fontWeight: "bold", fontSize: "1.2rem", mt: 1 }}>
                                            3 Comments
                                        </Typography>)}
                                    </ListSubheader>
                                }>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="James bond" sx={{ bgcolor: "purple" }} src="/static/images/avatar/1.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={<TextField id="standard-basic" label="Add a comment" variant="standard" fullWidth />}

                                    />
                                </ListItem>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" sx={{ bgcolor: "#072346" }} src="/static/images/avatar/1.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <Stack direction="row" spacing={1}>
                                                <Typography component="div" variant="caption" color="text.primary" sx={{ fontWeight: "bold" }} >
                                                    @remysharp
                                                </Typography>
                                                <Typography component="div" color="text.secondary" variant="caption">
                                                    2 days ago
                                                </Typography>
                                            </Stack>
                                        }
                                        secondary={
                                            <React.Fragment>
                                                <Typography component="div" variant="body2" color="text.primary"  >
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales justo ut felis tincidunt gravida. Vestibulum maximus ac sapien a aliquet. Morbi bibendum, magna quis consequat sollicitudin, dolor diam lobortis mi, ut mollis est turpis sed ante.🤣🤣🤣🤣
                                                </Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                {/* <Divider variant="inset" component="li" /> */}
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Mama mia" sx={{ bgcolor: "maroon" }} src="/static/images/avatar/2.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="@mamamia"
                                        secondary={
                                            <Typography component="div" variant="body2" color="text.primary"  >
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.💪🏽💪🏽💪🏽💪🏽👀 Integer sodales justo ut felis tincidunt gravida. Vestibulum maximus ac sapien a aliquet. Morbi bibendum, magna quis consequat sollicitudin, dolor diam lobortis.🤣🤣🤣🤣
                                            </Typography>
                                        }
                                    />
                                </ListItem>

                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Tom bond" sx={{ bgcolor: "#ff6150" }} src="/static/images/avatar/3.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="@tomcruise"
                                        secondary={
                                            <Typography component="div" variant="body2" color="text.primary"  >
                                                ❤️🧡💛💚🩵💙💜🖤🩶🤍Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales justo ut felis tincidunt gravida. Vestibulum maximus ac sapien a aliquet. Morbi bibendum, magna quis consequat sollicitudin, dolor diam....
                                            </Typography>
                                        }
                                    />
                                </ListItem>

                            </List>
                        </Grid>
                        <Grid item md={4} xl={3.5} xs={12} mb={7}>
                            <ChipData limit={4} />
                            <div>
                                <List sx={{ p: 1, borderRadius: "0.7rem", bgcolor: "background.paper" }}>
                                    <div>
                                        {data?.map((video, index) => (
                                            <>
                                                <ListItem
                                                    key={index}
                                                    sx={{ cursor: "pointer", mt: -0.5 }}
                                                    onClick={() => setCurrentVideoIndex(index)}
                                                    secondaryAction={
                                                        <MoreVertIcon sx={{ color: "grey" }} />
                                                    }
                                                >
                                                    <ListItemAvatar >
                                                        <Avatar variant="square" sx={{ height: "5rem", width: "9rem", borderRadius: "0.5rem" }} src={video.src} />
                                                    </ListItemAvatar>
                                                    <ListItemText sx={{ ml: 1 }} primary={
                                                        <Typography variant="subtitle2">{video.title}</Typography>
                                                    } secondary={
                                                        <div>
                                                            <Typography display="block" variant="caption" color="text.secondary">
                                                                {video.channel}
                                                            </Typography>
                                                            <Typography variant="caption" color="text.secondary">
                                                                {`${video.views} • ${video.createdAt}`}
                                                            </Typography>
                                                        </div>
                                                    } />
                                                </ListItem >
                                            </>
                                        ))}
                                        {Array.from(new Array(8)).map((video, index) => (
                                            <>
                                                <ListItem
                                                    key={index}
                                                    sx={{ cursor: "pointer", mt: -0.5 }}
                                                    secondaryAction={
                                                        <MoreVertIcon sx={{ color: "grey" }} />
                                                    }
                                                >
                                                    <ListItemAvatar >
                                                        <Skeleton variant="rectangular" width={145} height={80} sx={{ borderRadius: "10px" }} />
                                                    </ListItemAvatar>
                                                    <ListItemText sx={{ ml: 1 }} primary={
                                                        <Skeleton
                                                            animation="wave"
                                                            height={10}
                                                            width="80%"
                                                            style={{ marginBottom: 6 }}
                                                        />
                                                    } secondary={
                                                        <div>
                                                            <Skeleton animation="wave" height={10} width="20%" />
                                                            <Skeleton animation="wave" height={10} width="40%" />
                                                        </div>
                                                    } />
                                                </ListItem >
                                            </>
                                        ))}
                                    </div>
                                </List>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Dialog>
        </div >
    );
}
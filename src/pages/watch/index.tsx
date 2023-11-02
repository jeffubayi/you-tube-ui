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
import theme from '@/styles/theme';
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
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { ExpandMore } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

interface ChipData {
    key: number;
    label: string;
}

const ChipItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.1),
}));



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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
    const [pageTitle, setPageTitle] = React.useState()
    const loading = false
    const [currentVideoIndex, setCurrentVideoIndex] = React.useState(0);
    const [chipData, setChipData] = React.useState<readonly ChipData[]>([
        { key: 0, label: 'All' },
        { key: 1, label: 'Live' },
        { key: 6, label: 'Related' },
        { key: 7, label: 'Watched' },
    ]);

    const handleDelete = (chipToDelete: ChipData) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const data = [
        {
            src: 'https://i.ytimg.com/vi/sBws8MSXN7A/maxresdefault.jpg',
            title: 'React JS Crash Course',
            channel: 'Traversy Media',
            views: '3.2M views',
            createdAt: '2 years ago',
            subs: '2M',
            id: "w7ejDZ8SWv8&t=5111s",
            avatar: 'https://yt3.ggpht.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s88-c-k-c0x00ffffff-no-rj',
            desc: "Get started with React in this crash course. We will be building a task tracker app and look at components, props, state, hooks, working with an API and more. Code:https://github.com/bradtraversy/react..."
        },
        {
            src: 'https://i.ytimg.com/vi/tvTRZJ-4EyI/maxresdefault.jpg',
            title: 'Kendrick Lamar - HUMBLE (Official Video)',
            channel: 'Kendrick Lamar',
            views: '935M views',
            subs: '12.3M',
            createdAt: '6 years ago',
            id: "tvTRZJ-4EyI",
            avatar: "https://yt3.googleusercontent.com/V4FqOieQ9y9dnErXPUZNWl1hyLafxIK7F55n5M8LVhPBmEou8kAbNuMlUZx23DoJHvH1sWG56No=s176-c-k-c0x00ffffff-no-rj-mo",
            desc: "Kendrick Lamar DAMN. Available now http://smarturl.it/DAMN Prod: Anthony Top Dawg Tiffith, Dave Free Nathan K. Scherrer, Jason Baum, Jamie Rabineau"
        },
        {
            src: 'https://i.ytimg.com/vi/zhEWqfP6V_w/maxresdefault.jpg',
            title: "FIFA World Cup Qatar 2022 Highlights | Argentina v France ",
            channel: 'FIFA',
            views: '17.1M views',
            createdAt: '10 hours ago',
            id: "zhEWqfP6V_w",
            avatar: "https://yt3.ggpht.com/GV75cdGEHaUZnQ_oJIzj_tGzLZCX2RyDKhn_75fFW6Mf_dpi8Fn6TaevTNhbrtLLBpk0upYt=s88-c-k-c0x00ffffff-no-rj",
            desc: "Watch highlights of Argentina v France's Final at the FIFA World Cup Qatar 2022. "
        },

        {
            src: 'https://i.ytimg.com/vi/5MuIMqhT8DM/maxresdefault.jpg',
            title: 'Sleep is your superpower | Matt Walker',
            channel: 'TED',
            views: '11M views',
            createdAt: '10 months ago',
            subs: '23.5M',
            id: "5MuIMqhT8DM",
            avatar: "https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg",
            desc: "Sleep is your life-support system and Mother Nature's best effort yet at immortality, says sleep scientist Matt Walker. In this deep dive into the science of slumber, Walker shares the wonderfully good things that happen when you get sleep -- and the alarmingly bad things that happen when you don't, for both your brain and body. Learn more about sleep's impact on your learning, memory. "
        },
    ];

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
                        <meta name="description" content="Generated by create next app" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    <Grid container spacing={3}>
                        <Grid item md={8} xs={12} sx={{ maxHeight: isSmallScreen ? 300 : "70vh" }} mb={3}>
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

                                <ListItem
                                    sx={{ bgcolor: "background.paper", borderRadius: "0.7rem", mt: -2 }}
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
                                        <Typography color="text.primary" sx={{ fontWeight: "bold", fontSize: "1.2rem", mt: 1 }}>
                                            3 Comments
                                        </Typography>
                                    </ListSubheader>
                                }>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="James bond" sx={{ bgcolor: "purple" }} src="/static/images/avatar/1.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={<TextField id="standard-basic" label="add a comment" variant="standard" fullWidth />}

                                    />
                                </ListItem>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" sx={{ bgcolor: "#072346" }} src="/static/images/avatar/1.jpg" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="@remysharp"
                                        secondary={
                                            <React.Fragment>

                                                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales justo ut felis tincidunt gravida. Vestibulum maximus ac sapien a aliquet. Morbi bibendum, magna quis consequat sollicitudin, dolor diam lobortis mi, ut mollis est turpis sed ante. Proin finibus lorem justo..."}
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
                                            <React.Fragment>

                                                {" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales justo ut felis tincidunt gravida. Vestibulum maximus ac sapien a aliquet. Morbi bibendum, magna quis consequat sollicitudin, dolor diam lobortis mi, ut mollis est turpis sed ante. Proin finibus lorem justo, a finibus velit porttitor non.Wish I could come, but I'm out of town this…"}
                                            </React.Fragment>
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
                                            <React.Fragment>

                                                {' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales justo ut felis tincidunt gravida. Vestibulum maximus ac sapien a aliquet. Morbi bibendum, magna quis consequat sollicitudin, dolor diam lobortis mi, ut mollis est turpis sed ante...'}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>

                            </List>
                        </Grid>
                        <Grid item md={4} xs={12} mb={7}>
                            <Paper
                                elevation={0}
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    listStyle: 'none',
                                    p: 0.5,
                                    m: 0,
                                }}
                                component="ul"
                            >
                                {chipData.map((data) => {
                                    let icon;


                                    return (
                                        <ChipItem key={data.key}>
                                            <Chip
                                                sx={{ borderRadius: "8px", mx: 1 }}
                                                color={data.label == "All" ? "primary" : "secondary"}
                                                icon={icon}
                                                label={data.label}
                                                onDelete={handleDelete(data)}
                                            />
                                        </ChipItem>
                                    );
                                })}
                            </Paper>

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
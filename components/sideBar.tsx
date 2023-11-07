import { Logout, Settings } from "@mui/icons-material";
import { Menu, List, ListItem, Avatar, ListItemText, Stack, Typography, Divider, MenuItem, ListItemIcon, Box } from "@mui/material";
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

function renderMenu ({ anchorEl, handleMenuClose, isMenuOpen }:{anchorEl:any, handleMenuClose:any, isMenuOpen:any}) {
    const isLoggedIn = Boolean(true);
    const menuId = 'primary-search-account-menu';
    return (
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
                            <Avatar src="/static/images/avatar/1.jpg" alt="Jeff" sx={{ bgcolor: "purple" }} />

                            <ListItemText primary="Jeff Ubayi" secondary={
                                <Stack>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="div"
                                        variant="body2"
                                    >
                                        @ubeezy4408
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
    )
};

export default renderMenu;
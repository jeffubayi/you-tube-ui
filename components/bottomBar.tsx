import * as React from "react";
import {
    BottomNavigation,
    Paper,
    BottomNavigationAction,
    Box,
    Avatar,
} from "@mui/material";
import { useRouter } from 'next/router';
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import GavelIcon from "@mui/icons-material/Gavel";
import BadgeIcon from "@mui/icons-material/Badge";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import SendIcon from "@mui/icons-material/Send";
import ChatIcon from "@mui/icons-material/Chat";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import StorageIcon from "@mui/icons-material/Storage";
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';

export default function BottomNavbar() {
    // const [value, setValue] = React.useState();
    // const navigate = useRouter();

    // const handleChange = (event: any, newValue: React.SetStateAction<undefined>) => {
    //     setValue(newValue);
    //     navigate.push(`${newValue}`);
    // };

    return (
        <div
            style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        >
            <BottomNavigation
            // value={value} 
            // onChange={handleChange}
            >
                <BottomNavigationAction
                    label="Home"
                    icon={<HomeIcon sx={{ stroke: "#ffffff", strokeWidth: 1, fontSize: 30, fill: "#000" }} />}
                />
                <BottomNavigationAction
                    label="Shorts"
                    icon={<Avatar sx={{ height: "2rem", width: "2rem" }} src="https://i.pinimg.com/originals/a6/e9/32/a6e932111d00d40b9fb129154bdbc616.png" />}
                />
                <BottomNavigationAction
                    label="Create"
                    icon={<AddCircleOutlineIcon sx={{ stroke: "#ffffff", strokeWidth: 1, fontSize: 40, fill: "#000" }} />}
                />
                <BottomNavigationAction
                    label="Subscriptions"
                    icon={<SubscriptionsOutlinedIcon sx={{ stroke: "#ffffff", strokeWidth: 1, fontSize: 25, fill: "#000" }} />}
                />
                <BottomNavigationAction
                    label="You"
                    icon={
                        <Avatar src="/static/images/avatar/1.jpg" alt="Jeff" sx={{ width: 34, height: 33, bgcolor: "purple" }} />
                    }
                />
            </BottomNavigation>
        </div>
    );
}
/* eslint-disable react/prop-types */
import { ResIcon, SideBarDiv, SideBarlabel, SideBarlabelButton } from "./SideBar.styled";
import GridViewIcon from "@mui/icons-material/GridView";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";

import OnDeviceTrainingOutlinedIcon from "@mui/icons-material/OnDeviceTrainingOutlined";

// import SettingsIcon from "@mui/icons-material/Settings";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
export const SideBar = ({ onSelect, SelectOption }) => {
    const options = [
        { label: "Dashboard", icon: <GridViewIcon fontSize="small" /> },
        { label: "Task", icon: <FormatListBulletedIcon fontSize="small" /> },
        { label: "Completed", icon: <CheckCircleOutlinedIcon fontSize="small" /> },
        {
            label: "In Progress",
            icon: <OnDeviceTrainingOutlinedIcon fontSize="small" />,
        },

        {
            label: "Pending",
            icon: <OnDeviceTrainingOutlinedIcon fontSize="small" />,
        },
        { label: "Team", icon: <PeopleOutlineOutlinedIcon fontSize="small" /> },
        // { label: "Settings", icon: <SettingsIcon fontSize="small" /> },
    ];
    return (
        <SideBarDiv>
            {options.map((item, index) => (
                <div key={index}>
                    <SideBarlabel>
                        <SideBarlabelButton
                            onClick={() => onSelect(item.label)}
                            sx={{
                                backgroundColor: SelectOption === item.label ? "#4992FF" : "",
                                color: SelectOption === item.label ? "#FFFFFF" : "",
                            }}
                        >

                            <ResIcon>{item.icon}</ResIcon>
                            <div>{item.label}</div>
                        </SideBarlabelButton>
                    </SideBarlabel>
                </div>
            ))}
        </SideBarDiv>
    );
};

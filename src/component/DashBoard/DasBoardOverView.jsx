import AssignmentLateOutlinedIcon from "@mui/icons-material/AssignmentLateOutlined";
import {
    CardContainer,
    CardSize,
    CardSizeTestValue,
    IconDiv,
    TypographyBottomText,
    TypographyCount,
    TypographyText,
} from "./DashBoard.styled";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import AutoModeOutlinedIcon from "@mui/icons-material/AutoModeOutlined";
import { DashBoardTable } from "./DashBoardTable";
import { useSelector } from "react-redux";

export const DasBoardOverView = () => {
    const TaskList = useSelector((state) => state.Task.task) || [];
    const completedTask = TaskList.filter(task => task.status === "Completed").length
    const pendingTask = TaskList.filter(task => task.status === "Pending").length
    const progressTask = TaskList.filter(task => task.status === "In Progress").length
    return (
        <>
            <CardContainer>
                <CardSize>
                    <CardSizeTestValue>
                        <TypographyText>TOTAL TASK</TypographyText>
                        <TypographyCount>{TaskList.length}</TypographyCount>
                        <TypographyBottomText>111 last month</TypographyBottomText>
                    </CardSizeTestValue>
                    <IconDiv style={{ backgroundColor: "#1565c0" }}>
                        <AssignmentLateOutlinedIcon fontSize="small" />
                    </IconDiv>
                </CardSize>
                <CardSize>
                    <CardSizeTestValue>
                        <TypographyText>COMPLETED TASK</TypographyText>
                        <TypographyCount>{completedTask}</TypographyCount>
                        <TypographyBottomText>111 last month</TypographyBottomText>
                    </CardSizeTestValue>
                    <IconDiv style={{ backgroundColor: "#1b5e20" }}>
                        <AddTaskOutlinedIcon fontSize="small" />
                    </IconDiv>
                </CardSize>
                <CardSize>
                    <CardSizeTestValue>
                        <TypographyText>TASK IN PROGRESS TASK</TypographyText>
                        <TypographyCount>{progressTask}</TypographyCount>
                        <TypographyBottomText>111 last month</TypographyBottomText>
                    </CardSizeTestValue>
                    <IconDiv style={{ backgroundColor: "#ff9800" }}>
                        <AutoModeOutlinedIcon fontSize="small" />
                    </IconDiv>
                </CardSize>
                <CardSize>
                    <CardSizeTestValue>
                        <TypographyText>PENDING TASK</TypographyText>
                        <TypographyCount>{pendingTask}</TypographyCount>
                        <TypographyBottomText>111 last month</TypographyBottomText>
                    </CardSizeTestValue>
                    <IconDiv style={{ backgroundColor: "#c62828" }}>
                        <PauseCircleOutlineOutlinedIcon fontSize="small" />
                    </IconDiv>
                </CardSize>
            </CardContainer>
            <DashBoardTable />
        </>
    );
};

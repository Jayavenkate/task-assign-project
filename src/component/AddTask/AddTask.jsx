import { useState } from "react";
import {
    AddButton,
    AddTaskContainer,
    Boxcontainer,
    BoxInnercontainer,
    Createbutton,
    PElement,
    StyledTableCell,
} from "./AddTask.styled";
import { AddTaskForm } from "./AddTaskForm";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteTaskSuccess,

} from "../Redux/Task/actionCreator";
import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { EditForm } from "./EditForm";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

export const AddTask = () => {
    const [isAdding, setIsAdding] = useState(false); // Toggle between task views
    const [selectedTaskId, setSelectedTaskId] = useState(null);
    const [action, setAction] = useState(null); // Manage actions: 'view' or 'edit'
    const dispatch = useDispatch();
    const TaskList = useSelector((state) => state.Task.task) || [];
    const [dialogueopen, setDialogueopen] = useState(false); // Toggle between task views
    const [searchQuery, setSearchQuery] = useState("");
    // console.log("TaskList", TaskList);
    const handleOpen = () => {
        setDialogueopen(true);
    };

    // Function to handle closing the dialog
    const handleClose = () => {
        setDialogueopen(false);
    };

    const handleAddClick = () => {
        setIsAdding(true);
        handleOpen(); // Open form to add a new task
    };

    // const handleViewClick = (id) => {
    //     dispatch(viewbyIdTeamsSuccess(id));
    //     setSelectedTaskId(id);
    //     setAction("view"); // Set action to view task details
    // };

    const handleEditClick = (id) => {
        setIsAdding(true);
        setSelectedTaskId(id);
        setAction("edit"); // Set action to edit task details
    };

    const handleDeleteClick = (id) => {
        if (window.confirm("Are you sure you want to delete this task?")) {
            dispatch(deleteTaskSuccess(id)); // Delete task
        }
    };

    const handleBackClick = () => {
        setSelectedTaskId(null);
        setAction(null); // Reset view and action
    };

    const sortTasks = (tasks) => {
        return tasks
            .map((task) => ({
                ...task,
                month: new Date(task.StartDate).getMonth(),
            }))
            .sort((a, b) => {
                if (a.month !== b.month) return a.month - b.month;

                if (a.priority === "High" && b.priority !== "High") return -1;
                if (a.priority !== "High" && b.priority === "High") return 1;

                return a.id - b.id;
            });
    };


    const filteredTasks = sortTasks(TaskList).filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <AddTaskContainer>
            {isAdding && selectedTaskId !== null ? (
                action === "edit" && (
                    <EditForm id={selectedTaskId} onBackClick={handleBackClick} />
                    // ) : (
                    //     <EditForm id={selectedTaskId} onBackClick={handleBackClick} />
                )
            ) : (
                <>
                    <Createbutton>
                        <PElement>Tasks</PElement>
                        <AddButton onClick={handleAddClick}>
                            <AddIcon fontSize="small" /> Create Task
                        </AddButton>
                    </Createbutton>
                    <AddTaskForm
                        setIsAdding={setIsAdding}
                        open={dialogueopen}
                        onClose={handleClose}
                    />
                    <Boxcontainer>
                        <BoxInnercontainer
                            sx={{
                                px: 2,
                                py: 1,
                            }}
                        >
                            <SearchIcon sx={{ mr: 1 }} fontSize="small" />
                            <InputBase placeholder="Search…" sx={{ flex: 1 }} value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)} />
                        </BoxInnercontainer>
                    </Boxcontainer>
                    {filteredTasks.length === 0 ? (
                        <PElement>No Tasks Found</PElement>
                    ) : (
                        <TableContainer
                            component={Paper}
                            sx={{ marginTop: "20px", maxHeight: "330px" }}
                        >
                            <Table sx={{ minWidth: 650 }} aria-label="task table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Task Title</TableCell>
                                        <TableCell align="center">Priority</TableCell>
                                        <TableCell align="center">Teams</TableCell>
                                        <TableCell align="center">Due Date</TableCell>
                                        <TableCell align="center">Status</TableCell>
                                        <TableCell align="center">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredTasks.map((task) => (
                                        <TableRow key={task.id}>
                                            <StyledTableCell align="left">{task.title}</StyledTableCell>
                                            <StyledTableCell align="center">{task.priority}</StyledTableCell>
                                            <StyledTableCell align="center">{task.user}</StyledTableCell>
                                            <StyledTableCell align="center">
                                                {task.StartDate} - {task.StartDate}
                                            </StyledTableCell>
                                            <StyledTableCell align="center">{task.status}</StyledTableCell>
                                            <StyledTableCell
                                                align="center"
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    gap: "10px",
                                                }}
                                            >
                                                {/* <RemoveRedEyeIcon
                                                    fontSize="small"
                                                    sx={{ cursor: "pointer", color: "#5B8DFF" }}
                                                    onClick={() => handleViewClick(task)}
                                                /> */}
                                                <ModeEditIcon
                                                    fontSize="small"
                                                    sx={{ cursor: "pointer", color: "#5B8DFF" }}
                                                    onClick={() => handleEditClick(task)}
                                                />
                                                <DeleteIcon
                                                    fontSize="small"
                                                    sx={{ cursor: "pointer", color: "#c62828" }}
                                                    onClick={() => handleDeleteClick(task.id)}
                                                />
                                            </StyledTableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </>
            )}
        </AddTaskContainer>
    );
};

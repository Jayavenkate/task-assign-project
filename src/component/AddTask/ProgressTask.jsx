import { PElement } from "./AddTask.styled"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";




export const ProgressTask = () => {
    const TaskList = useSelector((state) => state.Task.task) || [];
    const Progress = TaskList.filter(task => task.status === "In Progress")
    return (
        <div>
            <PElement>In Progress Tasks</PElement>
            {Progress.length === 0 ? <PElement>No ProgressTask</PElement> : (<TableContainer
                component={Paper}
                sx={{ marginTop: "20px", maxHeight: "330px" }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Task Title</TableCell>
                            <TableCell align="center">Priority</TableCell>
                            <TableCell align="center">Team</TableCell>
                            <TableCell align="center">DueDate</TableCell>
                            <TableCell align="center">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Progress.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="center">{row.priority}</TableCell>
                                <TableCell align="center">{row.user}</TableCell>
                                <TableCell align="center">{row.StartDate}</TableCell>
                                <TableCell align="center">{row.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>)}


        </div>
    )
}

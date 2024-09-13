import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

export const DashBoardTable = () => {
  const TaskList = useSelector((state) => state.Task.task) || [];

  const sortTasks = (tasks) => {
    return tasks
      .map((task) => ({
        ...task,
        month: new Date(task.StartDate).getMonth(),
      }))
      .sort((a, b) => {
        // Sort by month first
        if (a.month !== b.month) return a.month - b.month;
        // Within the same month, prioritize high-priority tasks
        if (a.priority === "High" && b.priority !== "High") return -1;
        if (a.priority !== "High" && b.priority === "High") return 1;
        // Sort by ID if priorities are the same
        return a.id - b.id;
      });
  };
  const sortedTasks = sortTasks(TaskList);
  return (
    sortedTasks.length > 0 && (
      <TableContainer
        component={Paper}
        sx={{ marginTop: "20px", height: "330px" }}
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
            {sortedTasks.map((row, index) => (
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
      </TableContainer>
    )
  );
};

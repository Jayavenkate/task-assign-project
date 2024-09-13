import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

import { CreateTeams } from "./CreateTeams";
import {
    AddButton,
    AddTaskContainer,
    Createbutton,
    PElemnt,
} from "./Teams.styles";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export const Teams = () => {
    const [dialogueopen, setDialogueopen] = useState(false);
    const teams = useSelector((state) => state.Teams.teams);
    // console.log('teams', teams)
    const handleOpen = () => {
        setDialogueopen(!dialogueopen);
    };

    return (
        <AddTaskContainer>
            <Createbutton>
                <PElemnt>Team Members</PElemnt>
                <AddButton onClick={handleOpen}>
                    <AddOutlinedIcon /> Add New User
                </AddButton>
            </Createbutton>
            <CreateTeams open={dialogueopen} onClose={handleOpen} />
            {/* {teams?.map((list, index) => (
                <div key={index}>
                    {list.name}
                </div>
            ))} */}
            {teams.length > 0 && (
                <TableContainer
                    component={Paper}
                    sx={{ marginTop: "20px", maxHeight: "330px" }}
                >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>UserName</TableCell>
                                <TableCell align="center">Role</TableCell>
                                <TableCell align="center">Email</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {teams.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">{row.role}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </AddTaskContainer>
    );
};

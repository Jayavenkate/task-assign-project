/* eslint-disable react/prop-types */
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTeamsSuccess } from "../Redux/Teams/actionCreator";
import { AddButtonDiv, CancelButtonDiv, FormDiv, InputBoxContainer, InputButtonContainer, InputContainer, Inputlabel } from "../AddTask/AddTask.styled";

export const CreateTeams = ({ open, onClose }) => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = () => {
        const taskData = {
            name: name,
            role: role,
            email: email,
        };
        dispatch(addTeamsSuccess(taskData));
        setName("");
        setRole("");
        setEmail("")
        onClose();
    };
    return (

        <Dialog open={open} onClose={onClose}>
            <DialogTitle>ADD USER</DialogTitle>

            <DialogContent>
                <FormDiv>
                    <InputContainer>
                        <Inputlabel >UserName</Inputlabel>
                        <InputBoxContainer
                            type="text"
                            placeholder="UserName"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            required
                        />
                    </InputContainer>
                    <InputContainer>
                        <Inputlabel >User Role</Inputlabel>
                        <InputBoxContainer
                            type="text"
                            placeholder="Role"
                            onChange={(e) => setRole(e.target.value)}
                            value={role}
                            required
                        />
                    </InputContainer>
                    <InputContainer>
                        <Inputlabel >User Email</Inputlabel>
                        <InputBoxContainer
                            type="text"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                        />
                    </InputContainer>

                    <InputButtonContainer>
                        <CancelButtonDiv onClick={onClose}>Cancel</CancelButtonDiv>
                        <AddButtonDiv onClick={handleSubmit}>Create User</AddButtonDiv>
                    </InputButtonContainer>
                </FormDiv>
            </DialogContent>
        </Dialog>
    );
};

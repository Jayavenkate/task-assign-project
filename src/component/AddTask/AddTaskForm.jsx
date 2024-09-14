/* eslint-disable react/prop-types */
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaskSuccess } from "../Redux/Task/actionCreator";
import { AddButtonDiv, CancelButtonDiv, DateContainer, FormDiv, InputBoxContainer, InputBoxContainerdate, InputBoxContainerSelect, InputBoxContainerSelectOption, InputButtonContainer, InputContainer, Inputlabel } from "./AddTask.styled";

export const AddTaskForm = ({ open, onClose }) => {
    const dispatch = useDispatch();
    const TaskList = useSelector((state) => state.Task.task);
    const teams = useSelector((state) => state.Teams.teams);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [StartDate, setStartDate] = useState("");
    const [EndDate, setEndDate] = useState("");
    const [priority, setPriority] = useState("");
    const [status, setStatus] = useState("");
    const [employee, setEmployee] = useState("");
    const handleSubmit = () => {
        const taskId = TaskList.length ? Math.max(...TaskList.map(task => task.id)) + 1 : 1;
        const taskData = {
            id: taskId,
            title: title,
            description: description,
            StartDate: StartDate,
            EndDate: EndDate,
            priority: priority,
            status: status,
            user: employee,
        };
        dispatch(addTaskSuccess(taskData));
        setTitle("");
        setDescription("");
        setStartDate("");
        setEndDate("");
        setPriority("");
        setStatus("");
        setEmployee("");
        onClose();
    };
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>ADD TASK</DialogTitle>

            <DialogContent>
                <FormDiv>
                    <InputContainer>
                        <Inputlabel >Task Title</Inputlabel>
                        <InputBoxContainer
                            type="text"
                            placeholder="Title"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            required
                        />
                    </InputContainer>
                    <InputContainer>
                        <Inputlabel >Task Description</Inputlabel>
                        <InputBoxContainer
                            type="text"
                            placeholder="Description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            required
                        />
                    </InputContainer>
                    <InputContainer>
                        <Inputlabel >Assign Task to</Inputlabel>

                        <InputBoxContainerSelect
                            onChange={(e) => setEmployee(e.target.value)}
                            value={employee}
                            required
                        >
                            <option value="">Select an Employee</option>
                            {teams?.map((teamMember, index) => (
                                <option key={index} value={teamMember.name}>
                                    {teamMember.name}
                                </option>
                            ))}
                        </InputBoxContainerSelect>
                    </InputContainer>
                    <DateContainer>
                        <InputContainer>
                            <Inputlabel >Task StartDate</Inputlabel>
                            <InputBoxContainerdate
                                type="date"
                                placeholder="start Date"
                                onChange={(e) => setStartDate(e.target.value)}
                                value={StartDate}
                                required
                            />
                        </InputContainer>
                        <InputContainer>
                            <Inputlabel >Task EndDate</Inputlabel>
                            <InputBoxContainerdate
                                type="date"
                                placeholder="End Date"
                                onChange={(e) => setEndDate(e.target.value)}
                                value={EndDate}
                                required
                            />
                        </InputContainer>
                    </DateContainer>
                    <DateContainer>
                        <InputContainer>
                            <Inputlabel > Priority Level</Inputlabel>
                            <InputBoxContainerSelectOption
                                onChange={(e) => setPriority(e.target.value)}
                                value={priority}
                                required
                            >
                                <option value="">Select Priority</option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </InputBoxContainerSelectOption>
                        </InputContainer>
                        <InputContainer>
                            <Inputlabel >Task Status</Inputlabel>
                            <InputBoxContainerSelectOption
                                onChange={(e) => setStatus(e.target.value)}
                                value={status}
                                required
                            >
                                <option value="">Select Status</option>
                                <option value="Pending">Pending</option>
                                <option value="Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </InputBoxContainerSelectOption>
                        </InputContainer>
                    </DateContainer>
                    <InputButtonContainer>
                        <CancelButtonDiv onClick={onClose}>Cancel</CancelButtonDiv>
                        <AddButtonDiv onClick={handleSubmit}>Submit</AddButtonDiv>
                    </InputButtonContainer>
                </FormDiv>
            </DialogContent>
        </Dialog>
    );
};

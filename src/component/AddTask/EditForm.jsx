/* eslint-disable react/prop-types */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editTaskSuccess } from "../Redux/Task/actionCreator";
import {
    AddButtonArrow,
    AddButtonDiv,
    DateContainer,
    FormDiv,
    InputBoxContainer,
    InputBoxContainerdate,
    InputBoxContainerSelect,
    InputBoxContainerSelectOption,
    InputButtonContainer,
    InputContainer,
    Inputlabel,
    PElementBack,
} from "./AddTask.styled";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
export const EditForm = ({ onBackClick, id }) => {
    const dispatch = useDispatch();
    const teams = useSelector((state) => state.Teams.teams);
    const [title, setTitle] = useState(id.title);
    const [description, setDescription] = useState(id.description);
    const [StartDate, setStartDate] = useState(id.StartDate);
    const [EndDate, setEndDate] = useState(id.EndDate);
    const [priority, setPriority] = useState(id.priority);
    const [status, setStatus] = useState(id.status);
    const [employee, setEmployee] = useState(id.user);

    const handleSubmit = () => {

        const taskData = {
            id: id.id,
            title: title,
            description: description,
            StartDate: StartDate,
            EndDate: EndDate,
            priority: priority,
            status: status,
            user: employee,
        };
        dispatch(editTaskSuccess(taskData));
        setTitle("");
        setDescription("");
        setStartDate("");
        setEndDate("");
        setPriority("");
        setStatus("");
        setEmployee("");
        onBackClick()
    };
    return (
        <div>
            <AddButtonArrow onClick={onBackClick}>
                <KeyboardArrowLeftIcon />
                <PElementBack>Edit Task Details</PElementBack>
            </AddButtonArrow>

            <FormDiv>
                <InputContainer>
                    <Inputlabel>Task Title</Inputlabel>
                    <InputBoxContainer
                        type="text"
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                </InputContainer>
                <InputContainer>
                    <Inputlabel>Task Description</Inputlabel>
                    <InputBoxContainer
                        type="text"
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        required
                    />
                </InputContainer>
                <InputContainer>
                    <Inputlabel>Assign Task to</Inputlabel>

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
                        <Inputlabel>Task StartDate</Inputlabel>
                        <InputBoxContainerdate
                            type="date"
                            placeholder="start Date"
                            onChange={(e) => setStartDate(e.target.value)}
                            value={StartDate}
                            required
                        />
                    </InputContainer>
                    <InputContainer>
                        <Inputlabel>Task EndDate</Inputlabel>
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
                        <Inputlabel> Priority Level</Inputlabel>
                        <InputBoxContainerSelectOption
                            onChange={(e) => setPriority(e.target.value)}
                            value={priority}
                            required
                        >
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </InputBoxContainerSelectOption>
                    </InputContainer>
                    <InputContainer>
                        <Inputlabel>Task Status</Inputlabel>
                        <InputBoxContainerSelectOption
                            onChange={(e) => setStatus(e.target.value)}
                            value={status}
                            required
                        >
                            <option value="Pending">Pending</option>
                            <option value="Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </InputBoxContainerSelectOption>
                    </InputContainer>
                </DateContainer>
                <InputButtonContainer>
                    <AddButtonDiv onClick={handleSubmit}>Edit</AddButtonDiv>
                </InputButtonContainer>
            </FormDiv>
        </div>
    );
};

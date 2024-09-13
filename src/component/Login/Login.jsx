import { useState } from "react";
import {
    AddButtonDiv,
    FormDiv,
    InputBoxContainer,
    InputContainer,
    Inputlabel,

    PElementBack,
} from "./Login.styled";
import { useDispatch, useSelector } from "react-redux";
import {
    loginBegin,
    loginError,
    loginSuccess,
} from "../Redux/Login/actionCreator";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const AuthError = useSelector((state) => state.Auth.error);
    const loading = useSelector((state) => state.Auth.loading);
    // const isAuthendicated = useSelector((state) => state.Auth.isAuthendicated);
    const [name, setName] = useState("admin");
    const [password, setPassword] = useState("admin1234");

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginBegin());
        if (name === "admin" && password === "admin1234") {
            dispatch(loginSuccess());
            navigate("/dashboard");
        } else {
            dispatch(loginError("Invalid Creadentials "));
        }
    };
    return (
        <FormDiv>

            <form onSubmit={handleLogin}>
                <PElementBack>Login</PElementBack>
                {AuthError && <p style={{ fontSize: "10px", color: "red" }}>{AuthError}</p>}

                <InputContainer>
                    <Inputlabel>UserName</Inputlabel>
                    <InputBoxContainer
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="admin"
                        required
                    />
                </InputContainer>

                <InputContainer>
                    <Inputlabel>Password</Inputlabel>
                    <InputBoxContainer
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="admin1234"
                        required
                    />
                </InputContainer>
                <AddButtonDiv type="submit">{loading ? "loading" : "Login"}</AddButtonDiv>

            </form>
        </FormDiv>
    );
};

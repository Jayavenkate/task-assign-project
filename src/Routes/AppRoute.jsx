import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../component/Login/Login";
import { DashBoard } from "../component/DashBoard/DashBoard";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;

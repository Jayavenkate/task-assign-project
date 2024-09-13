import { useState } from "react";
import { SideBar } from "./SideBar";

import { SideBarlabelContainer, SideBarRightSide } from "./SideBar.styled";
import { DasBoardOverView } from "../DashBoard/DasBoardOverView";
import { AddTask } from "../AddTask/AddTask";
import { Teams } from "../Teams/Teams";
import { CompletedTask } from "../AddTask/CompletedTask";
import { ProgressTask } from "../AddTask/ProgressTask";
import { PendingTask } from "../AddTask/PendingTask";
import { SideBarResponsive } from "./SideBarResponsive";

export const SidebarApplication = () => {
  const [SelectOption, setSelectOption] = useState("Dashboard");
  const handleClickOption = (option) => {
    // console.log('option', option)
    setSelectOption(option);
  };
  return (
    <SideBarlabelContainer>
      <SideBar onSelect={handleClickOption} SelectOption={SelectOption} />
      <SideBarResponsive onSelect={handleClickOption} SelectOption={SelectOption} />
      <SideBarRightSide>
        {SelectOption === "Dashboard" && <DasBoardOverView />}
        {SelectOption === "Task" && <AddTask />}
        {SelectOption === "Team" && <Teams />}
        {SelectOption === "Completed" && <CompletedTask />}
        {SelectOption === "In Progress" && <ProgressTask />}
        {SelectOption === "Pending" && <PendingTask />}
      </SideBarRightSide>
    </SideBarlabelContainer>
  );
};

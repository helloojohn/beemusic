import React from "react";
import "../Home/Home.css";
import { Main } from "../Sections/Main/Main";
import { LeftMenu } from "../Sections/Menu/LeftMenu";
import { Sidebar } from "../Sections/Aside/Sidebar";

function Home() {
  return (
    <div className="home">
      <LeftMenu />
      <Main />
      <Sidebar /> 
    </div>
  );
}

export { Home };

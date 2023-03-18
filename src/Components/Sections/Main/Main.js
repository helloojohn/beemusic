import React from "react";
import "./Main.css";



import { Banner } from "./Banner";
import { Player } from "./Player";
import { Playlist } from "./Playlist";
import { Top } from "./Top";

function Main() {
  return (
    <div className="main">
      <Top />
      <Banner />
      <Playlist />
      <Player />
    </div>
  );
}

export { Main };
import React from "react";
import { Artist } from "./Artist";
import { FavouritArtist } from "./FavouritArtist";
import { Shortcut } from "./Shortcut";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Shortcut />
      <FavouritArtist />
      <Artist />
    </div>
  );
}

export { Sidebar };

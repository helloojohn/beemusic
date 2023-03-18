import React from "react";
import bees from "../../../image/bees.svg";
import "./Menu";
import "./LeftMenu.css";

import { MdMenuOpen } from "react-icons/md";
import { Menu } from "./Menu";
import { MenuList, DiscoverList, CollectionList } from "./MenuList";
import { Profile } from "./Profile";

function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="wrapper">
        <div className="logoContainer">
          <div className="logo">
            <img src={bees} className="bees" alt="logo" />
            <h1>
              <span className="music">Bee</span>Music
            </h1>
          </div>
          {/* <div className="menu-open">
            <i>
              <MdMenuOpen />
            </i>
          </div> */}
        </div>

        <Menu
          title={"Menu"}
          menuObject={MenuList}
          discoverObject={DiscoverList}
          collectionObject={CollectionList}
        />
      </div>
      <Profile />
    </div>
  );
};

export { LeftMenu };

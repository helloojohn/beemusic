import React from "react";
import { RxCaretDown } from "react-icons/rx";

function Profile() {
  return (
    <div className="profile">
      <img src="" alt="" />
      <p className="user-name">John Tayo</p>
      <i>
        {" "}
        <RxCaretDown />{" "}
      </i>
    </div>
  );
}

export { Profile };

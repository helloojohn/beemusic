import React from "react";
import { RxCaretRight } from "react-icons/rx";
import adam from "../../../image/adam.jpeg"

function Profile() {
    return (
      <div className="profile">
        <div className="pic">
          <img src={adam} alt="" />
        </div>
        <p className="user-name">John Tayo</p>
        <i>
          <RxCaretRight />
        </i>
      </div>
    );
}

export { Profile };

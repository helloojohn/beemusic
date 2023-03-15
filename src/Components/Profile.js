import React from "react";
import { RxCaretRight } from "react-icons/rx";
import John from "../image/john.jpeg"

function Profile() {
    return (
      <div className="profile">
        <div className="pic">
          <img src={John} alt="" />
        </div>
        <p className="user-name">John Tayo</p>
        <i>
          <RxCaretRight />
        </i>
      </div>
    );
}

export { Profile };

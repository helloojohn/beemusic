import React from "react";
import { RxCaretRight } from "react-icons/rx";

function Banner() {
  return (
    <div className="banner">
      <div className="head">
        <p>What's hot 🔥</p>
        <div className="title">
          <h2>Trending</h2>
          <div className="more">
            <p>More</p>
            <i>
              <RxCaretRight />
            </i>
          </div>
        </div>
      </div>

      <div className="banner-body">
        <p>Artist</p>
        <div className="on-top">On Top <br/> Of The World</div>
        <div className="banner-body-bottom">
          <div className="banner-button">
            <button className="play">PLAY</button>
            <button className="follow">FOLLOW</button>
          </div>

          <div className="banner-listeners">
            <span className="listen">Monthly listeners</span>
            <span>32,092</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Banner };
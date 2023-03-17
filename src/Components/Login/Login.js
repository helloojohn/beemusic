import React from 'react';
import "../../Components/Login/Login.css"
import bees from "../../image/bees.svg";

function Login() {
    const handleClick = () => {
        const client_id = "788ba24a7b1f4b1e9bcf77d1cf437c56";
        const redirect_uri = "https://beemus.netlify.app";
        const api_url = "https://accounts.spotify.com/authorize";
        const scope = [
          "user-read-email",
          "user-read-private",
          "user-read-playback-state",
          "user-modify-playback-state",
          "user-read-currently-playing",
          "user-read-playback-position",
          "user-top-read",
          "user-read-recently-played",
        ];
      window.location.href = `${api_url}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
        " "
      )}&response_type=token&show_dialog=true`;
    }


    // const handleClick = () => {
    //     const clientId = "788ba24a7b1f4b1e9bcf77d1cf437c56";
    //     const redirectUrl = "http://localhost:3000/";
    //     // let redirectUrl = ''
    //     // if (
    //     //     window.location.href.substring(window.location.href.length - 1) === "#"
    //     // ) {
    //     //     redirectUrl = window.location.href.substring(
    //     //         0,
    //     //         window.location.href.length - 1
    //     //     );
    //     // } else {
    //     //     redirectUrl = window.location.href;
    //     // }
    //     // window.localStorage.setItem("redirectUrl", redirectUrl);
    //     const apiUrl = "https://accounts.spotify.com/authorize";
    //     const scope = [
    //         "user-read-email",
    //         "user-read-private",
    //         "user-read-playback-state",
    //         "user-modify-playback-state",
    //         "user-read-currently-playing",
    //         "user-read-playback-position",
    //         "user-top-read",
    //         "user-read-recently-played",
    //     ];
    //     window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
    //         " "
    //     )}&response_type=token&show_dialog=true`;
    // };

  return (
    <div className="container">
      <div className="logo">
        <img src={bees} className="bee" alt="logo" />
        <h1>
          <span className="music">Bee</span>Music
        </h1>
      </div>
      <button className='button' onClick={handleClick}>Connect</button>
    </div>
  );
};

export { Login };
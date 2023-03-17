import React, { useEffect } from "react";
import "./App.css";
import { Login } from "./Components/Login/Login";
import { useStateProvider } from "./Utility/StateProvder";
import { reducerCases } from "./Utility/Constant";
import { LeftMenu } from "./Components/Sections/Menu/LeftMenu";

function App() {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);

  return <div className="App">{token ? <LeftMenu /> : <Login />}</div>;
}

export default App;

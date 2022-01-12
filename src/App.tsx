import { useState } from "react";
import Contexts from "./components/utilities/Contexts";
import Router from "./components/utilities/Router";
import "./styles/App.scss";

function App() {
  return (
    <Contexts>
      <Router />
    </Contexts>
  );
}

export default App;

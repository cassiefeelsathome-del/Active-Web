import LoginModal from "/src/componenets/LoginModal.jsx";
import HomePage from "./componenets/HomePage";
import "./App.css";
import { useState } from "react";

function App() {
  const [onLogin, setOnLogin] = useState(true);

  function loginToggle() {
    setOnLogin((prev) => !prev);
    console.log(onLogin);
  }

  return (
    <>
      {onLogin ? <LoginModal onClick={loginToggle} /> : null}
      <HomePage />
    </>
  );
}

export default App;

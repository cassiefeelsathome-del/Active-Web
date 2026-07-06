import LoginModal from "/src/componenets/LoginModal.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [onLogin, setOnLogin] = useState(true);

  function loginToggle() {
    setOnLogin((prev) => !prev);
    console.log(onLogin);
  }

  return <>{onLogin ? <LoginModal onClick={loginToggle} /> : null}</>;
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Textutils - Light Mode";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#2e86c1";
      document.title = "Textutils - Dark Mode";
      showAlert("Dark mode has been enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => setAlert(null), 2000);
  };

  return (
    <>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
        }}
      >
        <Navbar
          title="Textutils"
          home="Home"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm title="Enter the text to analyze" mode={mode} />
              }
            ></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

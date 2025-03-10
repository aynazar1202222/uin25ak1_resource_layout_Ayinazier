import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";

function App() {
  const [signedIn, setsignedIn] = useState(false);
  const [storageUser, setStorageUser] = useState(localStorage.getItem("user"));

  useEffect(() => {
    sessionStorage.getItem("Login");
    setsignedIn(Login);
    console.log("SessionStorage", Boolean(Login));
  }, [signedIn]);

  return (
    <Layout signedIn={signedIn} setsignedIn={setsignedIn}>
      <Routes>
        <Route
          path="/"
          element={
            signedIn ? (
              <Welcome />
            ) : (
              <Login
                storageUser={storageUser}
                setsignedIn={setsignedIn}
                signedIn={signedIn}
              />
            )
          }
        />
        <Route
          path="login"
          element={
            <Login
              storageUser={storageUser}
              setsignedIn={setsignedIn}
              signedIn={signedIn}
            />
          }
        />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </Layout>
  );
}

export default App;

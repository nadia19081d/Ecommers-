import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/navBar/NavBar.jsx";
import Aside from "./components/aside/Aside.jsx";
import { BrowserRouter } from "react-router-dom";
import RoutesIndex from "./routes/RoutesIndex.jsx";
import "./index.scss";
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <div className="main-content">
          <Aside className="main-aside" />
        </div>
        <RoutesIndex />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

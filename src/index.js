import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // tu je React kreirao virtualni DOM, ima objekt u kojem se nalaze 2 instance
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

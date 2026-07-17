import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/theme.css";

import {ThemeProvider}from "./context/ThemeContext";
import {EditorProvider}from "./context/EditorContext";

import {ProjectProvider}from "./context/ProjectContext";
import {AuthProvider} from "./context/AuthContext";



ReactDOM.createRoot(
document.getElementById("root")
)
.render(


<ThemeProvider>

<AuthProvider>

<ProjectProvider>

<EditorProvider>


<App/>


</EditorProvider>
</ProjectProvider>

</AuthProvider>

</ThemeProvider>


);
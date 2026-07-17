import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";




import Layout from "./Components/Layout";
import ProjectManager from "./Components/ProjectManager";


import Dashboard from "./Components/Dashboard";

import ComponentLibrary from "./pages/ComponentLibrary";

import Documentation from "./pages/Documentation";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./Components/ProtectedRoute";
import Editor from "./pages/Editor";


import "./app.css";
import CardBuilder from "./Components/CardBuilder";
import ComponentBuilder from "./Components/ComponentBuilder";
// import ComponentCard from "./components/ComponentCard";
import ComponentPanel from "./Components/ComponentPanel";
import EditorCanvas from "./Components/EditorCanvas";
import PropertyPanel from "./Components/PropertyPanel";
import TokenBuilder from "./Components/TokenBuilder";
import ProjectDetail from "./pages/ProjectDetail";
import InputBuilder from "./Components/InputBuilder";
import ButtonBuilder from "./Components/ButtonBuilder";
// import Export from "./pages/Export";
// import DocCard from "./Components/DocCard";


function App(){


return(


<BrowserRouter>


<Routes>



{/* Public Routes */}



<Route

path="/login"

element={<Login/>}

/>




<Route

path="/signup"

element={<Signup/>}

/>



<Route

path="/projects"

element={

<ProtectedRoute>

<ProjectManager/>

</ProtectedRoute>

}

/>

{/* Protected Routes */}



<Route

element={

<ProtectedRoute>

<Layout/>

</ProtectedRoute>

}


>



<Route

path="/"

element={<Dashboard/>}

/>



<Route

path="/library"

element={<ComponentLibrary/>}

/>



<Route

path="/documentation"

element={<Documentation/>}

/>

{/* -------------------------- */}
<Route

path="/cardbuilder"

element={<CardBuilder/>}

/>
<Route

path="/componentbuilder"

element={<ComponentBuilder/>}

/>

<Route

path="/componentpanel"

element={<ComponentPanel/>}

/>

<Route

path="/editor"

element={<Editor/>}

/>
<Route

path="/projectmanager"

element={<ProjectManager/>}

/>
{/* -------------------------------- */}
</Route>

<Route

path="/projects/:id"

element={

<ProtectedRoute>

<ProjectDetail/>

</ProtectedRoute>

}

/>
<Route

path="/editor/:id"

element={

<ProtectedRoute>

<Editor/>

</ProtectedRoute>

}

/>



</Routes>


</BrowserRouter>


)

}


export default App;
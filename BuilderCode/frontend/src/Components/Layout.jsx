import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

import { Outlet } from "react-router-dom";


export default function Layout(){


return (

<div className="app">


<Sidebar />


<div className="main">


<Navbar />


<Outlet />


</div>


</div>

);


}
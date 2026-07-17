import { Link } from "react-router-dom";
import "../styles/authnav.css";


export default function AuthNavbar({ page }) {


return (

<nav className="auth-navbar">


<div className="auth-logo">
DesignForge
</div>



<div className="auth-nav-buttons">


{
page === "login" ? (

<Link to="/signup">

<button className="nav-btn">
Sign Up
</button>

</Link>

)

:

(

<Link to="/login">

<button className="nav-btn">
Login
</button>

</Link>

)

}


</div>


</nav>

);

}
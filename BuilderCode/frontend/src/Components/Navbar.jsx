import { useState } from "react";

import "../styles/Navbar.css";

import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";


export default function Navbar() {


  const [profileOpen, setProfileOpen] = useState(false);


  const {
    theme,
    toggleTheme
  } = useTheme();



  const {
    user,
    logout
  } = useAuth();




  function handleLogout(){

    logout();

    setProfileOpen(false);

  }




  return (

    <header className="navbar">


      {/* Left Side */}

      <div className="nav-left">


        <button className="mobile-menu">

          ☰

        </button>



        <h2>

          Dashboard

        </h2>


      </div>





      {/* Search */}


      <div className="search-box">


        <span>

          🔍

        </span>



        <input

          type="text"

          placeholder="Search components..."

        />


      </div>






      {/* Right Side */}


      <div className="nav-right">





        {/* Theme Toggle */}


        <button

          className="icon-btn"

          onClick={toggleTheme}

        >


          {

          theme === "light"

          ?

          "🌙"

          :

          "☀️"

          }


        </button>







        {/* Notification */}


        <button className="icon-btn">

          🔔

        </button>







        {/* Profile */}



        <div className="profile-container">



          <button

            className="profile-btn"

            onClick={()=>setProfileOpen(!profileOpen)}

          >



            <div className="avatar">


              {

              user?.name

              ?

              user.name.charAt(0).toUpperCase()

              :

              "U"

              }


            </div>




            <span>


              {

              // user?.name || "User"

              }


            </span>



            <span>

              {/* ⌄ */}

            </span>



          </button>







          {

          profileOpen &&



          <div className="dropdown">



            <h4>

              👤 {user?.name || "Guest"}

            </h4>




            <p>

               {user?.email}

            </p>




            <p>

               Settings

            </p>





            <button

              className="logout-btn"

              onClick={handleLogout}

            >

              Logout

            </button>




          </div>



          }



        </div>





      </div>




    </header>


  );


}
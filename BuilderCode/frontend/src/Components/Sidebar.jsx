import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";


export default function Sidebar() {


  const [collapsed, setCollapsed] = useState(false);


  const navigate = useNavigate();



  const menuItems = [

    {
      icon: "🏠",
      text: "Dashboard",
      path: "/"
    },


    {
      icon: "📚",
      text: "Library",
      path: "/library"
    },


    {
      icon: "🚀",
      text: "Projects",
      path: "/projectmanager"
    },


    {
      icon: "🖥️",
      text: "Editor",
      path: "/editor"
    },


   {
  icon: "📦",
  text: "Documentation",
  path: "/documentation"
},


    {
      icon: "⚙️",
      text: "Settings",
      path: "/"
    }

  ];




  return (


    <aside 
      className={`sidebar ${collapsed ? "collapsed" : ""}`}
    >



      <div className="logo-section">


        <h2>
          {
            collapsed 
            ? "DF" 
            : "DesignForge"
          }
        </h2>



        <button

          className="toggle-btn"

          onClick={() =>
            setCollapsed(!collapsed)
          }

        >

          {
            collapsed 
            ? "➡️" 
            : "⬅️"
          }

        </button>


      </div>





      <nav className="menu">


        {
          menuItems.map((item,index)=>(


            <div

              className="menu-item"

              key={index}

              onClick={() =>
                navigate(item.path)
              }

            >


              <span className="icon">

                {item.icon}

              </span>



              {
                !collapsed && (

                  <span className="text">

                    {item.text}

                  </span>

                )
              }


            </div>


          ))
        }


      </nav>







      <div className="profile">


        <div className="avatar">

          A

        </div>



        {
          !collapsed && (

            <div>

              <h4>
                Admin
              </h4>


              <p>
                Frontend Dev
              </p>


            </div>

          )
        }


      </div>




    </aside>


  );


}
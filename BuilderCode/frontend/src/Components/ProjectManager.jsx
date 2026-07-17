import {
useState
}
from "react";

import API from "../api/api";

import {
useProject
}
from "../context/ProjectContext";


import "../styles/project.css";



export default function ProjectManager(){


const {

projects,

createProject,

deleteProject,

loadProject

}=useProject();



const [name,setName]=useState("");





return(


<div className="project-manager">


<h2>
Projects
</h2>




<div className="create-box">


<input

placeholder="Project name"

value={name}

onChange={(e)=>setName(e.target.value)}

/>



<button

onClick={()=>{

createProject(name);

setName("");

}}

>
Create
</button>


</div>





<div className="project-list">


{

projects.map(project=>(


<div

className="project-card"

key={project.id}

>


<h3>

{project.name}

</h3>


<p>

Created:
{project.created}

</p>



<button

onClick={()=>loadProject(project)}

>

Open

</button>




<button

className="delete"

onClick={()=>deleteProject(project.id)}

>

Delete

</button>



</div>


))


}



</div>


</div>


)


}
import {
createContext,
useContext,
useState,
useEffect
}
from "react";


import API from "../api/api";



const ProjectContext = createContext();



export function ProjectProvider({children}){


const [projects,setProjects]=useState([]);





// GET ALL PROJECTS

async function getProjects(){


try{


const response = await API.get(
"/projects"
);



setProjects(
response.data
);



}

catch(error){

console.log(error);

}


}






// CREATE PROJECT

async function createProject(name){


try{


const response = await API.post(

"/projects",

{
name:name
}

);



setProjects([

...projects,

response.data

]);



}

catch(error){

console.log(error);

}


}







// DELETE PROJECT


async function deleteProject(id){


try{


await API.delete(

`/projects/${id}`

);




setProjects(

projects.filter(

(project)=>

project._id !== id

)

);



}

catch(error){

console.log(error);

}


}






// OPEN PROJECT


function loadProject(project){


console.log(
"Opening project",
project
);


}






useEffect(()=>{


getProjects();


},[]);

async function updateProject(id,data){


const response=

await API.put(

`/projects/${id}`,

data

);


return response.data;


}






return(


<ProjectContext.Provider


value={{

projects,

createProject,

deleteProject,

loadProject,

getProjects,
updateProject


}}


>


{children}


</ProjectContext.Provider>


)


}






export function useProject(){


return useContext(ProjectContext);


}
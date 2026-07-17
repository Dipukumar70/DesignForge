import {
useEffect,
useState
}
from "react";


import {
useNavigate,
useParams
}
from "react-router-dom";


import API from "../api/api";



export default function ProjectDetail(){


const {id}=useParams();


const [project,setProject]=useState(null);


const navigate=useNavigate();




async function getProject(){


try{


const response = await API.get(

`/projects/${id}`

);


console.log(response.data);


setProject(response.data);



}

catch(error){


console.log(
error.response?.data || error.message
);


}



}





useEffect(()=>{


getProject();


},[id]);






if(!project){

return <h2>Loading...</h2>

}





return(


<div className="project-detail">



<h1>

{project.name}

</h1>





<button

onClick={()=>navigate(

`/editor/${project._id}`

)}

>

Open Editor

</button>





<h2>

Components

</h2>




<div className="component-box">


{

Object.keys(

project.components || {}

).map(item=>(


<div key={item}>

{item}

</div>


))


}


</div>







<h2>

Design Tokens

</h2>




<div className="token-box">


{

Object.entries(

project.tokens || {}

).map(([key,value])=>(


<p key={key}>


<strong>

{key}

</strong>


:

{value}


</p>


))


}



</div>




</div>


)


}
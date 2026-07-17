import {useState} from "react";

import ComponentCard from "../Components/ComponentCard";

import "../styles/library.css";


export default function ComponentLibrary(){


const [search,setSearch]=useState("");

const [filter,setFilter]=useState("all");



const components=[

{
name:"Primary Button",
type:"Button",
code:
`<Button>
 Click Me
</Button>`
},


{
name:"Profile Card",
type:"Card",
code:
`<Card>
 Profile
</Card>`
},


{
name:"Email Input",
type:"Input",
code:
`<Input
placeholder="Email"
/>`
},


{
name:"Login Button",
type:"Button",
code:
`<Button>
 Login
</Button>`
}


];



const filtered=

components.filter(item=>{


return(

item.name
.toLowerCase()
.includes(
search.toLowerCase()
)

&&

(
filter==="all"

||

item.type===filter

)

);


});





return(


<div className="library">


<h1>
Component Library
</h1>




<div className="library-tools">


<input

placeholder="Search component..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>




<select

onChange={(e)=>setFilter(e.target.value)}

>


<option value="all">
All
</option>


<option value="Button">
Buttons
</option>


<option value="Card">
Cards
</option>


<option value="Input">
Inputs
</option>


</select>


</div>





<div className="component-grid">


{

filtered.map((item,index)=>(


<ComponentCard

key={index}

component={item}

/>


))


}


</div>



</div>


)

}
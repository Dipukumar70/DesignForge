import {useState} from "react";

import DocCard from "../Components/DocCard";

import "../styles/documentation.css";


export default function Documentation(){


const [search,setSearch]=useState("");



const docs=[


{
name:"Button",

description:
"Button is used for triggering actions and submitting data.",


props:[

{
name:"variant",
type:"string",
default:"primary"
},

{
name:"size",
type:"small | medium | large",
default:"medium"
},

{
name:"radius",
type:"number",
default:"10"
}

],


code:

`
<Button variant="primary">
 Click Me
</Button>
`

},



{
name:"Card",

description:
"Card displays grouped information inside a container.",


props:[

{
name:"title",
type:"string",
default:""
},

{
name:"shadow",
type:"boolean",
default:true
}

],


code:

`
<Card>

<h2>
Profile
</h2>

</Card>
`

},



{
name:"Input",

description:
"Input collects user information.",


props:[

{
name:"type",
type:"text | email | password",
default:"text"
},

{
name:"placeholder",
type:"string",
default:""
}

],


code:

`
<Input

placeholder="Email"

/>
`

}


];





const filteredDocs = docs.filter(item=>

item.name
.toLowerCase()
.includes(
search.toLowerCase()
)

);



return(


<div className="documentation">


<h1>
Component Documentation
</h1>




<input

className="doc-search"

placeholder="Search component..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

/>





<div className="docs-grid">


{

filteredDocs.map((doc,index)=>(


<DocCard

key={index}

doc={doc}

/>


))


}



</div>



</div>


)


}
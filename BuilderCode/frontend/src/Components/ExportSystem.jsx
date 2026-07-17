import {useState} from "react";

import "../styles/export.css";

import {
downloadFile
}
from "../utils/exportFile";



export default function ExportSystem(){


const [cssCode,setCssCode]=useState(

`:root{

--primary:#6366f1;

--secondary:#111827;

--radius:12px;

--spacing:16px;

}`

);



const jsonCode = {

colors:{

primary:"#6366f1",

secondary:"#111827"

},

radius:"12px",

spacing:"16px"

};





const reactCode =

`

export default function Button(){

return(

<button>

Click Me

</button>

)

}

`;





function copyCode(){


navigator.clipboard.writeText(cssCode);


alert(
"CSS Copied"
);


}





return(

<div className="export-container">



<h2>
Export Design System
</h2>



<div className="export-grid">



<div className="export-card">


<h3>
CSS Variables
</h3>


<pre>

{cssCode}

</pre>


<button

onClick={copyCode}

>

Copy CSS

</button>


<button

onClick={()=>downloadFile(

cssCode,

"design-token.css",

"text/css"

)}

>

Download CSS

</button>


</div>





<div className="export-card">


<h3>
JSON Tokens
</h3>


<pre>

{
JSON.stringify(
jsonCode,
null,
2
)

}

</pre>



<button

onClick={()=>downloadFile(

JSON.stringify(
jsonCode,
null,
2
),

"tokens.json",

"application/json"

)}

>

Download JSON

</button>


</div>







<div className="export-card">


<h3>
React Component
</h3>



<pre>

{reactCode}

</pre>


<button

onClick={()=>downloadFile(

reactCode,

"Button.jsx",

"text/javascript"

)}

>

Download Component

</button>



</div>



</div>


</div>


)


}
import {
useState
}
from "react";


export default function ComponentCard({

component,
customStyle

}){


const [showCode,setShowCode]=useState(false);



function copyCode(){

navigator.clipboard.writeText(
component.code
);

alert(
"Code Copied"
);

}



const style = {

width: customStyle?.boxSize,

fontSize: customStyle?.fontSize,

color: customStyle?.color,

backgroundColor: customStyle?.bgColor,

borderRadius: customStyle?.borderRadius,

padding: customStyle?.padding,

boxShadow: customStyle?.boxShadow,

};



return(

<div 

className="component-card"

style={style}

>


<h2>
{component.name}
</h2>


<span>
{component.type}
</span>



<div 

className="preview"

>


{

component.type==="Button"

&&

<button

style={style}

>

Click Me

</button>

}




{

component.type==="Card"

&&

<div

className="demo-card"

style={style}

>

Demo Card

</div>

}





{

component.type==="Input"

&&

<input

placeholder="Input"

style={style}

/>

}



</div>






<button

onClick={()=>setShowCode(!showCode)}

>

{

showCode

?

"Hide Code"

:

"View Code"

}

</button>





{

showCode &&

<pre>

{component.code}

</pre>

}






<button

onClick={copyCode}

>

Copy

</button>



</div>

)

}
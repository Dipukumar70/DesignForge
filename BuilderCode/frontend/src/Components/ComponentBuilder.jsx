import { useState } from "react";
import "../styles/ComponentBuilder.css";


export default function ComponentBuilder(){


const [type,setType] = useState("button");

const [text,setText] = useState("Click Me");

const [color,setColor] = useState("#6366f1");

const [radius,setRadius] = useState(10);

const [shadow,setShadow] = useState(true);



const generateCode = () => {


const code = `

<button

style={{

background:"${color}",

borderRadius:"${radius}px"

}}

>

${text}

</button>

`;


navigator.clipboard.writeText(code);

alert("React Code Copied");


};





return (

<div className="component-builder">


{/* Controls */}


<div className="builder-controls">


<h2>
Component Builder
</h2>



<label>
Component Type
</label>


<select

value={type}

onChange={(e)=>setType(e.target.value)}

>


<option value="button">
Button
</option>


<option value="card">
Card
</option>


<option value="input">
Input
</option>


</select>





<label>
Text
</label>


<input

value={text}

onChange={(e)=>setText(e.target.value)}

/>





<label>
Color
</label>


<input

type="color"

value={color}

onChange={(e)=>setColor(e.target.value)}

/>





<label>
Radius
</label>


<input

type="range"

min="0"

max="40"

value={radius}

onChange={(e)=>setRadius(e.target.value)}

/>





<label>

Shadow

<input

type="checkbox"

checked={shadow}

onChange={()=>setShadow(!shadow)}

/>


</label>





<button

className="copy-code"

onClick={generateCode}

>

Copy React Code

</button>



</div>





{/* Preview */}



<div className="component-preview">


<h2>
Live Preview
</h2>




{

type==="button" &&

<button

style={{

background:color,

borderRadius:`${radius}px`,

boxShadow:

shadow

?

"0 10px 20px rgba(0,0,0,.15)"

:

"none"

}}

className="preview-button"

>

{text}

</button>


}





{

type==="card" &&


<div

className="preview-card"

style={{

borderRadius:`${radius}px`,

boxShadow:

shadow

?

"0 10px 20px rgba(0,0,0,.15)"

:

"none"

}}

>


<h3>
{text}
</h3>


<p>
Reusable card component
</p>


</div>


}





{

type==="input" &&


<input

className="preview-input"

placeholder={text}

style={{

borderRadius:`${radius}px`

}}


/>


}





</div>



</div>


)


}
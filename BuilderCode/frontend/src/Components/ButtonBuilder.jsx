import { useState } from "react";
import "../styles/ButtonBuilder.css";


export default function ButtonBuilder(){


const [variant,setVariant] = useState("primary");

const [size,setSize] = useState("medium");

const [radius,setRadius] = useState(10);

const [text,setText] = useState("Get Started");

const [shadow,setShadow] = useState(true);



const colors = {

primary:"#6366f1",

secondary:"#111827",

outline:"transparent"

};



const buttonStyle = {


background: colors[variant],

color: variant==="outline" ? "#111827":"white",

padding:

size==="small"

? "8px 18px"

:

size==="large"

? "18px 45px"

:

"12px 30px",



borderRadius:`${radius}px`,



border:

variant==="outline"

?

"2px solid #6366f1"

:

"none",



boxShadow:

shadow

?

"0 8px 20px rgba(0,0,0,.15)"

:

"none"



};



function generateCSS(){


const css = `

.button{

background:${colors[variant]};

padding:12px 30px;

border-radius:${radius}px;

box-shadow:${
shadow 
? "0 8px 20px rgba(0,0,0,.15)"
:"none"
};

}

`;


navigator.clipboard.writeText(css);


alert("Button CSS Copied");


}




return(


<div className="builder-container">



<div className="controls">


<h2>
Button Builder
</h2>


<label>
Button Text
</label>


<input

value={text}

onChange={(e)=>setText(e.target.value)}

/>




<label>
Variant
</label>


<select

onChange={(e)=>setVariant(e.target.value)}

>

<option value="primary">
Primary
</option>


<option value="secondary">
Secondary
</option>


<option value="outline">
Outline
</option>


</select>




<label>
Size
</label>


<select

onChange={(e)=>setSize(e.target.value)}

>


<option value="small">
Small
</option>


<option value="medium">
Medium
</option>


<option value="large">
Large
</option>


</select>





<label>
Radius
</label>


<input

type="range"

min="0"

max="50"

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

onClick={generateCSS}

className="copy-btn"

>

Copy CSS

</button>



</div>





<div className="preview-box">


<h2>
Live Preview
</h2>



<button

style={buttonStyle}

>

{text}

</button>



</div>



</div>


)


}
import { useState } from "react";
import "../styles/InputBuilder.css";


export default function InputBuilder(){


const [label,setLabel] = useState("Email Address");

const [placeholder,setPlaceholder] = useState(
"Enter your email"
);


const [type,setType] = useState("text");


const [state,setState] = useState("default");


const [radius,setRadius] = useState(10);


const [size,setSize] = useState("medium");


const [shadow,setShadow] = useState(true);



function copyCode(){


const code = `

<Input

label="${label}"

placeholder="${placeholder}"

type="${type}"

/>

`;


navigator.clipboard.writeText(code);


alert("Input React Code Copied");


}




const inputStyle={


borderRadius:`${radius}px`,


padding:

size==="small"

?

"8px"

:

size==="large"

?

"18px"

:

"12px",


border:

state==="error"

?

"2px solid #ef4444"

:

state==="success"

?

"2px solid #22c55e"

:

"1px solid #d1d5db",



boxShadow:

shadow

?

"0 8px 18px rgba(0,0,0,.1)"

:

"none"


};




return(


<div className="input-builder">



<div className="input-controls">


<h2>
Input Builder
</h2>



<label>
Label Text
</label>


<input

value={label}

onChange={(e)=>setLabel(e.target.value)}

/>




<label>
Placeholder
</label>


<input

value={placeholder}

onChange={(e)=>setPlaceholder(e.target.value)}

/>





<label>
Input Type
</label>


<select

value={type}

onChange={(e)=>setType(e.target.value)}

>


<option value="text">
Text
</option>


<option value="email">
Email
</option>


<option value="password">
Password
</option>


<option value="number">
Number
</option>


</select>





<label>
State
</label>


<select

value={state}

onChange={(e)=>setState(e.target.value)}

>


<option value="default">
Default
</option>


<option value="error">
Error
</option>


<option value="success">
Success
</option>


</select>





<label>
Size
</label>


<select

value={size}

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

onClick={copyCode}

>

Copy React Code

</button>



</div>





<div className="input-preview">


<h2>
Live Preview
</h2>



<div className="form-field">


<label>
{label}
</label>


<input

type={type}

placeholder={placeholder}

style={inputStyle}

/>



{

state==="error" &&

<p className="error">
Invalid email address
</p>

}



{

state==="success" &&

<p className="success">
Looks good!
</p>

}



</div>


</div>



</div>


)

}
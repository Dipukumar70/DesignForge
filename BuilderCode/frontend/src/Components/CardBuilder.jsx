import { useState } from "react";
import "../styles/CardBuilder.css";


export default function CardBuilder(){

const [title,setTitle] = useState("Design System");

const [description,setDescription] = useState(
"Create reusable UI components easily"
);


const [image,setImage] = useState(
"https://images.unsplash.com/photo-1558655146-d09347e92766"
);


const [background,setBackground] = useState("#ffffff");


const [radius,setRadius] = useState(15);


const [padding,setPadding] = useState(25);


const [shadow,setShadow] = useState(true);



function copyCode(){


const code = `

<Card>

<img src="${image}" />

<h2>
${title}
</h2>

<p>
${description}
</p>

</Card>

`;


navigator.clipboard.writeText(code);


alert("Card React Code Copied");


}




return(


<div className="card-builder">



{/* Controls */}


<div className="card-controls">


<h2>
Card Builder
</h2>



<label>
Title
</label>


<input

value={title}

onChange={(e)=>setTitle(e.target.value)}

/>




<label>
Description
</label>


<textarea

value={description}

onChange={(e)=>setDescription(e.target.value)}

 />




<label>
Image URL
</label>


<input

value={image}

onChange={(e)=>setImage(e.target.value)}

 />




<label>
Background Color
</label>


<input

type="color"

value={background}

onChange={(e)=>setBackground(e.target.value)}

/>




<label>
Border Radius
</label>


<input

type="range"

min="0"

max="50"

value={radius}

onChange={(e)=>setRadius(e.target.value)}

/>



<label>
Padding
</label>


<input

type="range"

min="10"

max="60"

value={padding}

onChange={(e)=>setPadding(e.target.value)}

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





{/* Preview */}



<div className="card-preview">


<h2>
Live Preview
</h2>



<div

className="preview-card"

style={{

background,

borderRadius:`${radius}px`,

padding:`${padding}px`,

boxShadow:

shadow

?

"0 15px 30px rgba(0,0,0,.15)"

:

"none"

}}

>


<img

src={image}

alt="preview"

/>



<h3>

{title}

</h3>



<p>

{description}

</p>



<button>

View More

</button>



</div>



</div>



</div>


)


}
import {useState} from "react";
import "../styles/Tokens.css";


export default function TokenBuilder(){

const [color,setColor] = useState("#6366f1");


const [tokens,setTokens] = useState([
{
 name:"Primary",
 value:"#6366f1"
},
{
 name:"Success",
 value:"#22c55e"
},
{
 name:"Danger",
 value:"#ef4444"
}
]);



function addToken(){

const newToken={

name:"Custom",

value:color

};


setTokens([
...tokens,
newToken
]);


}



function copyCSS(){


let css=":root{\n";


tokens.forEach(token=>{

css+=` --${token.name.toLowerCase()}:${token.value};\n`;

});


css+="}";


navigator.clipboard.writeText(css);


alert("CSS Copied");

}




return(

<div className="token-container">



<div className="token-control">


<h2>
Color Tokens
</h2>



<label>
Choose Color
</label>


<input

type="color"

value={color}

onChange={(e)=>setColor(e.target.value)}

/>



<button onClick={addToken}>

Add Token

</button>



<button onClick={copyCSS}>

Copy CSS

</button>



</div>





<div className="token-list">


<h2>
Tokens Preview
</h2>


{

tokens.map((token,index)=>(


<div 
className="token-card"
key={index}
>


<div

className="color-box"

style={{
background:token.value
}}

>


</div>



<div>

<h3>
{token.name}
</h3>


<p>
{token.value}
</p>


</div>


</div>


))


}



</div>






<div className="live-preview">


<h2>
Component Preview
</h2>



<button

style={{

background:tokens[0].value

}}

>

Primary Button

</button>



<div className="box"

style={{

borderColor:tokens[0].value

}}

>

Card Example

</div>



</div>



</div>


)


}
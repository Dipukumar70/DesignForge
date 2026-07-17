import {useState} from "react";


export default function DocCard({doc}){


const [code,setCode]=useState(false);



function copyCode(){

navigator.clipboard.writeText(
doc.code
);

alert(
"Code copied"
);

}



return(


<div className="doc-card">


<h2>
{doc.name}
</h2>



<p>

{doc.description}

</p>



<h3>
Props
</h3>



<table>


<thead>

<tr>

<th>
Name
</th>

<th>
Type
</th>

<th>
Default
</th>

</tr>

</thead>



<tbody>


{

doc.props.map((prop,index)=>(


<tr key={index}>


<td>
{prop.name}
</td>


<td>
{prop.type}
</td>


<td>
{prop.default}
</td>


</tr>


))


}



</tbody>


</table>





<h3>
Preview
</h3>



<div className="doc-preview">


{

doc.name==="Button" &&

<button>

Click Me

</button>

}



{

doc.name==="Card" &&

<div className="demo-card">

Card Preview

</div>

}




{

doc.name==="Input" &&

<input

placeholder="Email"

/>

}


</div>





<button

onClick={()=>setCode(!code)}

>

{
code
?
"Hide Code"
:
"View Code"
}

</button>





{

code &&

<pre>

{doc.code}

</pre>

}





<button

onClick={copyCode}

>

Copy Code

</button>



</div>


)


}
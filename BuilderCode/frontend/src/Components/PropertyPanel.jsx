import {
useEditor
}
from "../context/EditorContext";

export default function PropertyPanel(){



const {

selected,

updateStyle,

updateComponent

}=useEditor();





if(!selected){


return(

<div style={{margin: "20px", fontSize: "20px", fontWeight: "700"}}>

Select Component

</div>

)


}







return(


<div className="property-panel">



<h3>

Properties

</h3>





<label >

Text

</label>



<input


value={
selected.props.text
}


onChange={(e)=>


updateComponent(

selected.id,

{

text:e.target.value

}

)


}

style={{
    width: "250px",
    height: "35px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  }}
/>









<label>

Color

</label>



<input


type="color"


value={

selected.props.style?.color

}


onChange={(e)=>


updateStyle(

selected.id,

{

color:e.target.value

}

)


}


/>









<label>

Background Color

</label>



<input


type="color"


value={

selected.props.style?.bgColor

}


onChange={(e)=>


updateStyle(

selected.id,

{

bgColor:e.target.value

}

)


}


/>









<label>

Box Size

</label>


<input


value={

selected.props.style?.boxSize

}


onChange={(e)=>


updateStyle(

selected.id,

{

boxSize:e.target.value

}

)


}

style={{
    width: "250px",
    height: "35px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  }}
/>









<label>

Font Size

</label>



<input


value={

selected.props.style?.fontSize

}


onChange={(e)=>


updateStyle(

selected.id,

{

fontSize:e.target.value

}

)


}
style={{
    width: "250px",
    height: "35px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  }}

/>









<label>

Border Radius

</label>



<input


value={

selected.props.style?.borderRadius

}


onChange={(e)=>


updateStyle(

selected.id,

{

borderRadius:e.target.value

}

)


}
style={{
    width: "250px",
    height: "35px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  }}

/>









<label>

Padding

</label>



<input


value={

selected.props.style?.padding

}


onChange={(e)=>


updateStyle(

selected.id,

{

padding:e.target.value

}

)


}

style={{
    width: "250px",
    height: "35px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  }}


/>









<label>

Box Shadow

</label>



<input

className="inputboxsize"

value={

selected.props.style?.boxShadow

}


onChange={(e)=>


updateStyle(

selected.id,

{

boxShadow:e.target.value

}

)


}
style={{
    width: "250px",
    height: "35px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  }}


/>






</div>


)


} 
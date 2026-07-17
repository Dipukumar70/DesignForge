import {
useEditor
}
from "../context/EditorContext";



export default function EditorCanvas(){


const {

components,

selectComponent

}=useEditor();





return(

<div className="canvas">



{

components.map(item=>{



const style = {


width:item.props?.style?.boxSize,


fontSize:item.props?.style?.fontSize,


color:item.props?.style?.color,


backgroundColor:item.props?.style?.bgColor,


borderRadius:item.props?.style?.borderRadius,


padding:item.props?.style?.padding,


boxShadow:item.props?.style?.boxShadow



};





return(


<div


className="canvas-item"


key={item.id}


onClick={()=>selectComponent(item)}


>





{

item.type==="Button"

&&


<button

style={style}

>

{

item.props.text

}


</button>



}








{

item.type==="Card"

&&


<div

className="card-preview"

style={style}

>


Card


</div>



}








{

item.type==="Input"

&&


<input


placeholder="Input"


style={style}


/>



}






</div>


)


})


}



</div>


)


}
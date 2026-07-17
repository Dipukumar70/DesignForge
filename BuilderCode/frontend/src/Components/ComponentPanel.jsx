import {
useEditor
}
from "../context/EditorContext";


export default function ComponentPanel(){


const {
addComponent
}=useEditor();



return(

<div className="component-panel">


<h3>
Components
</h3>



<button

onClick={()=>addComponent("Button")}

>

Button

</button>



<button

onClick={()=>addComponent("Card")}

>

Card

</button>



<button

onClick={()=>addComponent("Input")}

>

Input

</button>



</div>

)

}
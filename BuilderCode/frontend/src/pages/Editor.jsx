import ComponentPanel 
from "../Components/ComponentPanel";


import EditorCanvas 
from "../Components/EditorCanvas";


import PropertyPanel 
from "../Components/PropertyPanel";


import "../styles/editor.css";



export default function Editor(){


return(


<div className="editor">


<ComponentPanel/>


<EditorCanvas/>


<PropertyPanel/>


</div>


)


}
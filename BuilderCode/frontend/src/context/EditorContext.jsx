import {
createContext,
useContext,
useState
}
from "react";



const EditorContext=createContext();





export function EditorProvider({children}){



const [components,setComponents]=useState([]);



const [selected,setSelected]=useState(null);







function addComponent(type){



const newComponent={


id:Date.now(),


type:type,


props:{


text:type,



style:{


boxSize:"200px",


fontSize:"16px",


color:"#000000",


bgColor:"#ffffff",


borderRadius:"10px",


padding:"20px",


boxShadow:"0px 5px 15px rgba(0,0,0,0.2)"


}



}



};





setComponents(prev=>[

...prev,

newComponent

]);



}









function updateComponent(id,data){



setComponents(prev=>

prev.map(item=>



item.id===id

?

{


...item,


props:{


...item.props,


...data



}


}



:

item



)



);



}





function updateStyle(id,styleData){



setComponents(prev=>

prev.map(item=>



item.id===id

?

{


...item,


props:{


...item.props,


style:{


...item.props.style,


...styleData



}


}



}



:

item



)



);





// selected component bhi update karo

setSelected(prev=>


prev && prev.id===id

?

{


...prev,


props:{


...prev.props,


style:{


...prev.props.style,


...styleData


}


}



}

:

prev



);



}









function selectComponent(component){


setSelected(component);


}








return(


<EditorContext.Provider



value={{



components,


selected,


addComponent,


updateComponent,


updateStyle,


selectComponent



}}



>


{children}



</EditorContext.Provider>


)



}







export function useEditor(){


return useContext(EditorContext);


}
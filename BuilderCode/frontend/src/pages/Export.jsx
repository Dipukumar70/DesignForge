import { useState } from "react";

export default function Export() {
import "../styles/export.css";

  const [copied, setCopied] = useState("");



  const cssCode = `
.button {
  padding: 12px 20px;
  border-radius: 8px;
  background: #2563eb;
  color: white;
}

.card {
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,.2);
}
`;



  const reactCode = `
function Button(){

return(
<button>
 Click Me
</button>
)

}
`;




  function copyCode(code,type){

    navigator.clipboard.writeText(code);

    setCopied(type);


    setTimeout(()=>{
      setCopied("");
    },2000);

  }





  function downloadFile(content,name,type){


    const blob = new Blob(
      [content],
      {
        type:type
      }
    );


    const url = URL.createObjectURL(blob);


    const link = document.createElement("a");

    link.href=url;

    link.download=name;

    link.click();


  }






  return(


    <div className="export-page">


      <h1>
        Export Page
      </h1>


      <p>
        Export your design system.
      </p>





      <div className="export-card">


        <h2>
          CSS Export
        </h2>


        <textarea
          value={cssCode}
          readOnly
        />



        <button
          onClick={()=>
            copyCode(
              cssCode,
              "css"
            )
          }
        >

          {
            copied==="css"
            ?
            "Copied"
            :
            "Copy CSS"
          }

        </button>



        <button

          onClick={()=>
            downloadFile(
              cssCode,
              "design-system.css",
              "text/css"
            )
          }

        >

          Download CSS

        </button>


      </div>








      <div className="export-card">


        <h2>
          React Component Export
        </h2>


        <textarea
          value={reactCode}
          readOnly
        />



        <button
          onClick={()=>
            copyCode(
              reactCode,
              "react"
            )
          }
        >

          {
            copied==="react"
            ?
            "Copied"
            :
            "Copy React"
          }

        </button>



        <button

          onClick={()=>
            downloadFile(
              reactCode,
              "Button.jsx",
              "text/javascript"
            )
          }

        >

          Download JSX

        </button>


      </div>






    </div>


  );


}
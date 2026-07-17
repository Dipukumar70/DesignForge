import {
  useState
} from "react";


import {
  useNavigate
} from "react-router-dom";


import {
  useAuth
} from "../context/AuthContext";

import API from "../api/axios";
import AuthNavbar from "../Components/AuthNavbar";


import "../styles/auth.css";



export default function Login(){


const navigate = useNavigate();


const {
loginSuccess
}=useAuth();



const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [error,setError]=useState("");




async function submit(e){

e.preventDefault();


try{


const response = await API.post(

"/auth/login",

{
email,
password
}

);



loginSuccess(

response.data.user,

response.data.token

);



navigate("/");



}

catch(error){


setError(

error.response?.data?.message ||

"Login Failed"

);


}


}





return(
    <div className="nav">

<AuthNavbar page="login"/>
<div className="auth-page">

<form

className="auth-box"

onSubmit={submit}

>


<h1>
Login
</h1>



{
error &&

<p className="error">
{error}
</p>

}



<input

placeholder="Email"

value={email}

onChange={
e=>setEmail(e.target.value)
}

/>



<input

type="password"

placeholder="Password"

value={password}

onChange={
e=>setPassword(e.target.value)
}

/>



<button>
Login
</button>



</form>


</div>
</div>

)

}
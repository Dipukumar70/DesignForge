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



export default function Signup(){


const navigate = useNavigate();


const {
  loginSuccess
}=useAuth();



const [form,setForm]=useState({

name:"",
email:"",
password:""

});


const [error,setError]=useState("");



function handleChange(e){

setForm({

...form,

[e.target.name]: e.target.value

});

}




async function submit(e){

e.preventDefault();


try{


const response = await API.post(

"/auth/signup",

{

name: form.name,

email: form.email,

password: form.password

}

);



console.log(response.data);


// Signup ke baad direct login karwana hai
// isliye login API call

const loginResponse = await API.post(

"/auth/login",

{

email: form.email,

password: form.password

}

);



loginSuccess(

loginResponse.data.user,

loginResponse.data.token

);



navigate("/");



}

catch(error){


setError(

error.response?.data?.message ||

"Signup Failed"

);


}


}




return(
    <div >
<AuthNavbar page="signup"/>
<div className="auth-page">


<form

className="auth-box"

onSubmit={submit}

>


<h1>
Create Account
</h1>



{
error &&

<p className="error">
{error}
</p>

}



<input

name="name"

placeholder="Name"

value={form.name}

onChange={handleChange}

/>



<input

name="email"

placeholder="Email"

value={form.email}

onChange={handleChange}

/>



<input

name="password"

type="password"

placeholder="Password"

value={form.password}

onChange={handleChange}

/>



<button>

Sign Up

</button>



</form>


</div>
</div>
)

}
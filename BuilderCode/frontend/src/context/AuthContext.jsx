import {
  createContext,
  useContext,
  useState
} from "react";


const AuthContext = createContext();



export function AuthProvider({children}){


const [user,setUser] = useState(()=>{


const savedUser = localStorage.getItem("user");


return savedUser
? JSON.parse(savedUser)
: null;


});




// Backend login ke baad user set karna

function loginSuccess(userData, token){


localStorage.setItem(
  "token",
  token
);


localStorage.setItem(
  "user",
  JSON.stringify(userData)
);


setUser(userData);


}




function logout(){


localStorage.removeItem("token");

localStorage.removeItem("user");


setUser(null);


}




return(

<AuthContext.Provider

value={{

user,

loginSuccess,

logout

}}

>

{children}

</AuthContext.Provider>

)


}



export function useAuth(){

return useContext(AuthContext);

}
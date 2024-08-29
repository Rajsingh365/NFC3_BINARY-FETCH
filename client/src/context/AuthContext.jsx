import { createContext,useContext,useState } from "react";


export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({children}) => {
  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("loggedin_gamer")) || null);
  const [authToken, setAuthToken] = useState(JSON.parse(localStorage.getItem("nfc-jwt")) || null);
  
  return <AuthContext.Provider value={{authUser,setAuthUser,authToken,setAuthToken}}>
    {children}
    </AuthContext.Provider>;
}
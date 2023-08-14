import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router"
import "../axios";

const AuthContext = createContext({ isLogged: false });

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);

  const checkToken = async (token) => {

    try {
      const { data } = await axios.post("/auth/verify", {
        token,
      });
      console.log(data.auth)
      return data.auth;
    } catch (err) {
      console.log(err);
      return false;
    }

  };

  const [token, setToken] = useState();

  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem('token')))
    if (token) {

      (async () => {
        setIsLogged(await checkToken(token));

      })();
    }

  }, [token]);


  return <AuthContext.Provider value={{ isLogged, setIsLogged, token, setToken }}>{children}</AuthContext.Provider>;
};
export const useAuthContext = () => {
  return useContext(AuthContext);
};
export { AuthProvider };

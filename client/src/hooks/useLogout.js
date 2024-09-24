import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser, setAuthToken } = useAuthContext();
  const navigate = useNavigate();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://gamesquadron-backend.onrender.com/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("loggedin_gamer");
      localStorage.removeItem("nfc-jwt");
      setAuthUser(null);
      setAuthToken(null);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, logout };
}

export default useLogout;
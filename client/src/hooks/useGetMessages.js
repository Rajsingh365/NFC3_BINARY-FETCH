import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";


function useGetMessages() {
 
  const [loading,setLoading] = useState(false);
  const {messages,setMessages,selectedConversation}= useConversation();
  const {authToken} = useAuthContext();

  useEffect(() => {
    const getMessages = async() => {
      setLoading(true);
      try {
        const res = await fetch(`http://localhost:5000/api/messages/${selectedConversation._id}`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`
          }
        });

        const data = await res.json();
        if(data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
    if(selectedConversation?._id) getMessages();
  },[selectedConversation?._id])
  return {messages,loading};
}

export default useGetMessages
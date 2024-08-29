import React, { useEffect, useState } from "react";
import { RiChat3Fill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
// import { useAuthContext } from "../context/AuthContext";
import Messages from "./Messages";
import useGetMessages from "../hooks/useMessages";

const ChatBot = () => {
  const [showChatBot, setShowChatBot] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages]=useState([]);
  // const {authUser}=useAuthContext();
  const {botreply}=useGetMessages();
  const authUser={
    _id: "66d0beedfb2e3692c8e5d1f6"
  }
  const handleMessage = async (e) => {
    e.preventDefault();
    const newMessage = {
      message,
      senderId: authUser._id,
      receiverId: "66b8ef2ae4516709f725cc79"
    };
    setMessages(prevMessages=>[...prevMessages, newMessage]);
    setMessage("");
    const botReply=await botreply({senderMsg: newMessage.message});
    const botMessage = {
      message: botReply.response,
      senderId: "66b8ef2ae4516709f725cc79",
      receiverId: authUser._id
    };
    console.log(botMessage);

    setMessages(prevMessages=>[...prevMessages, botMessage]);
  }
  useEffect(() => { 
    const botMessage = {
      message: "Hello! I am a bot. How can I help you?",
      senderId: "66b8ef2ae4516709f725cc79",
      receiverId: authUser._id
    };
    setMessages([botMessage]);
  }, []);
  
  return (
    <div>
      <label
        htmlFor="my_modal_7"
        className="btn"
        onClick={(e) => setShowChatBot((prev) => !prev)}
      >
        {showChatBot ? <MdCancel size={40} /> : <RiChat3Fill size={40} />}
      </label>

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <Chat messages={messages} setMessages={setMessages} />
          <form onSubmit={handleMessage}>
          <div className="relative mt-5">
            <input 
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input input-bordered input-accent w-full pr-10" 
            />
            <IoMdSend onClick={handleMessage} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"/>
          </div>
          </form>
        </div>
        <label
          className="modal-backdrop"
          htmlFor="my_modal_7"
          onClick={(e) => setShowChatBot((prev) => !prev)}
        >
          Close
        </label>
      </div>
    </div>
  );
};

export default ChatBot;

const Chat = ({messages,setMessages}) => {
  return (
    <>
      <Messages messages={messages} setMessages={setMessages}/>
    </>
  );
};
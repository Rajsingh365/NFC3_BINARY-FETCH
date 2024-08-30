import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);
const io = new Server(server,{
  cors:{
    origin: ["http://localhost:5173"],
    methods: ["GET","POST"],
    credentials: true
  }
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
}

const userSocketMap = {}; //userID:socketID

io.on("connection",(socket) => {
  console.log("A user connected",socket.id);
  const userId = socket.handshake.query.userId;
  if(userId != "undefined") userSocketMap[userId] = socket.id;
  io.emit("getOnlineUsers",Object.keys(userSocketMap));
  io.emit("sessionEmit", "Session is connected");

  socket.on('sendMessage', ({ message, username }) => {
    io.emit('receiveMessage', { message, username, id: socket.id });
  });

  socket.on("disconnect",()=> {
    console.log("user disconnected",socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers",Object.keys(userSocketMap));
  })
})

export {app,io,server};

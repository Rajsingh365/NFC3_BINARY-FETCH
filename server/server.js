import 'dotenv/config'
import express from "express";
import cors from "cors";
import connectDb from "./db/db_connect.js";
import gamesRoutes from "./routes/games.route.js";
import authRoutes from "./routes/auth.route.js"
import messageBotRoutes from "./routes/messagesBot.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use("/api/auth",authRoutes);
app.use("/api/games",gamesRoutes);
app.use("/api/message", messageBotRoutes);

app.get("/",(req,res)=>{
  res.json({message: "Hello world"});
})

app.listen(PORT,()=>{
  connectDb();
  console.log(`Server is running on port ${PORT}`);
})

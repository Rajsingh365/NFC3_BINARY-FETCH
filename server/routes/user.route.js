import express from "express";
import protectRoute from "../middleware/protectRoute.middleware.js";
import { getUsersForSidebar, getGameInfo, addGameInfo} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/",protectRoute,getUsersForSidebar);

//for gameinfo
router.get("/game-info",protectRoute,getGameInfo);
router.post("/game-info",protectRoute,addGameInfo);

export default router;
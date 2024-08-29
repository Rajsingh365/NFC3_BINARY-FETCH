import User from "../models/user.model.js";

export const getUsersForSidebar = async(req,res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({_id:{$ne: loggedInUserId}}).select("-password");

    res.status(200).json(filteredUsers);

  } catch (error) {
    console.log("Error in getUsersForSidebar: ",error.message);
    res.status(500).json({error:"Internal server error"});
  }
}


//for game preference
export const getGameInfo = async(req,res) => {
  try {
    const loggedInUserId = req.user._id;
    const user = await User.findById(loggedInUserId);
    res.json(user.gameInfo);
  } catch (error) {
    console.log("Error in getGameInfo: ",error.message);
    res.status(500).json({error:"Internal server error"});
  }
}

export const addGameInfo = async (req, res) => {
  try {
    const { gameName, gameId, gameExpertise } = req.body;
    const loggedInUserId = req.user._id;

    const user = await User.findByIdAndUpdate(
      loggedInUserId,
      {
        $push: {
          gameInfo: { gameName, gameId, gameExpertise },
        },
      },
      { new: true } 
    );

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user.gameInfo);
  } catch (error) {
    console.log("Error in addGameInfo:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};





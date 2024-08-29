import mongoose from 'mongoose'

export const cocData=async (req, res) => {
  const {Id: playerId}=req.params
  console.log('playerId', playerId);
  const collection =mongoose.connection.db.collection("coc");
  const data = await collection.find({}).toArray()
  console.log(data[0]);
  const userData=data[0].players.filter((dt)=>{
    return dt.playerId===playerId
  })
  res.json(userData[0])
}
export const ffData=async (req, res) => {
  const {Id: playerId}=req.params
  console.log('playerId', playerId);
  const collection =mongoose.connection.db.collection("ff");
  const data = await collection.find({}).toArray()
  console.log(data[0].players);
  const userData=data[0].players.filter((dt)=>{
    return dt.id==playerId
  })
  res.json(userData[0])
}

export const pubgData=async (req, res) => {
  const {Id: playerId}=req.params
  console.log('playerId', playerId);
  const collection =mongoose.connection.db.collection("pubg");
  const data = await collection.find({}).toArray()
  
  console.log(data[0].players);
  const userData=data[0].players.filter((dt)=>{
    return dt.player_id==playerId
  })
  res.json(userData[0])
}

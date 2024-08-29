import express from 'express'
import { cocData, ffData, ffDataUsers, pubgData } from '../controllers/games.controller.js'
const router = express.Router() 
router.get(`/coc/:Id`, cocData)
router.get(`/ff/:Id`, ffData)
router.get(`/pubg/:Id`, pubgData)
router.get(`/ff`, ffDataUsers)
export default router   



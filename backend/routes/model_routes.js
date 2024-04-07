import express from 'express'
import {getdata} from '../controller/model_controller.js'

const router = express.Router();

router.post('/getcrop', getdata)

export default router
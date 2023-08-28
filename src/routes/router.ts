import { Router } from "express";
import { ConvertCSV } from "../controllers/csvController";

const router = Router()
const csvController = new ConvertCSV()

router.get('/dados', csvController.handle)


export {router}
import express from 'express' 
import { authenticateJWT , SECRET } from '../middlewares';
import {Todo} from '../db'


const router = express.Router();
router.post('/todos',authenticateJWT,(req,res)=>{

});

export const router
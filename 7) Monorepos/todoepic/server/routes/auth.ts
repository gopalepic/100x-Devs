import jwt from 'jsonwebtoken'
import express, { Router } from 'express'
import { authenticateJWT , SECRET } from '../middlewares'
import { User } from '../db'

// importing my own crated npm module

const router = express.Router();

router.post('/signup',async (req,res) => {
         
})

import jwt from 'jsonwebtoken'
import express from 'express'
import { authenticateJWT , SECRET } from '../middlewares'
import { User } from '../db'
import { SignupInput } from '@gopalepic/common/dist'
// importing my own crated npm module

const router = express.Router();

router.post('/signup',async (req,res) => {
          
    let parsedInput = SignupInput.safeParse(req.body);
    if(!parsedInput.success){
        return res.status(403).json({message:'error'})
    }
    const username = parsedInput.data.username;
    const password = parsedInput.data.password;
    const user = await User.findOne({username});
    if(user){
        res.status(403).json({message:'User already exist'});
    }
    else{
        const newUser = new User({username , password});
        await newUser.save();
        const token = await jwt.sign({id: newUser._id } ,SECRET,{expiresIn:'1h'});
        res.json({message:"Sign up successfully",token});
    }
})

router.post('/signin',async(req,res) => {
    const {username,password} = req.body;

    const user = await User.findOne({username,password});
    if(user){
        const token = await jwt.sign({id: user._id} ,SECRET , {expiresIn:'1h'});
        res.json({message:'Logged in successfully',token})
    }
    else{
        res.status(403).json({message:'User not found'})
    }
})

router.get('/me',authenticateJWT, async (req,res) => {
    const userId = req.headers["userId"];

    const user = await User.findOne({_id: userId});
    if(!user){
        res.status(404).json({message:'User not found'})
    } else{
        res.status(201).json({username:user.username});
    }

})

export default router
import User from "../models/users";
import {type Request, type Response, type NextFunction } from "express";

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { fullname, username, password } = req.body;

        const newUser = await User.create({ fullname, username, password });
        res.json({msg: 'Regestered user: ', newUser})
    } catch (error) {
        next(error)
    }
}

export const loginUser = (req: Request, res: Response, next: NextFunction) => {
    try {
        
    } catch (error) {
        next(error)
    }
}
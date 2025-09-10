import User from "../models/users";

export const registerUser = async (req, res, next) => {
    try {
        const { fullname, username, password } = req.body;

        const newUser = await User.create({ fullname, username, password });
        res.json({msg: 'Regestered user: ', newUser})
    } catch (error) {
        next(error)
    }
}

export const loginUser = (req, res, next) => {
    try {
        
    } catch (error) {
        next(error)
    }
}
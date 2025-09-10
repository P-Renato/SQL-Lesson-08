import express from 'express';
import { registerUser } from '../controllers/users';
import validateUser from '../middlewares/validations';

const router = express.Router();

router.route('/users').post( validateUser, registerUser)

export default router;
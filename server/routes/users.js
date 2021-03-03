import express from 'express';
import {createUser, loginUser, logoutUser, verifyUserSession, findUser} from '../controller/user.js';

const router = express.Router();

router.post('/create', createUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);
router.get('/verify', verifyUserSession);
router.post('/find', findUser);

export default router;
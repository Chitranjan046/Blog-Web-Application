import express from 'express';
import { googleAuth, signup, signin} from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', googleAuth);

export default router;


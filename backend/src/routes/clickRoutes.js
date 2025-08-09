// Rutas para los clics (ES Modules)
import express from 'express';
import { defaultGetClicks, defaultIncrementClick } from '../controllers/clickController.js';

const router = express.Router();
router.get('/', defaultGetClicks);
router.post('/increment', defaultIncrementClick);

export default router;

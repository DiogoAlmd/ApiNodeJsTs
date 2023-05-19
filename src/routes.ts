import { Router } from 'express';
import Armario1Controller from './Controllers/Armario1Controller';

export const router = Router();

router.get('/api/Armario1', Armario1Controller.listAll);
router.put('/api/Armario1/:serial')
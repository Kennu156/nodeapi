import express, { Router } from 'express';
import { getAllCars, getCarById } from '../controllers/carcontroller';

const router = express.Router()

router.get('/cars'.getAllCars)
router.get('/cars/id'.getCarById)
router.post('/cars')
router.put('/cars/id')
router.delete('/cars/id')



export default router;
import { Router } from 'express';
import { createBooking, cancelBooking } from '../controllers/bookingController';

const router = Router();

router.post('/bookings', createBooking);
router.delete('/bookings/:id', cancelBooking);

export default router;

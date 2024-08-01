import { Router } from 'express';
import { printTicket } from '../controllers/printTicketController';

const router = Router();

router.post('/print-ticket', printTicket);

export default router;

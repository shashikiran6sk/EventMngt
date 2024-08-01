import { Request, Response } from 'express';
import Booking from '../models/booking';
import Event from '../models/event';

export const printTicket = async (req: Request, res: Response) => {
  try {
    const { bookingId } = req.body;

    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    const event = await Event.findById(booking.eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    const ticket = `
      <h1>Ticket</h1>
      <p><strong>Event:</strong> ${event.name}</p>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>User ID:</strong> ${booking.userId}</p>
      <p><strong>Quantity:</strong> ${booking.quantity}</p>
      <p><strong>Booking ID:</strong> ${booking._id}</p>
      <p><strong>Timestamp:</strong> ${booking.timestamp}</p>
    `;

    res.status(200).send(ticket);
  } catch (error) {
    res.status(500).json({ message: 'Error printing ticket', error });
  }
};

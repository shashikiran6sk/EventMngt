import { Request, Response } from 'express';
import Booking from '../models/booking';
import Event from '../models/event';

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { userId, quantity, eventId } = req.body;

    

    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    if (event.bookedTickets + quantity > event.totalTickets) {
      return res.status(400).json({ message: `Not enough tickets, available=${event.totalTickets - event.bookedTickets}` });

    }

    if (quantity > 15 && event.totalTickets-event.bookedTickets<15 ) {
      return res.status(400).json({ message: 'Cannot process your request because available tickets are less' });
    }

    if(quantity>15){
      event.bookedTickets+=15;
      
      await event.save();
    }
    else{
    event.bookedTickets += quantity;
    await event.save();
    }

    const newBooking = new Booking({ userId, quantity, eventId });
    await newBooking.save();

    if(quantity>15){
      res.status(201).json({ message: 'Booked only 15 tickets'});
    }
    else{
    res.status(201).json(newBooking);}
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error });
  }
};

export const cancelBooking = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const booking = await Booking.findByIdAndDelete(id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    const event = await Event.findById(booking.eventId);
    if (event) {
      event.bookedTickets -= booking.quantity;
      await event.save();
    }

    res.status(200).json({ message: 'Booking canceled' });
  } catch (error) {
    res.status(500).json({ message: 'Error canceling booking', error });
  }
};

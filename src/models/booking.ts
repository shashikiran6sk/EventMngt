import mongoose, { Document, Schema } from 'mongoose';

interface IBooking extends Document {
  userId: string;
  eventId: string;
  quantity: number;
  timestamp: Date;
}

const BookingSchema: Schema = new Schema({
  userId: { type: String, required: true },
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  quantity: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Booking = mongoose.model<IBooking>('Booking', BookingSchema);
export default Booking;

import mongoose, { Document, Schema } from 'mongoose';

interface IEvent extends Document {
  name: string;
  date: Date;
  totalTickets: number;
  bookedTickets: number;
}

const EventSchema: Schema = new Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  totalTickets: { type: Number, required: true },
  bookedTickets: { type: Number, default: 0 },
});

const Event = mongoose.model<IEvent>('Event', EventSchema);
export default Event;

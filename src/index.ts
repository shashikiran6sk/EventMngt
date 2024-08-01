import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import eventRoutes from './routes/eventRoutes';
import bookingRoutes from './routes/bookingRoutes';
import printTicketRoutes from './routes/printTicketRoutes';  // Import the new route

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/event-booking')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

app.use('/api', eventRoutes);
app.use('/api', bookingRoutes);
app.use('/api', printTicketRoutes);  // Use the new route

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

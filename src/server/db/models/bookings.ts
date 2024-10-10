import mongoose, { Schema } from "mongoose";
import { IBooking } from "../interfaces/bookings";

const BookingSchema: Schema = new Schema<IBooking>({
    userId: { type: String, required: true },
    serviceId: { type: String, required: true },
    date: { type: Date, required: true },
  });
  
  const Booking = mongoose.model<IBooking>("Booking", BookingSchema);
  
  export default Booking;
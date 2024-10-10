import { Document } from "mongoose";

export interface IBooking extends Document {
    userId: string;
    serviceId: string;
    date: Date; // Adjust the type as needed
  }
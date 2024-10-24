import { Document } from 'mongoose';

interface IQuestionnaire {
  question: string; // E.g., 'Work and Education'
  answers: string[]; // Array of questions
}
export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  image: string;
  provider: string;
  questionnaires: IQuestionnaire[];
  isVerified: boolean;
}

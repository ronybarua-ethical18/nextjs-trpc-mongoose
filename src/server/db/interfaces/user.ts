import { Document } from 'mongoose';

interface IQuestion {
  questionText: string;  // E.g., 'Moved for a new job'
  isSelected: boolean;   // If the question is selected
}

interface IQuestionnaire {
  category: string;       // E.g., 'Work and Education'
  questions: IQuestion[]; // Array of questions
}
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role:string;
  questionnaires: 
  
}

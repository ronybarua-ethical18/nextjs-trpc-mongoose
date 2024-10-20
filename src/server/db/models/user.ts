import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/user";



const UserSchema: Schema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "auditor", "client"],
      required: true,
    },
    questionnaires: [
      {
        category: { type: String, required: true }, // E.g., 'Work and Education'
        questions: [
          {
            questionText: { type: String, required: true }, // E.g., 'Moved for a new job'
            isSelected: { type: Boolean, default: false }, // If the question is selected
          },
        ],
      },
    ],
  },

  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;

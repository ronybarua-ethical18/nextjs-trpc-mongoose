import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/user";



const UserSchema: Schema = new Schema<IUser>(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "auditor", "customer"],
      required: true,
    },
    questionnaires: [
      {
        category: { type: String, required: true }, 
        questions: [
          {
            questionText: { type: String, required: true }, 
            isSelected: { type: Boolean, default: false },  
          },
        ],
      },
    ],
  },

  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;

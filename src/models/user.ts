import { Schema, Document, model, models } from "mongoose";

// Define interface representing a user
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// Define schema for user
const UserSchema: Schema<IUser> = new Schema<IUser>({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+@.+\..+/, // Using match option for email validation
  },
  password: {
    type: String,
    required: true,
    minlength: 8, // Using minlength option for minimum length validation
    maxlength: 14, // Using maxlength option for maximum length validation
    match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,14}$/, // Using match option for password validation
  },
});

// Create and export the User model based on the schema
export default models.User || model<IUser>("User", UserSchema);

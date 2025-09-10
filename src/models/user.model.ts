import { Schema, model, Document, models } from 'mongoose';

export interface User extends Document {
  _id: string
  username: string
  password: string
  email: string
  role: string
  isActive: boolean
  isBanner: boolean
  isDeleted: boolean
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema<User>(
  {
    username: { type: String, required: [true, 'Username is required'], trim: true },
    password: { type: String, required: [true, 'Password is required'] },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Invalid email format'],
    },
    role: { type: String, default: 'Member', enum: ['Member', 'Admin'] },
    isActive: { type: Boolean, default: true },
    isBanner: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export const UserModel = models.User || model<User>('User', UserSchema);
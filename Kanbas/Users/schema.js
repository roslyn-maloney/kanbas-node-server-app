import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    _id: {type: String},
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: {type: String},
    email: String,
    lastName: String,
    dob: Date,
    createDate: {type: Date, default:Date.now },
    role: {
      type: String,
      enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
      default: "USER",
    },
    loginId: String,
    section: String,
    lastActivity: Date,
    totalActivity: String,
  },
  { collection: "users" }
);
export default userSchema;
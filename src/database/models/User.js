// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, enum: ["student", "instructor"], default: "student" },
    age: Number,
    sex: { type: String, enum: ["M", "F", "Outro"] },
    weight: Number,
    height: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

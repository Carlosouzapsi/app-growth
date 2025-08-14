// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    salt: { type: String },
    name: { type: String },
    role: { type: String, enum: ["student", "instructor"], default: "student" },
    age: Number,
    sex: { type: String, enum: ["M", "F", "Outro"] },
    weight: Number,
    height: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

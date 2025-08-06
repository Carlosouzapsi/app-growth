// models/Exercise.js
const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    muscleGroup: { type: String, required: true }, // ex: Peito, Costas
    equipment: { type: String }, // ex: Halteres, Máquina
    description: String,
    videoUrl: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Exercise", exerciseSchema);

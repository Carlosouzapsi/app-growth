// models/WorkoutExercise.js
const mongoose = require("mongoose");

const workoutExerciseSchema = new mongoose.Schema({
  exercise: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exercise",
    required: true,
  },
  sets: Number,
  reps: Number,
  weight: Number, // carga sugerida
  rest: Number, // descanso em segundos
});

module.exports = workoutExerciseSchema; // Subdocument, sem model

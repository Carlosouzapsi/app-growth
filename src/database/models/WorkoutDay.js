// models/WorkoutDay.js
const mongoose = require("mongoose");
const workoutExerciseSchema = require("./WorkoutExercise");

const workoutDaySchema = new mongoose.Schema({
  title: { type: String, required: true }, // ex: Segunda - Peito
  dayOfWeek: { type: String }, // opcional, ex: 'segunda'
  exercises: [workoutExerciseSchema],
});

module.exports = workoutDaySchema; // Subdocument também

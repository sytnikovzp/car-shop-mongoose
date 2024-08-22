const mongoose = require('mongoose');
// ==========================
const { Schema } = mongoose;

const typeSchema = new Schema(
  {
    type: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const Type = mongoose.model('Type', typeSchema);

module.exports = Type;

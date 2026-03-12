const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // normalize before saving
      trim: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"], // only these two values allowed
      default: "user",
    },
    refreshToken: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }, // auto adds createdAt, updatedAt
);

// IMPORTANT: Never send passwordHash or refreshToken in API responses
userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.passwordHash;
  delete obj.refreshToken;
  return obj;
};

module.exports = mongoose.model("User", userSchema);

const mongoose = require("mongoose");

const STATUSES = ["draft", "submitted", "approved", "rejected"];

// This map defines EVERY valid transition
// key = current status, value = statuses you can move TO
const VALID_TRANSITIONS = {
  draft: ["submitted"],
  submitted: ["approved", "rejected"],
  approved: [], // terminal state
  rejected: [], // terminal state
};

const recordSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: STATUSES,
      default: "draft",
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // tells Mongoose this links to the User collection
      required: true,
    },
  },
  { timestamps: true },
);

// Export the transition map too — the service layer will use it
module.exports = mongoose.model("Record", recordSchema);
module.exports.VALID_TRANSITIONS = VALID_TRANSITIONS;

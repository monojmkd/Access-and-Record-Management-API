const mongoose = require("mongoose");

const auditLogSchema = new mongoose.Schema(
  {
    record: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Record",
      required: true,
    },
    changedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    fromStatus: {
      type: String,
      required: true,
    },
    toStatus: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }, // createdAt tells us exactly when it happened
);

module.exports = mongoose.model("AuditLog", auditLogSchema);

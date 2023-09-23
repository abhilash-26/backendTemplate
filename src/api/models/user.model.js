const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function save(next) {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(this.password, salt);
    this.password = hash;
  } catch (error) {
    console.log(error);
  }
});

/**
 * Methods
 */

userSchema.method({
  transform() {
    const transformed = {};
    const fields = ["id", "name", "email", "createdAt"];
    fields.forEach((item) => (transformed[item] = this[item]));
    return transformed;
  },
});

module.exports = mongoose.model("User", userSchema);

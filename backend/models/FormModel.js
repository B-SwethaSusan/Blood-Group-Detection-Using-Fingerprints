const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

// ✅ Ensure `mongoose.model` is correctly exported
const Form = mongoose.model("Form", formSchema, "table1");

module.exports = Form;


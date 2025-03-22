const mongoose = require("mongoose");

const InputSchema = new mongoose.Schema({
    type: { type: String, required: true, enum: ["text", "email", "password", "number", "date"] },
    title: { type: String, required: true },
    placeholder: { type: String },
});

const ResponseSchema = new mongoose.Schema({
    submittedAt: { type: Date, default: Date.now },
    data: Object, 
});

const FormSchema = new mongoose.Schema({
    title: { type: String, required: true },
    inputs: [InputSchema],
    responses: [ResponseSchema],
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Form", FormSchema);

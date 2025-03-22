const Form = require("../models/Form");

exports.createForm = async (req, res) => {
    try {
        const { title, inputs } = req.body;
        if (!title) return res.status(400).json({ message: "Title is required" });

        const newForm = new Form({ title, inputs });
        await newForm.save();
        res.status(201).json(newForm);
    } catch (error) {
        res.status(500).json({ message: "Error creating form", error });
    }
};

exports.getAllForms = async (req, res) => {
    try {
        const forms = await Form.find().select("title");
        res.json(forms);
    } catch (error) {
        res.status(500).json({ message: "Error fetching forms", error });
    }
};

exports.getFormById = async (req, res) => {
    try {
        const form = await Form.findById(req.params.id);
        if (!form) return res.status(404).json({ message: "Form not found" });

        res.json(form);
    } catch (error) {
        res.status(500).json({ message: "Error fetching form", error });
    }
};

exports.updateForm = async (req, res) => {
    try {
        const { title, inputs } = req.body;
        const updatedForm = await Form.findByIdAndUpdate(
            req.params.id,
            { title, inputs },
            { new: true }
        );

        if (!updatedForm) return res.status(404).json({ message: "Form not found" });

        res.json(updatedForm);
    } catch (error) {
        res.status(500).json({ message: "Error updating form", error });
    }
};

exports.submitForm = async (req, res) => {
    try {
        const { id } = req.params;
        const { responses } = req.body;

        const form = await Form.findById(id);
        if (!form) return res.status(404).json({ message: "Form not found" });

        const structuredResponses = {};
        form.inputs.forEach((input, index) => {
            structuredResponses[input.title] = responses[index]; 
        });

        form.responses.push({ submittedAt: new Date(), data: structuredResponses });

        await form.save();

        res.status(200).json({ message: "Response saved successfully!" });
    } catch (error) {
        console.error("Error saving response:", error);
        res.status(500).json({ message: "Failed to save response", error });
    }
}

exports.deleteForm = async (req, res) => {
    try {
        const deletedForm = await Form.findByIdAndDelete(req.params.id);
        if (!deletedForm) return res.status(404).json({ message: "Form not found" });

        res.json({ message: "Form deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting form", error });
    }
};

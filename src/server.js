const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const formRoutes = require("./routes/formRoutes");

dotenv.config();

connectDB();

const app = express();


app.use(express.json());
app.use(cors());


app.use("/api/forms", formRoutes);

app.get("/", (req, res) => {
    res.send("Form Builder API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

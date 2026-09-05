const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = 3000;
const userRoute = require("./routes/userRoutes")

// Middleware to parse incoming JSON requests
app.use(express.json());
// const atlas_string = "mongodb+srv://joshbb412_db_user:ihopeitworks@cluster0.nvtytwk.mongodb.net/?appName=Cluster0"
const compass_str = "mongodb://localhost:27017/"
mongoose.connect(compass_str)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("Connection Error: ", err))

app.use("/users", userRoute)
// Start the server
app.listen(PORT, () => {
    console.log(`Student Portal API is running on http://localhost:${PORT}`);
});
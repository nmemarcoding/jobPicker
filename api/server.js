const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/auth");
const jobRoute = require("./routes/job");
const orderRoute = require("./routes/order");

dotenv.config();

mongoose
    .connect("mongodb+srv://nmemarcoding:Coding1377@cluster0.k24v0wi.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
    })


app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/job", jobRoute);
app.use("/api/order", orderRoute)


app.listen(process.env.PORT || 5001, () => {
    console.log("Backend server is running!");
});
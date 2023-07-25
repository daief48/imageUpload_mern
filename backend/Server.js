const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const UploadRoute = require("./routes/UploadRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 5000;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Mongodb Database ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error in Mongodb ${error}`);
    }

}
connectDB();

app.use(UploadRoute);

app.listen(PORT, () =>{
    console.log(`Server started at port: ${PORT}`)
})
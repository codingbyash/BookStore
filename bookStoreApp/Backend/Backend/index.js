import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";// env ko import karo
import cors from "cors"; //different port pe backend aur frontend chalao to fir frontend ka port access mangta hai data ka 
                        // backend ke peort se, isliye cors error ko resolve karna pdta hai

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();
app.use(cors());
app.use(express.json());


dotenv.config(); //env ko config karo
const PORT = process.env.PORT || 4000; // agar 4001 port(see in .env) busy hai to 4001 port pr chalana
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true, //atlas use karne pe ye do line nahi likhna hota hai
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
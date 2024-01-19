import mongoose from "mongoose";
import { mongoUrl } from "../config.js";

mongoose
    .connect(mongoUrl)
    .then(() => console.log("Connected to server"))
    .catch((err) => console.log(err));

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now,
    },
    updated: Date,
});

const User = mongoose.model("User", UserSchema);

export { User };

import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contact: { type: String, minlength: 2, maxlength: 15 },
    address: { type: String },
    dob: { type: Date, required: true },
    doa: {
        type: Date,
        required: true,
        default: Date.now,
    },
    password: {
        type: String,
        requird: true,
        minlength: 8,
    }
}, { timestamps: true, strict: false });

export default User = mongoose.model("User", userSchema);//export the model
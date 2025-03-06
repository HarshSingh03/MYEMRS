import mongoose from "mongoose";
import bcrypt, { genSalt } from "bcrypt";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    contact: { type: String, minlength: 2, maxlength: 15 },
    address: { type: String },
    dob: { type: Date, required: true },
    password: {
        type: String,
        required: true,
        minlength: 3,
        select: false
    }
}, { timestamps: true, strict: false });


userSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

userSchema.methods.matchPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    }
    catch (error) {
        throw new Error('Match password failed.')
    }
}


export default mongoose.model("User", userSchema);//export the model



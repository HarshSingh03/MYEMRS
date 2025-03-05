import mongoose from 'mongoose';
import 'dotenv/config';

const dbConnect = (url) => {

    mongoose.connect(url, { retryWrites: true, retryReads: true, timeoutMS: 1500 })
        .then(console.log("Connected to database"))
        .catch(err => console.log(err.message));
}

export default dbConnect;
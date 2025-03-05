import express from 'express';
import mongoose from 'mongoose';
import helmet from 'helmet';
import cors from 'cors';




const app = express();

app.get('/', (req, res) => {
    console.log("Hello World");
    return res.send("Hello World");
})



app.listen(5000, () => {
    console.log("App working on port 5000");

})
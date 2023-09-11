import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());

mongoose.connect(`${process.env.DATABASE}`)
.then(() => console.log('DB Connected!'))
.catch(err => {
    console.log(Error, err.message);
});

app.listen(3001, () => console.log('Server Running'));



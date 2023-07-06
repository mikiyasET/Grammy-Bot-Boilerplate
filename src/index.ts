import appRoute from "./routes/app.route";
import {errorMiddleWare} from "./error";
import connectDB from "./utils/prisma";
import connectBot from "./utils/bot";
const dotenv = require('dotenv');
const express = require('express')
const morgan = require('morgan')
const app = express()
dotenv.config()


app.use(morgan('dev'))
app.use(express.json())
app.use(appRoute)
app.use(errorMiddleWare)


app.listen(process.env.PORT, async () => {
    try {
        console.log(`Example app listening at http://localhost:${process.env.PORT}`);
        await connectDB();
        await connectBot();
    } catch (e) {
        console.log(e);
        console.log("There was an error on the server");
    }
})
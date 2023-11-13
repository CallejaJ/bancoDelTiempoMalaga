const express = require("express");
const dotenv = require("dotenv");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors")
const userRouter = require("./routes/userRouter");
const offerRouter = require("./routes/offerRouter");
const requestRouter = require("./routes/requestRouter");
const serviceRouter = require("./routes/serviceRouter");
const messageRouter = require("./routes/messageRouter");
const transferRouter = require("./routes/transferRouter");
const creditRouter = require("./routes/creditRouter");




const fileUpload = require("express-fileupload");

dotenv.config();

const app = express();

// MIDDLEWARES
app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(
    fileUpload({
        createParentPath: true,
        limits: { fileSize: 20 * 1024 * 1024 },
        abortOnLimit: true,
        responseOnLimit: "Imagen demasiado grande",
        uploadTimeout: 0,
    })
);

app.use(cors())

// ENTIDADES //

app.use("/user", userRouter)
app.use("/offers", offerRouter)
app.use("/requests", requestRouter)
app.use("/services", serviceRouter)
app.use("/messages", messageRouter)
app.use("/transfers", transferRouter)
app.use("/credits", creditRouter)



module.exports = app;
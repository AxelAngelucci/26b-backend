const express = require('express');
const server = express();
const musicRouter = require('./routes/music.routes');
const db = require('./config/db.config');
const userRouter = require('./routes/users.routes');
require('dotenv').config()

db();

server.use(express.json())
server.use(express.static("storage"))
server.use(musicRouter);
server.use(userRouter);


server.listen(process.env.PORT, () => {
    console.log(`Express escuchando por el puerto ${process.env.PORT}`)
});
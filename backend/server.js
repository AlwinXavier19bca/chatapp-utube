import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'

import mangooDB from './db/mangoodb.js';
import { app, server } from './socket/socket.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve()

// app.get("/", (req, res) => {
    //   res.send("hi vanakkam da mapla")
    // });

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth/", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

app.use(express.static(path.join(__dirname, '/frontend2/dist/')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend2', 'dist', 'index.html'));
});

server.listen(PORT, () => {
    mangooDB()
    console.log(`Server is running on port ${PORT}`)
})

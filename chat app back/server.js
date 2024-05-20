const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

server.listen(process.env.PORT, () => console.log(`Server running on port http://localhost:1660/${process.env.PORT}`));

const express = require("express");
const app = express();
const path = require('path');
const http = require("http");
const socketio = require("socket.io");

const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));  // Fixed this line

io.on("connection", function(socket){
    console.log("connected");
});

app.get("/", (req, res) => {
    res.render("index");
});

server.listen(3000, () => {  // Added a callback to confirm the server is running
    console.log("Server running on port 3000");
});

const express = require('express');
const app = express();
const path = require("path");
const http = require("http");

const server = http.createServer(app);
const io = require("socket.io")(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("send-location", (data) => {
        console.log("Location from", socket.id, data);
        io.emit("receive-location", { id: socket.id, ...data });
    });

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
        io.emit("user-disconnected", socket.id);
    });
});

server.listen(5000, () => {
    console.log("Server is running at http://localhost:5000");
});

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

// Create an Express app
const app = express();

// Create an HTTP server
const server = http.createServer(app);

// Attach socket.io to the HTTP server
const io = socketIo(server);

// Use Heroku's dynamic port, or default to 3000 for local development
const PORT = process.env.PORT || 3000;

io.on("connection", (socket) => {
  console.log("Client connected");

  // Listen for 'click' events from mobile app
  socket.on("click", () => {
    console.log("Received click event");
    socket.broadcast.emit("performClick"); // Broadcast event to connected clients (PC)
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

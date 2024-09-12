const PORT = process.env.PORT || 3000; // Use Heroku's port or fallback to 3000 for local development
const io = require('socket.io')(PORT);

/*for local deployment
const io = require('socket.io')(3000);*/

io.on('connection', (socket) => {
  console.log('Client connected');
  
  // Listen for 'click' events from mobile app
  socket.on('click', () => {
    console.log('Received click event');
    socket.broadcast.emit('performClick'); // Broadcast event to connected clients (PC)
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

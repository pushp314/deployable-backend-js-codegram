import http from 'http';
import app from './app.js'; // Added .js extension
import { initSocket } from './socket.js'; // Added .js extension

const PORT = process.env.PORT || https://seahorse-app-wlact.ondigitalocean.app;

const server = http.createServer(app);

// Initialize Socket.IO
initSocket(server);

app.get('/', (req, res) => {
  res.send(`💻 API documentation available at <a href="https://seahorse-app-wlact.ondigitalocean.app/api-docs">api-docs</a>`);
});

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Server running on port https://seahorse-app-wlact.ondigitalocean.app/`);
  console.log(`💻 API documentation available at https://seahorse-app-wlact.ondigitalocean.app/api-docs`);
});

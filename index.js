const app = require("./src/app");
const http = require("http").Server(app);
// const socketio = require('socket.io');
let server;

 
  server = http.listen(8080, () => {
    console.log(`Listening to port ${8080}`);
  });
const exitHandler = () => {
  if (server) {
    server.close(() => {
        console.log("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  console.log(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  if (server) {
    server.close();
  }
});

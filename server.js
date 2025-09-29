const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

// Middleware
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Routes
server.use(router);

// Export (Vercel لازم تستخدم module.exports)
module.exports = server;
const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

// Middlewares
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Example route
server.get("/hello", (req, res) => {
  res.json({ message: "Hello from Vercel JSON Server!" });
});

// Use default router
server.use(router);

// Listen on dynamic port for Vercel
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`JSON Server running on port ${port}`);
});
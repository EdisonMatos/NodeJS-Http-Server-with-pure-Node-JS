import { createServer } from "http";
import { users } from "./users.js";

const port = 8080;

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      "<h1>Server Runing.</h1><h2>To get the users list, go to localhost:8080/users</h2>"
    );
  }

  if (req.url === "/users") {
    users;
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () =>
  console.log(
    `Server runing at port ${port}. Acess http://localhost:8080 to check server status or http://localhost:8080/users to check the server users list.`
  )
);

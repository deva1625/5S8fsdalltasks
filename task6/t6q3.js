const http = require("http");
const url = require("url");


const server = http.createServer((req, res) => {
 
const parsedUrl = url.parse(req.url, true); 

const query = parsedUrl.query;
  if (query.name) {
    
    res.end(`Hello, ${query.name}!`);
  } else {
    res.writeHead(400);
    res.end(
      "Please provide a name in the query string. For example: /greet?name=John"
    );
  }
});
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

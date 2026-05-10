const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(3000);

// Response headers WITHOUT Helmet:
// HTTP/1.1 200 OK
// X-Powered-By: Express       ← reveals the framework
// Content-Type: application/json
// (no security headers at all)

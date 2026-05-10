const express = require("express");
const helmet = require("helmet"); // npm install helmet
const app = express();

// Register Helmet before all routes —> it modifies every response
app.use(helmet());

app.get("/", (req, res) => {
  res.json({ message: "Hello secured" });
});

app.listen(3000, () => {
  console.log("server is running");
});

// Response headers WITH Helmet:
// HTTP/1.1 200 OK
// Content-Security-Policy: default-src 'self'; ...
// Cross-Origin-Opener-Policy: same-origin
// Cross-Origin-Resource-Policy: same-origin
// Origin-Agent-Cluster: ?1
// Referrer-Policy: no-referrer
// Strict-Transport-Security: max-age=15552000; includeSubDomains
// X-Content-Type-Options: nosniff
// X-DNS-Prefetch-Control: off
// X-Download-Options: noopen
// X-Frame-Options: SAMEORIGIN
// X-Permitted-Cross-Domain-Policies: none
// X-XSS-Protection: 0
// (X-Powered-By has been removed)

const express = require("express");
const app = express();

//Define a route that responds to get requests
// app.get();
//Static Route
app.get("/", (req, res) => {
  res.send("Welcome");
});

//start server on specific Port
// app.listen();
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

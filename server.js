const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const distDir = __dirname + "/dist/";
app.use(express.static(distDir));


const server = app.listen(process.env.PORT || 8080, function () {
  const port = server.address().port;
  console.log("App now running on port", port);
});


function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.get("/api/pcs", (req, res) => {
  res.status(200).json({message: "here some more moremore dudes"})
});


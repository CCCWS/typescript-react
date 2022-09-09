const express = require("express");
const app = express();
const test = require("../Router/test");
const port = 3001;

app.use(express.json());
// express@4.1.6 이상 버전에서는 body-parser가 필요없음

app.use("/api/test", test);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

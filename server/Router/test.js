const express = require("express");
const router = express.Router();

router.post("/server", (req, res) => {
  console.log(req.body);
  if (req.body.id === 1) {
    return res.status(200).json({ success: true, id: 1 });
  }

  if (req.body.id === 2) {
    return res.status(200).json({ success: true, id: 2 });
  }
});

module.exports = router;

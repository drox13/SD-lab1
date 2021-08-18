const { Router } = require("express");
const getLogs = require("../controllers/monitor");


const router = Router();

router.get('/home', getLogs);

module.exports = router;
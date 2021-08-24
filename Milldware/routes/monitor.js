const { Router } = require('express');
// const getLogs = require('../controllers/monitor');
// const getStatus = require('../controllers/monitor');
const { getStatus, getLogs } = require('../controllers/monitor');

const router = Router();

router.get('/', getLogs);

router.get('/status', getStatus);

module.exports = router;

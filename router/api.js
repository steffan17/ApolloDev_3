const express = require('express')
const router = express.Router();
const api = require(`./actions`)

router.get('/api/', (req, res)=>{res.send('TestFunk')});
router.get('/api/test', api.testFunc)
router.get('/api/freeSQL', api.freeSQL)
router.get('/api/getTables', api.getTables)
router.get('/api/pico', api.pico)


module.exports = router; 
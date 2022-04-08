const { mqttConnectionCheck, simulatorStart } = require('../middlewares/mqtt-util')
const express = require('express')
const router = express.Router()

router.get('/', mqttConnectionCheck, (req, res, next) => {
  try {
    res.send("MQTT Connection Succeed! simulator 1: temperature, humidity")
  } catch(err) {
    next(err)
  }
})
router.post('/start', simulatorStart, (req, res, next) => {//simulatorStart 이게 미들웨어 
  try {
    res.send("MQTT Start!")
  } catch (err) {
    next(err)  // 넥스트 있으니까 미들웨어 판단 
  }
})

module.exports = router
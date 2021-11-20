const express = require('express');
const realizar_reserva = require('../controller/realizar_reserva');
const router = express.Router();

router.get('/', realizar_reserva.step1)

router.get('/step2', realizar_reserva.step2)

router.get('/step3', realizar_reserva.step3)

router.post('/step4', realizar_reserva.step4)

router.get('/passageiros', realizar_reserva.passageiros)

module.exports = router;
/*
*Ruta: /api/usuarios
*/

const { Router } = require('express');
const {getUsuarios} = require('../controllers/usuario')


const router = Router();

router.get( '/', getUsuarios);


module.exports = router;
const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test, registerUser, loginUser, getProfile, getUsers, getContacts, getAgents} = require('../controller/authController');

router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:5173'
    })
)

router.get('/', test);
router.post('/register', registerUser);
router.post('/loginUser', loginUser);
router.get('/profile', getProfile);
router.get('/contacts', getContacts);
router.get('/users', getUsers);
router.get('/agents', getAgents);
// router.get('/logout', logoutUser)

module.exports = router;
    
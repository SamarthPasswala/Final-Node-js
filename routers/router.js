const { Router } = require("express");
const { indexPage, insertData, viewPage, addPage, editData, deleteData, editPage, signupPage, login, logout, getData, signup, loginPage } = require("../controller/control");
const upload = require("../middleware/extension");
const userAuth = require("../middleware/userAuth");

const router = Router()

router.get('/', userAuth, indexPage)
router.get('/view', viewPage)
router.get('/add', addPage)
router.get('/edit', editPage)
router.post('/insertData', upload, insertData)
router.get('/editData/:id', editData)
router.get('/deleteData/:id', deleteData)

module.exports = router
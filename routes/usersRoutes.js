const express = require("express")
const { allUsers, singleUser, createUsers, updateUsers, deleteUsers } = require("../controls/userControls")
const router = express.Router()


router.get("/user", allUsers)
router.get("/user/:id", singleUser)
router.post("/user", createUsers)
router.put("/user/:id", updateUsers)
router.delete("/user/:id", deleteUsers)

module.exports = router
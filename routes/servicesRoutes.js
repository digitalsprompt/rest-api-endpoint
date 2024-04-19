const express = require("express")
const { allServices, singleService, createService, updateServices, deleteServices } = require("../controls/servicesControls")
const router = express.Router()


router.get("/service", allServices)
router.get("/service/:id", singleService)
router.post("/service", createService)
router.put("/service/:id", updateServices)
router.delete("/service/:id", deleteServices)


module.exports = router
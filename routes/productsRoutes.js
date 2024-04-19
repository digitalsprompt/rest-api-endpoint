const express = require("express")
const { allProducts, singleProducts, createProducts, updateProducts, deleteProducts } = require("../controls/productControls")
const router = express.Router()



router.get("/products", allProducts)
router.get("/products/:id", singleProducts)
router.post("/products", createProducts)
router.put("/products/:id", updateProducts)
router.delete("/products/:id", deleteProducts)


module.exports = router
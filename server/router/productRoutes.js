const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const upload = require("../middlewares/upload");

router.post("/add", upload.array("images", 5), productController.createProduct);
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getSingleProduct);
router.put("/:id", upload.single("images"), productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;

const express = require("express");
const {
  placeOrder,
  getAllOrders,
  deleteOrder,
  
} = require("../controllers/orderController");

const router = express.Router();

router.post("/place", placeOrder);
router.get("/all", getAllOrders);
router.delete("/:id", deleteOrder);


module.exports = router;

const express = require("express");
const {
  placeOrder,
  getAllOrders,
  deleteOrder,
  updateOrderStatus,
} = require("../controllers/orderController");

const router = express.Router();

router.post("/place", placeOrder);
router.get("/all", getAllOrders);
router.delete("/:id", deleteOrder);


module.exports = router;

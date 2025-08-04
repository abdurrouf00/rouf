const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  paymentMethod: String,
  items: [
    {
      productId: mongoose.Schema.Types.ObjectId,
      name: String,
      price: Number,
      image: String,
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);

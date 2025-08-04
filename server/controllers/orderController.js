const Order = require("../model/order");

exports.createOrder = async (req, res) => {
  try {
    const { name, address, phone, paymentMethod, cartItems } = req.body;
    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }
    const newOrder = new Order({
      name,
      address,
      phone,
      paymentMethod,
      items: cartItems.map(item => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        image: item.images && item.images[0] ? item.images[0] : "",
      })),
    });
    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully!" });
  } catch (err) {
    console.error("Order Error:", err);
    res.status(500).json({ error: "Failed to place order." });
  }
};

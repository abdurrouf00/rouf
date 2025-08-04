const Product = require("../model/product");
const fs = require("fs");
const path = require("path");

// ✅ Create Product
exports.createProduct = async (req, res) => {
  try {
    const { name, type, category, price, description } = req.body;
    const imagePaths = req.files.map(file => file.filename);

    const newProduct = new Product({
      name,
      type,
      category,
      price,
      description,
      images: imagePaths,
    });

    await newProduct.save();
    res.status(201).json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    console.error("Create product error:", error);
    res.status(500).json({ message: "Failed to create product", error: error.message });
  }
};

// ✅ Get All Products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

// ✅ Get Single Product
exports.getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch product" });
  }
};

// ✅ Update Product
exports.updateProduct = async (req, res) => {
  try {
    const { name, type, category, price, description } = req.body;
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (req.file) {
      product.images.forEach((img) => {
        const filePath = path.join(__dirname, "../uploads", img);
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      });
      product.images = [req.file.filename];
    }

    product.name = name;
    product.type = type;
    product.category = category;
    product.price = price;
    product.description = description;

    await product.save();
    res.status(200).json({ message: "Product updated", product });
  } catch (error) {
    console.error("Update product error:", error);
    res.status(500).json({ message: "Failed to update product", error: error.message });
  }
};

// ✅ Delete Product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    product.images.forEach((img) => {
      const filePath = path.join(__dirname, "../uploads", img);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    });

    await product.deleteOne();
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product" });
  }
};

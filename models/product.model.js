const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: { type: String, required: [true, "Product name is required"] },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    image: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
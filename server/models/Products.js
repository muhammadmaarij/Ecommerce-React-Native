import mongoose from "mongoose";

const ProductsSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  picture: {
    type: String,
  },
});

export default mongoose.model("Products", ProductsSchema);

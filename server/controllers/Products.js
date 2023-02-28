import Products from "../models/Products.js";

export const addProducts = async (req, res) => {
  const { name, price, picture } = req.body;
  console.log(req.body);
  try {
    // const oldProduct = await Products.findOne({ name });
    // if (oldProduct) {
    //   return res.status(400).json({ message: "Product already in exists" });
    // }
    const result = await Products.create({
      name,
      price,
      picture,
    });
  } catch (error) {
    console.log(`error ${error}`);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const viewProducts = async (req, res) => {
  try {
    const allProducts = await Products.find({});

    res.status(200).json(allProducts);
  } catch (error) {
    console.log(`error ${error}`);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteProducts = async (req, res) => {
  const { _id } = req.body;
  console.log(req.body);
  try {
    const oldProduct = await Products.findOne({ _id });
    if (oldProduct) {
      const result = await Products.deleteOne({ oldProduct });
    }
    res.status(200).json(oldProduct);
  } catch (error) {
    console.log(`error ${error}`);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// export const searchProducts = async (req, res) => {
//   const { _id } = req.body;
//   console.log(req.body);
//   try {
//     const oldProduct = await Products.findOne({ _id });
//     // if (oldProduct) {
//     //   const result = await Products.update({
//     //     name,
//     //     price,
//     //     picture,
//     //   });
//     // }
//     res.status(200).json(oldProduct);
//   } catch (error) {
//     console.log(`error ${error}`);
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };

export const viewProductsById = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  try {
    const oneProduct = await Products.findById(id);
    res.status(200).json(oneProduct);
  } catch (error) {
    console.log(`error ${error}`);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateProducts = async (req, res) => {
  try {
    const _id = req.body;
    console.log(req.body);

    const product = await Products.findByIdAndUpdate(_id, req.body, {
      new: true,
    });

    console.log(product);
    res.status(200).json(product);
  } catch (error) {
    console.log(`error ${error}`);
    res.status(500).json({ message: "Something went wrong" });
  }
};
// export const updateProducts = async (req, res) => {
//   const {name, price, picture } = req.body;
//   console.log(req.body);
//   try {
//     const oldProduct = await Products.findOne({ _id });
//     if (oldProduct) {
//       const result = await Products.update({
//         name,
//         price,
//         picture,
//       });
//     }
//     res.status(200).json(oldProduct);
//   } catch (error) {
//     console.log(`error ${error}`);
//     res.status(500).json({ message: "Something went wrong" });
//   }
// };

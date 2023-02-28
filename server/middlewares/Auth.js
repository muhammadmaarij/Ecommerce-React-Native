import jwt from "jsonwebtoken";

export const Auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split("")[1];

    let decode = jwt.verify(token, process.env.SECRET);

    if (token) {
      decode = jwt.verify(token, process.env.SECRET);
      req.userId = decode?.id;
    }
    if (!req.userId) {
      return res.status(401).json({
        message: "Unauthenticated",
      });
    }
    next();
  } catch (error) {
    console.log(`Error ${error}`);
  }
};

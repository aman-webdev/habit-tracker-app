import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  console.log("in auth");
  try {
    const token = req.headers.authorization?.split(" ")[1];
    console.log(token);
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "habit");
      console.log(decodedData);
      req.userId = decodedData?.id;
      console.log("first");
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }
    console.log("first", req.userId);

    next();
  } catch (e) {}
};

export default auth;

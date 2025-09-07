import { HTTPSTATUS } from "../config/http.config.js";

export const errorHandler = (err, req, res, next) => {
  console.log("error occured on path:", req.path);

  if (err) {
    console.log(err.statusCode)
    return  res.status(err.statusCode).json({ message: err.message, errorCode: err.errorCode });
  }
  return res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({
    message: "Internal server error",
    error: err?.message || "Unknown error occured",
  });
};

import connectDb from "./db/index.js";
import dotenv from "dotenv";
import {app} from './app.js'

dotenv.config({
  path: './env'
})




connectDb()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port : ${process.env.PORT}`);
    });

  })

  .catch((err) => {
    console.log("MONGODB CONNECTION FAILED !!! ", err);

  })

  app.on("error", (err) => {
  console.log("error", err);
  throw err
})
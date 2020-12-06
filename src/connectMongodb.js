import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

if (process.env.NODE_ENV === "development") {
  mongoose.set("debug", true);
}
const MONGO_URL ="mongodb+srv://root:root@prasanna.fjp2t.mongodb.net/<dbname>?retryWrites=true&w=majority";
const createDatabaseConn = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to DataBase");
  } catch (e) {
    throw new Error("Coundn't connect to Database");
  }
};

export default createDatabaseConn;

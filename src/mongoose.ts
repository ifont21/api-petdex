import mongoose from "mongoose";

const connectionStr = "[CONNECTION_STRING]";

mongoose
  .connect(connectionStr, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((error) => console.error(error));

const db = mongoose.connection;

db.once("open", () => {
  console.log("We are connected now...");
});

export default mongoose;

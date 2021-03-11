import mongoose from "../../mongoose";

const { Schema } = mongoose;

const petSchema = new Schema({
  name: String,
  key: String,
  etimology: String,
  history: String,
  features: String,
  temperament: String,
  mortaility: String,
  caring: String,
  feeding: String,
  picture: String,
});

const Pet = mongoose.model("Pet", petSchema);

export default Pet;

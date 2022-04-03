const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mongoWithNode")
  .then(() => {
    console.log("Connected Succesfully with the mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const schema = new mongoose.Schema({
  name: String,
  rollnbr: Number,
  enrolled: Boolean,
});

const collection = new mongoose.model("studentData", schema);

const adder = async () => {
  const insertData = new collection({
    name: "Avinash Kumar",
    rollnbr: 17,
    enrolled: true,
  });
  await insertData.save();
};

const finder = async () => {
  const findData = await collection.find();
  console.log(findData);
};

const findParticularData = async () => {
  const findparData = await collection.find({ name: { $eq:17 } });

  console.log(findparData);
};
// adder();
// finder();

findParticularData();

const express = require("express");
const cors = require("cors");
const UserCollection = require("./config"); // Pastikan path ini benar
const { addDoc } = require("firebase/firestore");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/create", async (req, res) => {
  const data = req.body;

  try {
    // Tambahkan data pengguna ke Firestore
    const docRef = await addDoc(UserCollection, data);
    res.status(201).send({ msg: "User added", id: docRef.id });
  } catch (error) {
    console.error("Error adding user: ", error);
    res.status(500).send({ error: "Error adding user" });
  }
});

app.listen(4000, () => console.log("Up & Running on port 4000"));

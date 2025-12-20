require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

/* =========================
   MongoDB Connection
========================= */
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB error:", err));

/* =========================
   Schema & Model
   (people.json ke mutabiq)
========================= */
const personSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  phone: String,
  company: String,
  country: String,
  purpose: String
});

const Person = mongoose.model("Person", personSchema);

/* =========================
   Routes
========================= */

// Test route
app.get("/", (req, res) => {
  res.send("Node API is running successfully");
});

// GET all people
app.get("/people", async (req, res) => {
  const people = await Person.find();
  res.send(people);
});

// GET single person by id
app.get("/person/:id", async (req, res) => {
  const person = await Person.findOne({ id: req.params.id });

  if (!person) {
    return res.status(404).send({ message: "Person not found" });
  }

  res.send(person);
});

// POST new person
app.post("/person", async (req, res) => {
  const newPerson = await Person.create(req.body);
  res.status(201).send({
    message: "New person added",
    person: newPerson
  });
});

/* =========================
   Start Server
========================= */
app.listen(PORT, () => {
  console.log("Server chal raha hai on http://localhost:" + PORT);
});

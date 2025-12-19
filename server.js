
const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;


app.use(express.json());


app.get("/people", (req, res) => {
  let data = fs.readFileSync("people.json"); 
  let people = JSON.parse(data); 
  res.send(people); 
});


app.get("/person/:id", (req, res) => {
  let data = fs.readFileSync("people.json");
  let people = JSON.parse(data);

  let person = people.find(p => p.id === req.params.id);

  if (!person) {
    return res.status(404).send({ message: "Person not found" });
  }

  res.send(person);
});


app.post("/person", (req, res) => {
  let data = fs.readFileSync("people.json");
  let people = JSON.parse(data);

  let newPerson = req.body; 
  people.push(newPerson); 

  fs.writeFileSync("people.json", JSON.stringify(people, null, 2)); 

  res.status(201).send({ message: "New person added", person: newPerson });
});


app.listen(PORT, () => {
  console.log("Server chal raha hai on http://localhost:" + PORT);
});

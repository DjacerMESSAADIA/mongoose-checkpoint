const connectDB = require('./config/database');
const personController = require('./controllers/personController');

// Connect to database
connectDB();

// Example usage
async function exec_checkpoint_methods() {
  try {
    // Create a person
    const person = await personController.createPerson({
      name: "John Doe",
      age: 25,
      favoriteFoods: ["pizza", "pasta"]
    });

    // Create many people
    const manyPeople = await personController.createManyPeople([
      { name: "Mary", age: 27, favoriteFoods: ["burrito"] },
      { name: "Jane", age: 29, favoriteFoods: ["burrito", "tacos"] }
    ]);

    // Find people by name
    const maryPeople = await personController.findPeopleByName("Mary");

    // Chain search for burrito lovers
    const burritoLovers = await personController.searchBurritos();
    console.log("Burrito lovers:", burritoLovers);

  } catch (err) {
    console.error("Error:", err);
  }
}

exec_checkpoint_methods(); 
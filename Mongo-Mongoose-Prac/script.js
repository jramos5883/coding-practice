const mongoose = require('mongoose');
const User = require("./User")


mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost/testDB");

run()
async function run() {
    const user = await User.create({ 
        name: 'Kyle', 
        age: 26,
        hobbies: ['Weight Lifting', 'Bowling'],
        address: {
            street: 'Main st.',
        }
    })


    console.log(user)
}



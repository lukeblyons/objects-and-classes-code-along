const person = {
    first: 'Luke',
    last: 'Lyons',
    age: 24
}
// dot notation
console.log(person.first);
// bracket notation
console.log(person['last']);


const meal = {
    appetizer: 'chips and salsa',
    entree: 'fajitas',
    dessert: 'butter cake',
    drink: 'lemonade'
};

const meal2 = {
    appetizer: 'salad',
    entree: 'steak',
    dessert: 'pie',
    drink: 'water'
};

let {appetizer, entree, dessert, drink} = meal
console.log(entree + ' with ' + drink)

let newFavDrink = 'Water';
meal.drink = newFavDrink;

// rename and restructer
const {drink: drink2, appetizer: appetizer2, dessert: dessert2, entree: entree2} = meal2;

// loop over meal2
// if the key dessert update value to be churros and print to console else print the value

for(let key in meal2) {
    if(key === 'dessert'){
        meal2[key] = 'churros'
        console.log(meal2[key])
    } else {
        console.log(key)
    }
}

let teams = {
    teamOne: ['ryan', 'alex', 'wyatt', 'tj'],
    teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
    teamThree: ['porter', 'blake', 'june', 'owen'],
    teamFour: ['brian', 'riley', 'ezra', 'jordan'],
    teamFive: ['grey', 'milo', 'mckay', 'leo']
  }
  teams.teamSix = ['Luke', 'Rex', 'Crew', 'Nate'];

  //remove team 4
delete teams.teamFour;
console.log(teams);
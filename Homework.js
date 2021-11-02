// Chapter 06: Create your first objects


//Modeling a bank account
//Write a program that creates an account object with the following characteristics:
//A name property set to "Alex".
//A balance property set to 0.
// A credit method adding the (positive or negative) value passed as an argument to the account balance.
// A describe method returning the account description.
// Use this object to show its description, crediting 250, debiting 80, then show its description again.

const account = {
	name: 'Alex',
	balance: 0,

	credit(value) {
		this.balance += value;
	},

	describe() {
    return `owner: ${this.name}, balance: ${this.balance}`;
  }
};

console.log(account.describe());
account.credit(250);
account.credit(-80);
console.log(account.describe());


// Adding character experience
// Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.

const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
  xp: 0,

  // Return the character description
  describe() {
    return `${this.name} has ${this.health} health points, ${this
      .strength} as strength and ${this.xp} XP points`;
  }
};

aurora.health -= 20;
aurora.strength += 10;
aurora.xp += 15;
console.log(aurora.describe());


// Modeling a dog
// Complete the following program to add the dog object definition.

const dog = {
	name: 'Fang',
	species: 'boarhound',
	size: 75,

	bark() {
		return "Grrr! Grrr!";
	}
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


//Chapter 07: Store data in arrays


// Musketeers
// Write a program that:
// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
// Shows each array element using a for loop.
// Adds the "D'Artagnan" value to the array.
// Shows each array element using the forEach() method.
// Remove poor Aramis.
// Shows each array element using a for-of loop.

const musketeers = ["Athos", "Porthos", "Aramis"];

for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}

musketeers.push("D'Artagnan");

musketeers.forEach(musketeer => {
  console.log(musketeer);
});

musketeers.splice(2, 1);

for (const musketeer of musketeers) {
  console.log(musketeer);
}


//Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
// const values = [3, 11, 7, 2, 9, 10];

const values = [3, 11, 7, 2, 9, 10];
let sum = 0;

for (let i = 0; i < values.length; i++) {
  sum += values[i];
}

console.log(sum);


//Chapter 08: Work with strings


//Word info
//Write a program that asks you for a word then shows its length, lowercase, and uppercase values.

const word = prompt("word:");

console.log(`length: ${word.length}`);
console.log(`Lowercase: ${word.toLowerCase()}`);
console.log(`Uppercase: ${word.toUpperCase()}`);


// Vowel count
// Improve the previous program so that it also shows the number of vowels inside the word.

const word = prompt("word:");

console.log(`length: ${word.length}`);
console.log(`Lowercase: ${word.toLowerCase()}`);
console.log(`Uppercase: ${word.toUpperCase()}`);

let vowel = 0;

for (let i = 0; i < word.length; i++) {
  const lowercaseletter = word[i].toLowerCase();
  if (lowercaseletter === "a" || lowercaseletter === "e" || lowercaseletter === "i" || lowercaseletter === "o" || lowercaseletter === "u" || lowercaseletter === "y" ){
  	vowel++;
  }
}

console.log(`number of vowels: ${vowel}`);

const prices = [10, 20, 30, 40];

let sum = 0;
for (let i = 0; i < prices.length; i++) {
    // console.log(prices[i]);
    sum = sum + prices[i];
}
console.log("Total: " + sum);

const totalSum = prices.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; //0+10=10 ==>10+20=30 ==>30+30=60 ==> 60+40=100
},0);

console.log(totalSum); // Output: 100


//======================================================
const pets = [
  { name: 'Max', type: 'dog' },
  { name: 'Luna', type: 'cat' },
  { name: 'Buddy', type: 'dog' }
];

const groupedPets = pets.reduce((accumulator, currentPet) => {
  const type = currentPet.type;
  
  // If the group doesn't exist yet, create an empty array
  if (!accumulator[type]) {
    accumulator[type] = [];
  }

    // if(accumulator["dog"] == currentPet.type) accumulator["dog"].push(currentPet.name);
    // if(accumulator["cat"] == currentPet.type) accumulator["cat"].push(currentPet.name);
    // if(accumulator["dog"] == currentPet.type) accumulator["dog"].push(currentPet.name);
    // if(accumulator["cat"] == currentPet.type) accumulator["cat"].push(currentPet.name);
  
  // Push the pet into its respective group array
  accumulator[type].push(currentPet.name);
  
  return accumulator;
}, {}); // Initialized as an empty object

console.log(groupedPets);
// Output: { dog: ['Max', 'Buddy'], cat: ['Luna'] }





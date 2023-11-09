let heroes = ['ram','lakshman','hanuman']
let villians = ['ravana','meghnath','kumbhkarna']
// heroes.push( ['ravana','meghnath','kumbhkarna'])
// console.log(heroes);
//output
/**
  [
  'ram',
  'lakshman',
  'hanuman',
  [ 'ravana', 'meghnath', 'kumbhkarna' ]
]
we want a single array including all this
 */
//way 1
let heroesAndVillians = heroes.concat(['ravana','meghnath','kumbhkarna'])
console.log(heroesAndVillians);
//way 2

heroesAndVillians = [...heroes,...villians]
console.log(heroesAndVillians);
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const another_array=[1,2,3,[4,5,6],7,[4,[23,23,23,2],5]]
const realAnotherArray=another_array.flat(Infinity)
console.log(realAnotherArray);

console.log(Array.isArray("deepanshu"));
//convert data into array
console.log(Array.from("Deepanshu"));
console.log(Array.from({name:"deepanshu"}));//interesting
let score1=100
let score2=100
let score3=100
console.log(Array.of(score1,score2,score3));
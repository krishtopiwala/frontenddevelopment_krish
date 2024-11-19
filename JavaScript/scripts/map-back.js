// Difference between null, undefined, NaN

let a = null;
let b;

// console.log(a == b);
// console.log(a === b);
// console.log(10 + '10');
// console.log(typeof('10' + 12));
// console.log("20" * 10);
// console.log(typeof(10 * "50"));
// console.log('smit' * 5);

// Map Object

const map = new Map();

console.log(map);

map.set("item1", 20);
map.set("item2", 10);
map.set("item3", 30);

console.log(map);

console.log(map.get('item2'));

console.log(map.has("item1"));

const iterator = map.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);

// console.log(map.clear());
// console.log(map);

console.log(map.delete("item2"));
console.log(map);

const keyIterator = map.keys();
// console.log(keyIterator.next().value);
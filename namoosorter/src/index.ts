import CharactersCollection from "./CharactersCollection";
import CustomerCollection from "./CustomerCollection";
import NamooSorter from "./NamooSorter";
import NumbersCollection from "./NumbersCollection";
import { Customer } from "./Customer";

let numCollection = new NumbersCollection([10, -7, 55, 3, 21]);
let charCollection = new CharactersCollection('TypeScript');
let customerCollection = new CustomerCollection([
    new Customer('A111', 'Kim'),
    new Customer('B111', 'Park'),
    new Customer('C111', 'Andy'),
])

let sorter1 = new NamooSorter(numCollection);
let sorter2 = new NamooSorter(charCollection);
let sorter3 = new NamooSorter(customerCollection);

sorter1.sort();
console.log(sorter1.getCollection);
console.log("===================================================");
sorter2.sort();
console.log(sorter2.getCollection);
console.log("===================================================");
sorter3.sort();
sorter3.printCollection();
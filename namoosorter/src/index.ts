import NamooSorter from "./NamooSorter";
import NumbersCollection from "./NumbersCollection";

let numCollection = new NumbersCollection([10, -7, 55, 3, 21]);

let sorter = new NamooSorter(numCollection);
sorter.sort();
console.log(sorter.getCollection);
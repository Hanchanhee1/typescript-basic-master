"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = __importDefault(require("./CharactersCollection"));
const CustomerCollection_1 = __importDefault(require("./CustomerCollection"));
const NamooSorter_1 = __importDefault(require("./NamooSorter"));
const NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
const Customer_1 = require("./Customer");
let numCollection = new NumbersCollection_1.default([10, -7, 55, 3, 21]);
let charCollection = new CharactersCollection_1.default('TypeScript');
let customerCollection = new CustomerCollection_1.default([
    new Customer_1.Customer('A111', 'Kim'),
    new Customer_1.Customer('B111', 'Park'),
    new Customer_1.Customer('C111', 'Andy'),
]);
let sorter1 = new NamooSorter_1.default(numCollection);
let sorter2 = new NamooSorter_1.default(charCollection);
let sorter3 = new NamooSorter_1.default(customerCollection);
sorter1.sort();
console.log(sorter1.getCollection);
console.log("===================================================");
sorter2.sort();
console.log(sorter2.getCollection);
console.log("===================================================");
sorter3.sort();
sorter3.printCollection();

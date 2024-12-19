"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NamooSorter_1 = __importDefault(require("./NamooSorter"));
const NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
let numCollection = new NumbersCollection_1.default([10, -7, 55, 3, 21]);
let sorter = new NamooSorter_1.default(numCollection);
sorter.sort();
console.log(sorter.getCollection);

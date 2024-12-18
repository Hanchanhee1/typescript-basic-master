"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NamooSorter_1 = __importDefault(require("./NamooSorter"));
let sorter = new NamooSorter_1.default([10, -7, 22, 3, 15]);
console.log(sorter.sort());
sorter = new NamooSorter_1.default('TypeScript');
console.log(sorter.sort());
// let data : string | number[];
// function isString(data: string | number[]): data is string {
//     return( <string>data ).split !== undefined;
// }
// if(typeof data === 'string') {
// }
// data = 'TypeScript';
// if(isString(data)) {
//     data.split('');
// }else {
//     // number[]
// }

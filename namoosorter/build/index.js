"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NamooSorter_1 = __importDefault(require("./NamooSorter"));
const sorter = new NamooSorter_1.default([10, -7, 22, 3, 15]);
console.log(sorter.sort());

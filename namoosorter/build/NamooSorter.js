"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NamooSorter {
    constructor(collection) {
        this.collection = collection;
    }
    get getCollection() {
        return this.collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    }
    printCollection() {
        console.log(this.collection);
    }
}
exports.default = NamooSorter;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NamooSorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (typeof this.collection === 'string') {
                    if (this.collection[j].toLowerCase() > this.collection[j + 1].toLowerCase()) {
                        const characters = this.collection.split('');
                        const temp = characters[j];
                        characters[j] = characters[j + 1];
                        characters[j + 1] = temp;
                        this.collection = characters.join('');
                    }
                }
                else {
                    if (this.collection[j] > this.collection[j + 1]) {
                        //swap
                        const temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
            }
        }
        return this.collection;
    }
}
exports.default = NamooSorter;

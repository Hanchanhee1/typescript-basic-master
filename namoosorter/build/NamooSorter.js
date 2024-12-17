"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NamooSorter {
    constructor(numbers) {
        this.numbers = numbers;
    }
    sort() {
        const { length } = this.numbers;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.numbers[j] > this.numbers[j + 1]) {
                    //swap
                    const temp = this.numbers[j];
                    this.numbers[j] = this.numbers[j + 1];
                    this.numbers[j + 1] = temp;
                }
            }
        }
        return this.numbers;
    }
}
exports.default = NamooSorter;
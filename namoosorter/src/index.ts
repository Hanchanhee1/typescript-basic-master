import NamooSorter from "./NamooSorter";

const sorter = new NamooSorter([10, -7, 22, 3, 15]);
console.log(sorter.sort());

// const sorterStr = new NamooSorter('TypeScript');
// console.log(sorter.sort());

let data : string | number[];

function isString(data: string | number[]): data is string {
    return( <string>data ).split !== undefined;
}

if(typeof data === 'string') {

}

data = 'TypeScript';
if(isString(data)) {
    data.split('');
}else {
    // number[]
}
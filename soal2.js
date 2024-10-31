"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrapInArray(item) {
    return [item];
}
console.log(wrapInArray(5));
console.log(wrapInArray("hello"));
console.log(wrapInArray(true));
console.log(wrapInArray({ name: "Andi", age: 24 }));

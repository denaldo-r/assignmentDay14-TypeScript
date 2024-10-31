"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = { firstName: "Taufik", lastName: "Hidayat" };
console.log(getFullName(person));

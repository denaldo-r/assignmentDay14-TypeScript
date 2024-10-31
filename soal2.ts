function wrapInArray<T>(item: T): T[] {
    return [item];
  }
  
console.log(wrapInArray(5));
console.log(wrapInArray("hello"));
console.log(wrapInArray(true));
console.log(wrapInArray({ name: "Andi", age: 24 }));

  export{};
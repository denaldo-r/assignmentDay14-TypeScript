type Person = {
    firstName: string;
    lastName: string;
  };
  
  function getFullName(person: Person): string {
    return `${person.firstName} ${person.lastName}`;
  }
  
  const person: Person = { firstName: "Taufik", lastName: "Hidayat" };
  console.log(getFullName(person));

  export{};
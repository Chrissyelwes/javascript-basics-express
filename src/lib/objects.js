const createPerson = (name, age) => {
  return { name, age };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  if (person.age > 65 ) {
    return true;
  } else {
     return false;
  } 
  // try shorten this bit without if statement
};

const getAges = people => {
  return people.map(people => people.age);
};

const findByName = (name, people) => {
  return people.find(x => x.name === name );
};

const findHondas = cars => {
  return cars.filter(company => company.manufacturer === 'Honda');
};

const averageAge = people => {
  return people.reduce((acc, curr) => acc + curr.age, 0) / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: person => {
      return `Hi ${person}, my name is ${name} and I am ${age}!`
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};

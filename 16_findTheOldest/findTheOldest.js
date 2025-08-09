const findTheOldest = function(people) {
  return people.reduce((oldest, person) => {
    const currentYear = new Date().getFullYear();
    const deathYear = person.yearOfDeath || currentYear; 

    const age = deathYear - person.yearOfBirth;
    
    if (!oldest || age > oldest.age) {
      return { ...person, age };
    } else {
      return oldest;
    }
  }, {});
};

// Do not edit below this line
module.exports = findTheOldest;

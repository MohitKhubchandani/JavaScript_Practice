// Older Than Me

// Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

// {other person name} is {older than / younger than / the same age as} me.

// Examples

// p1 = Person("Samuel", 24)
// p2 = Person("Joel", 36)
// p3 = Person("Lily", 24)

// p1.compareAge(p2) ➞ "Joel is older than me."

// p2.compareAge(p1) ➞ "Samuel is younger than me."

// p1.compareAge(p3) ➞ "Lily is the same age as me."

class Person{constructor(Name , Age) {
    this.Name = Name;
    this.Age = Age;
}
 compareAge(Age){
if (this.Age < Age.Age) {
    console.log(`${Age.Name} is older than me.`);
}
else if(this.Age > Age.Age){
    console.log(`${Age.Name} is younger than me.`);
}
else{
    console.log(`${Age.Name} is the same age as me.`);
}
}
}

const p1 = new Person("Samuel", 24)
const p2 = new Person("Joel", 36)
const p3 = new Person("Lily", 24)

p1.compareAge(p2); // Output :- Joel is older than me.
p2.compareAge(p1); // Output :- Samuel is younger than me.
p1.compareAge(p3); // Output :- Lily is the same age as me.



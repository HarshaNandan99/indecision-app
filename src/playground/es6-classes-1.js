 
 class Person {
     constructor(name = 'Anonymous', age = 0) {
         this.name = name;
         this.age = age;
     }
     getGreeting() {
         //return 'Hi. I am ' + this.name + '!';

         return `hi, I am ${this.name}!`;
     }
     getDescription() {
         return `${this.name} is ${this.age} years(s) old.`;
     }
 }

 class Student extends Person {
    
     hasMajor() {
         return !!this.major;
     }
     getDescription() {
         let description = super.getDescription();

         if (this.hasMajor()){
             description += `Their major is ${this.major}.`;
         }
         return description;
     }

 }

 class Traveler extends Person {
     constructor(name, age, homeLocation) {
         super(name, age);
         this.homeLocation = homeLocation;
     }
     getGreeting() {
         let greeting = super.getGreeting();
         if(this.homeLocation) {
             greeting += `I am visiting from ${this.homeLocation}.`;
         }
         return greeting;
     }
 }

 const me = new Traveler ('Andrew Mead',26,'warangal');
 console.log(me.getGreeting());

 const other = new Traveler();

 console.log(other.getGreeting());
//arguments object -no longer bound with arrow functions

const add = (a,b) => {
    //console.log(arguments);
    return a + b;

};

console.log(add(55,1,1001));

//this keyword - no longer bound

const user = {
    name :'andrew',
    cities:['philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {

        return this.cities.map((city) => {
            return this.name + 'has lived in ' + city;
        });

      return cityMessages;

    }
};

console.log(user.printPlacesLived());


//challenge area

const multiplier = {
    numbers: [10,20,30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy) 

        
    }
    //numbers = array of numbers
    //multiplyBy - single number

    //multiply -return a new array where the number have been mltiplied
};

console.log (multiplier.multiply());  //[1,2,3] 2 [2,4,6]

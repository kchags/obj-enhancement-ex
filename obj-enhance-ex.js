function createInstructor (firstName, lastName) {
    return {
        firstName,
        lastName
    }
}

let favoriteNumber = 42;

let constructor = {
    firstName: "Kevin",
    [favoriteNumber]: "That is my favorite!"
}

const instructor = {
    firstName: "Kevin",
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + " says bye";
    }
}

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}
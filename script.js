class Animal {
    constructor(species) {
        this.species = species;
    }
    get _species() {
        return this.species;
    }
    makeSound(){
        if(this._species.toLowerCase() === 'dog'){
            this.bark();
        }else{
            this.purr();
        }
    }
}

class Dog extends Animal {
    bark(){
        console.log("woof");
    }
}

class Cat extends Animal {
    purr(){
        console.log("purr");
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;

class Animal {
    constructor(name, age, legs, species, status) {
        this.name = name;
        this.age = age;
        this.legs = legs;
        this.species = species;
        this.status = status;
    }
    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Shark extends Animal {
    constructor(name, age, status) {
      super();
      this.name = name;
      this.age = age;
      this.legs = 0;
      this.status = status;
      this.species = 'shark';
    }
  }

class Cat extends Animal {
    constructor(name, age, status) {
      super();
      this.name = name;
      this.age = age;
      this.legs = 4;
      this.status = status;
      this.species = 'cat';
    }

    introduce() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
    }
  }

  class Dog extends Animal {
    constructor(name, age, status,master='') {
      super();
      this.master = master;
      this.name = name;
      this.age = age;
      this.status = status;
      this.legs = 4;
      this.species = 'dog';
    }

    greetMaster() {
      return `Hello ${this.master}`;
    }
  }

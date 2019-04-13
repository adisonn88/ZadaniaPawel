// var dog = {
//     name: 'didi',
//     sound: 'wuf',
//     color: 'red',

//     bark:function(arg1, arg2){
//         console.log(this.name, arg1, arg2)
//     }
// }

// var car = {
//     model:'Scoda',
//     color: 'red',
//     age: 10,
//     name:'skodzinka',
// }

// var cat = {
//     name: 'plotka',
//     age:7,
//     sound:'miau',
// }


// var boundedFunction = dog.bark.bind(car);
// boundedFunction()

// var boundedFunction2 = dog.bark.bind(cat);
// boundedFunction2()


// dog.bark.call(cat);
// dog.bark.apply(cat);

// var animal = {
//     sayHello: function(){
//         return 'Hello' + this.name;
//     },



// var cat = Object.create(name, {
//     'id': {
//         value: 1213214,
//         enumerable: true
//     }
// },

// 'hidden': {
//     value: 'miau',
//     enumerable: false
// },
// };

// return [animal, animal.sayHello(), animal.hidden];

// let first = {name:'Jan'};
// let last = {lastName:'Muszynski'};
// let person = Object.assign(first, last)

// console.log(person);

// console.log(first);


// function Car(name, year) {
//     this.name = name;
//     this.year = '[' + year + ']';
// }


// var firstCar = new Car ("Scoda",1999);
// var secondCar = new Car ("Opel",2010);
// var thirdCar = new Car ("Toyota", 2005);

// let newCar = Object.assign(firstCar, secondCar);

// // console.log(firstCar);
// // console.log(secondCar);
// // console.log(thirdCar);
// console.log(newCar, );

// function Animal (name) {
//     this.type = "animal";
//     this.name = name;
// }

// Animal.prototype.eat = () => {
//     return "I eat food";
// }

// const animal = new Animal("Puszek");
// console.log(animal.eat());

// class Animal {
//     constructor(name) {
//         this.name = name;
//         this.type = 'animal';
//         console.log(this.name, this.type);
//     }

//     eat() {
//         return this.name + ' jem';
//     }

//     sleep(){
//         return this.name + ' spie';
//     }

// }

// class Bird extends Animal {
//     constructor(name) {
//         super(name);
//         this.type = 'bird';
//     }

//     eat() {
//         const text = super.eat();
//         return text + ' - exactly speed!';
//     }

//     fly() {
//         return 'I can fly';
//     }
// }

// // const animal = new Animal('Puszek');
// const bird = new Bird('Eugeniusz')

// // console.log[animal, animal.eat(), animal.sleep()];
// console.log([bird, bird.eat(), bird.sleep(), bird.fly()]);

class Brick {
    constructor (x, y, width, height, type) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      this.type = type
      this.graphic = 'default.png'
      this.live = 10
    }
    
    print() {
      return [this.x, this.y, this.width, this.height, this.type, this.graphic, this.live]
    }
    
    init () {
      return "Dodano na plansze"; 
    }
  }
  
  class BrickBlue extends Brick {
   constructor(x, y, width, height, type) {
     super(x, y, width, height, type);
     this.live = 100;
     this.graphic = 'blue.png'
   }
  }
  
  class BrickRed extends Brick {
   constructor(x, y, width, height, type) {
     super(x, y, width, height, type);
     this.live = 10;
     this.graphic = 'red.png'
   }
  }
  
  class BrickGreen extends Brick {
   constructor(x, y, width, height, type) {
     super(x, y, width, height, type);
     this.live = 20;
     this.graphic = 'green.png'
   }
  }
  
  
  class BrickAnim extends Brick {
   constructor(x, y, width, height, type, speed) {
     super(x, y, width, height, type);
     this.graphic = 'anim.png'
     this.speed = speed
   }
    
   moveHorizontal() {
     return `poruszam się poziomo z szybkością ${this.speed}`;
   }
  }
  
  const green = new BrickGreen(1,1, 100, 100, 'brick')
  const red = new BrickRed(2,2, 100, 100, 'brick')
  const blue = new BrickBlue(3,3, 100, 100, 'brick')
  const animBrick = new BrickAnim(100,100, 100, 100, 'anim', 300);
  
  return [
    [green.init(), red.init(), blue.init()],
    [green.print(), red.print(), blue.print()],
    animBrick, animBrick.moveHorizontal()
  ]



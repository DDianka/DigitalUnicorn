// Наследование: Задача 1.
class Animal{
    constructor(name) {
        this.name = name;
    }
}

class Rabbit extends Animal{
    constructor(name){
        super(name);   //не хватало супера и this.name нам больше не нужно
    }
}

const rabbit = new Rabbit('Alice');

console.log('rabbit name', rabbit.name);

// Задача 2.
class Clock {
    constructor({ template }) {							 														// constructor(settings) {
    	this.template = template;																				// let template = settings.template;
    }
    render() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);
        console.log(output);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}


class ExtendedClock extends Clock {
    constructor(settings) {
        super(settings);
        const frequency = settings.frequency || 1000;  // const { frequency = 1000} = settings;
        this.frequency = frequency;
    }
    start() {

        this.render();
        this.timer = setInterval(() => this.render(), this.frequency);
    }
}
let settings = {template:'h:m:s', frequency: 1000};
let extendedClock = new ExtendedClock(settings);
extendedClock.render();
console.log(extendedClock);

//  Задача 3
class Animal {
	constructor(name) {
		this.name = name;
	}
  getName() {
		return this.name;	
	}
}

class Cat extends Animal {
	constructor(name) {
  	super(name);
  }
	meow() {
  	console.log('Cat ' + this.name + ' is saying meow')
  }
}
let cat = new Cat('Garfield');
console.log(cat.getName());
cat.meow();

//Задача 4 
class User {
	constructor(name, surname) {
  	this.name = name;
    this.surname = surname;
  }
  getFullName() {
  return this.name + ' ' + this.surname;
  }
}

class Student extends User {
  constructor(name, surname, year) { 
    super(name, surname);
    this.year = year;
	}
	getCourse() {
		let date = new Date();
    let currentYear = date.getFullYear();
    let course = currentYear - this.year;
		
    if (course > 5) {
			return 'Универ окончен!';
		} 
   	return course;
	}
}
let student = new Student('NAME', 'SURNAME', 2019);
console.log(student.getCourse());
console.log(student.getFullName());

/* Прототипы: задача 1 
3 ответа: 1) true  2) null  3) undefined */

// Задача 2:  время поиска одинаковое
let head = {
    glasses: 1
};
let table = {
	pen: 3,
	__proto__: head
};
let bed = {
	sheet: 1,
    pillow: 2,
	__proto__: table
};
let pockets = {
	money: 2000,
	__proto__: bed
};
// Задача 3: при вызове rabbit.eat() св-во full получит rabbit т.к. this.full, где при вызове this = rabbit

//Задача 4
let hamster = {
    stomach: [],
    eat(food) {
        this.stomach.push(food);
    }
};
let speedy = {
    __proto__: hamster,
    stomach:  []
};
let lazy = {
    __proto__: hamster,
    stomach:  []
};
speedy.eat('apple');
alert(speedy.stomach);
alert(lazy.stomach);

//Конструкторы: Задача 1:

function A(number) {
	this.number = number;
}
function B(number) {
	this.number = number;
}
let a = new A;
let b = new B;
console.log(a == b); // false
// в этом случае сравниваются ссылки на объекты (a и b имеют различные ссылки ) 
//Есть вариант сделать их равными, если в коде добавить им возврат на один и тот же объект
const obj = {a: 1}
function A(number) {
    this.number = number;
    return obj;
}
function B(number) {
    this.number = number;
    return obj;
}
let a = new A;
let b = new B;
console.log(a == b); // true

//Задача 2

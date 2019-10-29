// в первом задании всё будет работать одинаково

// задача 2
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?'); }

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?'); }

// задача 3
    function min(a, b) {
        return (a < b) ? a : b
   }
// задача 4 
   let x = prompt('Enter x: ');
   let n = prompt('Enter n: ');
   function pow(x, n) {
    return (x ** n) 
}
alert(pow(x,n));

// задача 5 
let ask = (question, yes, no) => confirm(question) ? yes() : no(); 
ask (
    'Are you sure?',
    function() { alert('Yes, you are'); },
    function() { alert('You canceled'); }
    );

// задача 6 : оба счетчика независимы и второй покажет 0, 1.
    function makeCounter() { 
        let count = 0;
        return function() {
        return count++;
        }
        }
        let counter = makeCounter();
        let counter2 = makeCounter();
        alert(counter());
        alert(counter());
        alert(counter2());
        alert(counter2());

        // задача 7: работает
        function Counter() { 
            let count = 0;
            this.up = function() {
            return ++count;
            };
            this.down = function() {
                return --count;
            }
            }
            let counter = new Counter();
            alert(counter.up()); // 1 
            alert(counter.up()); // 2
            alert(counter.down()); // 1
      
// задача 8: Результать вызова последней функции Hello John; 
let phrase = 'Hello';
if (true) {
    let user = "John";
    function sayHi() {
        alert(`${phrase}, ${user}`);
	}
}
sayHi();
// задача 9: 
function sum(a) {
    return function(b) {
        return a + b;
    }
    }


 const sum = a => b => a + b

 // задача 10
 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 function inBetween(a, b) {
	return function(elem) {
		if (elem >= a && elem <= b) {
			return true;
		}
		return false;
	}
}
arr.filter(inBetween(3, 6))

function inArray(argument) {
	return function(elem) {
		return argument.includes(elem);
	}
}
arr.filter(inArray([1, 2, 56, 10]));

 // задача 11 
 let users = [
    {name: 'John', age: 20, surname: 'Johnson'},
     {name: 'Pete', age: 18, surname: 'Peterson'},
	 {name: 'Ann', age: 19, surname: 'Hathaway'},
];

function byField(fieldName) {
	return function(a, b) {
		if (a[fieldName] > b[fieldName]) {
			return 1;
		} else if (b[fieldName] > a[fieldName]) {
		   	return -1;	
		} 
		return 0;
	}
}

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));
console.log(users.sort(byField('surname')));
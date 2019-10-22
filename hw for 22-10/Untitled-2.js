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

        // задача 7: не работает из-за нейминга
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
            alert(counter.up());
            alert(counter.up());
            alert(counter.down());
          // VM53:1 Uncaught SyntaxError: Identifier 'counter' has already been declared  at <anonymous>:1:1
               
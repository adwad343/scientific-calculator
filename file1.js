


let x = document.getElementsByClassName("sign");

let input = document.getElementById("in");

let numbers = [];


let operator = [];
let map = new Map()
map.set("+", 1);
map.set("-", 1);
map.set("*", 2);
map.set("/", 2);


// make a function to add operators along with apropriate importance into the stack
function add(x) {// adding operators according to shunting yard algo
    if (operator.length == 0) {
        operator.push(x);
        return;
    }

    if (map.get(operator[operator.length - 1]) < map.get(x)) {
        operator.push(x);
        return;
    }
    while (map.get(operator[operator.length - 1]) <= map.get(x)) {
        let curr = operator.pop();
        numbers.push(curr);

    }
    operator.push(x);





}

function calculate(l, r, op) {
    switch (op) {

        case '+': return l + r;

        case '-': return l - r;

        case '*': return l * r;

        case '/':
            {
                if (r == 0) {
                    alert("cannot divide by zero");
                }
                return l / r;
            }

    }
}



let equals = document.getElementById("eq");
equals.onclick = () => {
    let equation = input.value;
    //console.log(typeof (equation));
    let n = 0;
    for (let i = 0; i < equation.length; i++) {
        let curr = equation[i];

        if (map.has(curr)) {
            numbers.push(n);
            n = 0;
            add(curr);

        }
        else {
            n = n * 10 + Number(curr);
        }


    }
    numbers.push(n);
    numbers.push(...operator);
    console.log(numbers);


    numbers.forEach(i => {
        console.log("i=", i, typeof (i));
    });

    // numbers is the shunt yard stack with correct operator precedence
    // console.log(operator);
    // console.log(numbers);
    let stack = []; // storing final outptu
    for (let i = 0; i < numbers.length; i++) {
        if (map.has(numbers[i])) {
            if (stack.length < 2) alert("enter valid input");
            let r = stack.pop();
            let l = stack.pop();

            console.log("l=", typeof (l));
            stack.push(calculate(l, r, numbers[i]));

        }
        else stack.push(numbers[i]);

        // console.log(stack);
    }


    input.value = stack.pop();






}





let a = document.getElementsByTagName("button");
for (let i = 0; i < a.length; i++) {
    if (a[i].id !== "eq") {
        a[i].onclick = () => {
            let b = a[i].innerText;
            //console.log(b);

            input.value = input.value + b;

        }
    }
}







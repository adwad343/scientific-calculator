


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
function add() {


}


let equals = document.getElementById("eq");
equals.onclick = () => {
    let equation = input.value;
    console.log(typeof (equation));
    let n = 0;
    for (let i = 0; i < equation.length; i++) {
        let curr = equation[i];

        if (map.has(curr)) {
            numbers.push(n);
            n = 0;







        }
        else {
            n = n * 10 + curr;
        }

    }


}



const set = new Set("+-*/");

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







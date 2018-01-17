interface Named {
    name: string;
}

let x: Named;
let y = {name: "Alice", location: "Seattle"};

x = y;

console.log(x);

function greet (n: Named) {
    alert("Hello, " + n.name);
}

greet(y);

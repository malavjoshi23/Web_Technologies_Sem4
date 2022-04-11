let variable = prompt("Ënter any number");
let n = parseInt(variable);
let e = document.getElementById("evenodd");
e.textContent = n;
if (n % 2 == 0) {
    e.style.color = 'green';
} else {
    e.style.color = 'red';
}
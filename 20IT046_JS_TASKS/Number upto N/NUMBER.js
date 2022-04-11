let variable = prompt("Enter N");
let res = "";
let x = document.getElementById("num");
for (let i = 0; i <= variable; i++) {
    res += i;
    res += ' ';
}
x.textContent = res;
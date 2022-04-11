function get_prime(j){
    for(let i=2; i<=j/2; i++){
        if(j%i == 0)
            return false
    }
    return true
}
let n = prompt("Enter any random number");
document.getElementById("fibo").textContent = n;


let num1 = 0 , num2 = 1;
let res = '0 1 1 ';
let num3 = num1 + num2;
for(let i=0; i<n-2; i++){
    num3 = num1 + num2
    if(get_prime(num3)){
        res += '<span>' + num3 + '</span> ';
    }
    else
        res += num3 + ' ';
    num1  = num2;
    num2  = num3;
}

document.getElementById("elements").innerHTML = res;

function avg(){
    let sum = 0;
    let A = [1,2,3,4,5,6,7,8,9,10];
    for(let i=0;i<=A.length;i++){
        sum +=A[i];
    }
    let avg= sum/A.length;
    return avg;
}
console.log(avg());

function factorial(xy){
    let xy_fact=1;
    for(let i=xy;i>1;i--){
        xy_fact=xy_fact*i;
    }
    return xy_fact;
}
console.log(factorial(36));

console.log("Input the values of x and y");
function combination(x,y){
    let combo;
    if(x>y){
        console.log("Since x is greater than y");
        combo= (factorial(x))/((factorial(y))*(factorial(x-y)));
    }
    else if(x<y){
        console.log("Since y is greater than x");
        combo= (factorial(y))/((factorial(x))*(factorial(y-x)));
    }
    else {
        console.log("Since x is equal to y, we will combine (x-1) and y");
        combo= (factorial(x-1))/((factorial(y))*(factorial((x-1)-y)));
    }
    return combo;
}


document.getElementById("array").innerText = "The average of array, A " + avg()
document.getElementById("factorial").innerText = "The factorial of 36 is " + factorial(36)
let x= document.getElementById("x").value
let y= document.getElementById("y").value
let combo= combination(x,y)
document.getElementById("combo_x&y").innerText = "The combination of x and y is " + combination(x,y)
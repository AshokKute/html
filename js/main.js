alert("Enter your age");
let a = prompt("Enter age");
Number.parseInt(a);
let runAgain = true;
while(runAgain){


const candrive=(a)=>{
return a>18?true:false
}

if(candrive(a))
{
    alert("Bro you can drive!");
}else{
    alert("you can not drive")
}
runAgain=confirm(" ")
}
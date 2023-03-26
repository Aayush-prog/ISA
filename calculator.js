let screen=document.getElementById("display");
let a;
let b;
function display(num){
    screen.value+=num;
}
function answer(){
    a=screen.value;
    b=eval(a);
    screen.value=b;
}
function clearScreen(){
    screen.value='';
}
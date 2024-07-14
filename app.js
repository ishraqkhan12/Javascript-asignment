//----------  Exercise : 6.1 ------------------
function add(a, b){
    return a + b
}
let num1 = 2;
let num2 = 2;
let result1 = add(num1, num2);
console.log(result1)

let result2 = add(4, 2);
console.log(result2);

//----------------Exercise : 6.3 ---------------
let numb_1 = 2;
let numb_2 = 3;
let operator = "+"

function calculator(a, b, operator){
if(operator === "+"){
    return a + b
}
else if(operator === "-"){
    return a - b
}

else{
    return a + b
}
}

let result = calculator(numb_1, numb_2, operator)
console.log(result);
let resultNew = calculator(4, 2, "-")
console.log(resultNew);

//--------------Exercise : 6.2 --------------------

let arr1 = ["beautiful", "innocent", "brilliant","intelligent","elegant","delightful"];
function askForName(){
    let name  = prompt("Enter your name");
   let randomVal = Math.floor( Math.random() * arr1.length) ;
   let randomWord = arr1[randomVal]
   alert(`${name} is ${randomWord}`);

}
askForName();

//---------------------Exercisee : 4.5 -----------------------

let prize = +prompt("select a number between 0 and 10 to set your prize");
let select = "My selection: ";
let prizeMessage;

switch(prize){
    case 1:
        prizeMessage= "a brand new car";
        break;
    case 2:
        prizeMessage= "a luxury vacation!";
        break;
    case 3:
         prizeMessage= "a $100 shopping spree";
        break;
    case 4:
        prizeMessage= "a year's supply of your favourite snacks ";
        break;
    case 5:
        prizeMessage= "a state-of-the-art laptop!";
        break;
    case 6:
         prizeMessage= "a hot air balloon ride over picturesque landscapes!";
        break;
    case 7:
        prizeMessage= "a brand new watch";
        break;
    case 8:
        prizeMessage= "an amaizing surprise gift";
        break;
    case 9:
         prizeMessage= "a brand new car";
        break;
    default:
        prizeMessage = "sorry! your selection is not valid"
}
alert(select +" " + prizeMessage);


//                  : PROJECTS :

// ----------------- FRIEND CHECKER GAME----------------
let name = prompt("FRIEND CHECKER GAME:   Enter your name");

switch(name){
    case "wafa":
    case "laiba":
    case "ayesha":
    case "harmain":    
    case "zaid":
        alert(name + " you are my friend")
        break;
    default:
            alert("Sorry....I don't know you " + name)
}


//----------------Evaluating a number game------------

let number = 50;
let userinput = prompt("Please enter a number");

if(userinput > number){
    alert(`${userinput} is greater than ${number}`);
}
else if(userinput < number){
    alert(`${userinput} is less than ${number}`);
 
}
else{
    alert(`${userinput} is equals to ${number}`);
}      


//--------- Rock, Paper, Scissor game

let arr = ["rock","paper","scissor"];

let player = Math.floor( Math.random()* arr1.length )
let playerResult = arr[player];

let computer = Math.floor( Math.random()* arr1.length );
let computerResult = arr[computer];

if( playerResult === computerResult){
    alert("The result in a tie");
}
else if(playerResult === "rock" && computerResult ==="scissor" ||
        playerResult === "paper" && computerResult ==="rock" ||
        playerResult ==="scissor" && computerResult ==="paper"){
            alert(`You win! ${playerResult} beats ${computerResult}`);
        }
 else{
    alert(`you lose ${playerResult} do not beat ${computerResult}`);
 }       










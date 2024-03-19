
import inquirer from "inquirer";
import chalk from "chalk"

 
let answers = await inquirer.prompt([
    {message :"enter first number ", type:"number", name:"firstNumber"},
    {message :"enter second number ", type:"number", name:"secondNumber"},
    {
        message:"select one operator to find operations",
        type:"list",
        name:"operator",
        choices:["addition","subtraction","division","multiplication"],
    }
])
if (answers.operator === "addition"){
    console.log(answers.firstNumber + answers.secondNumber);
    
}else if (answers.operator === "subtraction"){
    console.log(answers.firstNumber - answers.secondNumber);
    
}else if(answers.operator === "division"){
   console.log(answers.firstNumber / answers.secondNumber);
   
}else if(answers.operator === "multiplication"){
    console.log(answers.firstNumber * answers.secondNumber);
}else {
    console.log("valid input");
    
}








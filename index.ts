#!/usr/bin/env node
import inquirer from "inquirer"

const answer = await inquirer.prompt([
    {message:"Enter first number", type: "number", name:"firstname"},
    {message:"Enter first number", type: "number", name:"firstname"},
    
        {
            message:"select one of the operator to perform operation",
            type:"list",
            name:"operator",
            choices:["Addition", "Subtraction", "Multiplication", "Divide"]
        
}]);
//Conditional statement
if(answer.operator === "Addition")
 console.log(answer.firstNumber+ answer.secondNumber);
    else if(answer.operator === "Subtraction")
        console.log(answer.firstNumber+ answer.secondNumber);
      else if  (answer.operator === "Multiplication")
            console.log(answer.firstNumber+ answer.secondNumber);
           else if (answer.operator === "Divide"){
                console.log(answer.firstNumber+ answer.secondNumber);
}
else{
    console.log("please select valid operator")
}
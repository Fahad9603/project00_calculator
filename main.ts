import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { Sum } from "./Add.js";
import { Sub } from "./Sub.js";
import { Div } from "./Div.js";
import { Mul } from "./Mul.js";
import { Console } from "console";

const sleep = ()=> // create function
{
 return  new Promise((res)=>{
    setTimeout(res,2000)
 }) 
 

}

async function welcome() {

let rainbowTitle = chalkAnimation.rainbow('Lets Start Calculation'); // Start  Animation
await sleep();
rainbowTitle.stop();
console.log(` 
 _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|

`);

};

await welcome();

async function Question() {
let answers =   await  inquirer.prompt([
{
    type: 'list',
    name: 'Operator',
    message: 'Which Operation you want to performe? \n',
    choices:['Addition','Subtraction','Multiplication', 'Division']
},
{
     name : "Number1",
     type: "number",
     message: "Enter your First Number : "
},
{
    name : "Number2",
    type: "number",
    message: "Enter your Second Number : "
}
    ]);
    
        if (answers.Operator == 'Addition') {
            console.log(chalk.bgGreen(Sum(answers.Number1,answers.Number2)))
        }
        else if (answers.Operator == 'Subtraction')
        {
            console.log(chalk.bgGreen(Sub(answers.Number1,answers.Number2)))
        }
        else if (answers.Operator == 'Multiplication')
        {
            console.log(chalk.bgGreen(Mul(answers.Number1,answers.Number2)))
        }
        else if (answers.Operator == 'Division')
        {
            console.log(chalk.bgGreen(Div(answers.Number1,answers.Number2)))
        }
    
};


async function Redirect() {
 do{
    await Question();
    var restart = await inquirer.prompt(
        {
            name: 'Restart',
            type: 'input',
            message: 'DO you  want to conrinue Press Y or N : '
        }
    )

}while(restart.Restart == 'y' || restart.Restart == 'Y' || restart.Restart == 'yes' || restart.Restart == 'YES' || restart.Restart == 'Yes');
    
}

await Redirect();

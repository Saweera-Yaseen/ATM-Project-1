#! /usr/bin/env node
import inquirer from "inquirer";

//Define variable
let mybalance = 10000;

let mypin  = 4248;

let pinAnswer = await inquirer.prompt(
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",


}
);
if (pinAnswer.pin === mypin){
    console.log("Ypur pin is correct");

    let operationAns = await inquirer.prompt(
        {name: "operations",
        message: "Please select options",
        type: "list",
        choices: ["widhraw", "cash", "check balance"]

    });
    if(operationAns.operations === "widhraw"){
        let amountAns = await inquirer.prompt([
            {name: "amount",
            message: "Enter your amount",
            type: "number",


        }])
        if(amountAns.amount <= mybalance) {
            let balance = mybalance - amountAns.amount;
            console.log(`The remaining balance is ${balance}`);
        }
        else{
            console.log("You have insuficient balance");
        }
    }
// if user select fast cash
else if (operationAns.operations === "cash") {
    let cashAns = await inquirer.prompt(
        
        [
            {
                name: "amount",
                type: "list",
                choices:["1000", "5000","15000"]

    }
]
);
if (cashAns.amount <= mybalance) {
    let balance2 = mybalance - cashAns.amount;
    console.log(`the remaining balance is ${balance2}`);

}
else{
    console.log(`You have insuficient amount`);

}

}
else if (operationAns.operations === "Check balance"){
    console.log(mybalance);
     }

}
 

else{

    console.log("Your pin is wrong");

}

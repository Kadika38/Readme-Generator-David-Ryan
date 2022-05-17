const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'yourName',
        },
        {
            type: 'input',
            message: 'What is your favorite thing to do?',
            name: 'favThing',
        },
        {
            type: 'input',
            message: 'What is your future car?',
            name: 'car',
        }
    ])
    .then((response) =>
        fs.writeFile('newindex.html', 
        `<!DOCTYPE html>
        <html lang="en"
        
        <head>
            <meta charset="ETF-8" />
            <title>A Site</title>
            <!--Viewport Fix-->
            <meta content="width=device-width, initial-scale=1" name="viewport" />
        </head>
        
        <body>
            <p>My name is ${response.yourName}</p>
            <br>
            <p>My favorite thing to do is ${response.favThing}</p>
            <br>
            <p>My future car is a ${response.car}</p>
        </body>
        
        </html>`, 
        (err) =>
            err ? console.error(err) : console.log("Success!")
        )
    );
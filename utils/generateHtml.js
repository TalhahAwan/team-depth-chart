const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')

const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')

function generateHtml(empEngineer, empIntern, empManager) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css" />
        <title>Team</title>
    </head>
    <body>
        <div class = "container-fluid">
            <div class = "row d-flex justify-content-center">
                <h1 class = "text-center"> Workers </h1>
            </div>
        </div>

        <div class = "container">
            <div class = "row d-flex justify-content-center">
                ${generateEngineer}(empEngineer)
                ${generateIntern}(empIntern)
                ${generateManager}(empManager)
            </div>
        </div>
        
    </body>
    </html>`
}

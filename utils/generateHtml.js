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

function generateEngineer(empEngineer) {
    let engineerhtml = "";
    for (i=0; i < empEngineer.length; i ++) {

        engineerhtml += `<div class="col-sm-4">
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="bg-primary text-white card-title">${empEngineer[i].name}</h2>
                <h3 class="bg-success text-white card-title">Engineer</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="text-primary list-group-item">ID: $${empEngineer[i].id}</li>
                    <li class="text-primary list-group-item">Email: <a href="mailto:${empEngineer[i].email}">${empEngineer[i].email}</a></li>
                    <li class="text-danger list-group-item">GitHub: <a href="https://github.com/${empEngineer[i].gitHub.gitHub}" target="_blank" rel="noopener noreferrer">${empEngineer[i].gitHub.gitHub}</a></li>
                </ul>
            </div>
        </div>
    </div>`
    };
    return engineerhtml;
}

function generateIntern(empIntern) {
    let internhtml = "";
    for (i=0; i < empIntern.length; i ++) {

        internhtml += `<div class="col-sm-4">
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="bg-primary text-white card-title">${empIntern[i].name}</h2>
                <h3 class="bg-success text-white card-title">Intern</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="text-primary list-group-item">ID: $${empIntern[i].id}</li>
                    <li class="text-primary list-group-item">Email: <a href="mailto:${empIntern[i].email}">${empIntern[i].email}</a></li>
                    <li class="text-danger list-group-item">School: ${empIntern[i].school.school}></li>
                </ul>
            </div>
        </div>
    </div>`
    };
    return internhtml;
}

function generateManager(empManager) {
    let managerhtml = "";
    for (i=0; i < empManager.length; i ++) {

        managerhtml += `<div class="col-sm-4">
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="bg-primary text-white card-title">${empManager[i].name}</h2>
                <h3 class="bg-success text-white card-title">Manager</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="text-primary list-group-item">ID: $${empManager[i].id}</li>
                    <li class="text-primary list-group-item">Email: <a href="mailto:${empManager[i].email}">${empManager[i].email}</a></li>
                    <li class="text-danger list-group-item">officeNumber: ${empManager[i].officeNumber.officeNumber}"></li>
                </ul>
            </div>
        </div>
    </div>`
    };
    return managerhtml;
}

module.exports = generateHtml;


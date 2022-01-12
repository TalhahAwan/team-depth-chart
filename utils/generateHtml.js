// const inquirer = require('inquirer')
// const fs = require('fs')

// const Engineer = require('./lib/Engineer')
// const Intern = require('./lib/Intern')
// const Manager = require('./lib/Manager')

function generateHtml(engineerData, internData, managerData) {
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
                ${generateEngineer(engineerData)}
                ${generateIntern(internData)}
                ${generateManager(managerData)}
            </div>
        </div>
        
    </body>
    </html>`
}

function generateEngineer(engineerData) {
    let engineerhtml = "";
    for (i=0; i < engineerData.length; i ++) {

        engineerhtml += `<div class="col-sm-4">
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="bg-primary text-white card-title">${engineerData[i].name}</h2>
                <h3 class="bg-success text-white card-title">Engineer</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="text-primary list-group-item">ID: ${engineerData[i].id}</li>
                    <li class="text-primary list-group-item">Email: <a href="mailto:${engineerData[i].email}">${engineerData[i].email}</a></li>
                    <li class="text-primary list-group-item">GitHub: <a href="https://github.com/${engineerData[i].gitHub}" target="_blank" rel="noopener noreferrer">${engineerData[i].gitHub}</a></li>
                </ul>
            </div>
        </div>
    </div>`
    };
    return engineerhtml;
}

function generateIntern(internData) {
    let internhtml = "";
    for (i=0; i < internData.length; i ++) {

        internhtml += `<div class="col-sm-4">
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="bg-primary text-white card-title">${internData[i].name}</h2>
                <h3 class="bg-success text-white card-title">Intern</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="text-primary list-group-item">ID: ${internData[i].id}</li>
                    <li class="text-primary list-group-item">Email: <a href="mailto:${internData[i].email}">${internData[i].email}</a></li>
                    <li class="text-primary list-group-item">School: ${internData[i].school}</li>
                </ul>
            </div>
        </div>
    </div>`
    };
    return internhtml;
}

function generateManager(managerData) {
    let managerhtml = "";
    for (i=0; i < managerData.length; i ++) {

        managerhtml += `<div class="col-sm-4">
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="bg-primary text-white card-title">${managerData[i].name}</h2>
                <h3 class="bg-success text-white card-title">Manager</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="text-primary list-group-item">ID: ${managerData[i].id}</li>
                    <li class="text-primary list-group-item">Email: <a href="mailto:${managerData[i].email}">${managerData[i].email}</a></li>
                    <li class="text-primary list-group-item">officeNumber: ${managerData[i].officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>`
    };
    return managerhtml;
}

module.exports = generateHtml;


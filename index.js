#!/usr/bin/env node

import inquirer from 'inquirer';
import {createFiles} from './config.js';
import fs from 'fs'



inquirer
  .prompt([
    
    {
        type:'input',
        name: 'namee',
        message:'Enter Project Name:',
    },
    {
        type:'input',
        name: 'port',
        message:'Port:',
    },
    {
      type:'list',
      name:'store',
      message: 'Choose Store:',
      choices:['Zustand','Zustand-p','No Store' ]
    },

  ])
  .then((answers) => {
    
    
    //create project folders
    fs.mkdirSync( answers.namee );
    fs.mkdirSync( `${answers.namee}/src` );
    fs.mkdirSync( `${answers.namee}/src/infra` );
    fs.mkdirSync( `${answers.namee}/src/infra/apiServices` );
    fs.mkdirSync( `${answers.namee}/src/infra/model` );
    if(answers.store =='Zustand' || answers.store =='Zustand-p'){
      fs.mkdirSync( `${answers.namee}/src/infra/store` );
    }

    fs.mkdirSync( `${answers.namee}/src/logic` );
    fs.mkdirSync( `${answers.namee}/src/logic/auth` );
    fs.mkdirSync( `${answers.namee}/src/logic/controllers` );
    fs.mkdirSync( `${answers.namee}/src/logic/utilites` );
    fs.mkdirSync( `${answers.namee}/src/logic/validations` );
    fs.mkdirSync( `${answers.namee}/src/logic/validations/yupvalidator` );


    fs.mkdirSync( `${answers.namee}/src/repository` );

    fs.mkdirSync( `${answers.namee}/src/views` );
    fs.mkdirSync( `${answers.namee}/src/views/layout` );
    fs.mkdirSync( `${answers.namee}/src/views/router` );
    fs.mkdirSync( `${answers.namee}/src/views/style` );
    fs.mkdirSync( `${answers.namee}/src/views/ui` );

       //COPY ARCHITECTURE FILE
       fs.copyFile('architecture.dio', `${answers.namee}/architecture.dio`, (err) => {
        if (err) throw err;
        console.log('source.txt was copied to destination.txt');
      });

    //create project files
    const data = createFiles(answers.namee , answers.port,answers.store );
    data.forEach( dt => { 
     fs.writeFileSync( dt.name , dt.text );
    } );

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
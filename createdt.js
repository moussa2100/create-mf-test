#!/usr/bin/env node

import inquirer from 'inquirer';
import fs from 'fs'



inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type:'input',
        name: 'filename',
        message:'Enter File Name:',
    },

  ])
  .then((answers) => {
    
    console.log( answers)
    
    fs.readFile(answers.filename, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace("//importDT", 
        `import {DataTable} from '@mateialui/core'
//importDT`
        );
      
        fs.writeFileSync(answers.filename, result, 'utf8');
      });
   


  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


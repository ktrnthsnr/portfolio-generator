const inquirer = require('inquirer');
// console.log(inquirer);

inquirer
.prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  }
])
.then(answers => console.log(answers));



// -- backup

        // const fs = require('fs');
        // const generatePage = require('./src');
        //...

        // const pageHTML = generatePage(portfolioData);

        // fs.writeFile('./index.html', pageHTML, err => {
        //   if (err) throw new Error(err);

        //   console.log('Portfolio complete! Check out index.html to see the output!');
        // });

//require inquirer
const inquirer = require('inquirer');
// console.log(inquirer);
            

// -- wrap the inquirer.prompt() inside a promptUser function

        // --- profile questions

        const promptUser = () => {
            return inquirer.prompt([

                //first question, with validation
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your name? (Required)',
                    //added validation
                    validate: nameInput => {
                      if (nameInput) {
                        return true;
                      } else {
                        console.log('Please enter your name!');
                        return false;
                      }
                    }
                  },
                            //-- basic first question
                            // {
                            //     type: 'input',
                            //     name: 'name',
                            //     message: 'What is your name?'
                            // },
                
                 //second question
                {
                    type: 'input',
                    name: 'github',
                    message: 'Enter your GitHub Username',
                    validate: nameInput => {
                        if (nameInput) {
                          return true;
                        } else {
                          console.log('Please enter your GitHub name!');
                          return false;
                        }
                      }
                },
                {
                    type: 'input',
                    name: 'about',
                    message: 'Provide some information about yourself:'
                }
                ]);
            };

        // promptUser().then(answers => console.log(answers));
        
        
        // --- project questions
            // -- old
            // const promptProject = () => {

            // -- new
                //function expression with an array
                const promptProject = portfolioData => {
                    // adding the array (If there's no 'projects' array property, create one)
                    if (!portfolioData.projects) {
                        portfolioData.projects = [];
                    }
                        console.log(`
                        =================
                        Add a New Project
                        =================
                        `);
                            return inquirer.prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'What is the name of your project?',
                                validate: nameInput => {
                                    if (nameInput) {
                                      return true;
                                    } else {
                                      console.log('Please enter your project name.');
                                      return false;
                                    }
                                  }
                            },
                            {
                                type: 'input',
                                name: 'description',
                                message: 'Provide a description of the project (Required)',
                                validate: nameInput => {
                                    if (nameInput) {
                                      return true;
                                    } else {
                                      console.log('Please enter a project description!');
                                      return false;
                                    }
                                  }
                            },
                            {
                                type: 'checkbox',
                                name: 'languages',
                                message: 'What did you use for this project? (Check all that apply)',
                                choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
                            },
                            {
                                type: 'input',
                                name: 'link',
                                message: 'Enter the GitHub link to your project. (Required)',
                                validate: nameInput => {
                                    if (nameInput) {
                                      return true;
                                    } else {
                                      console.log('Please enter the GitHub link to your project!');
                                      return false;
                                    }
                                  }
                            },
                            {
                                type: 'confirm',
                                name: 'feature',
                                message: 'Would you like to feature this project?',
                                default: false
                            },
                            {
                                type: 'confirm',
                                name: 'confirmAddProject',
                                message: 'Would you like to enter another project?',
                                default: false
                            }
                            ])
                                    .then(projectData => {
                                        portfolioData.projects.push(projectData);
                                        if (projectData.confirmAddProject) {
                                        return promptProject(portfolioData);
                                        } else {
                                        return portfolioData;
                                        }
                                    });                
                        };

                       
        // -- Using multiple promises, chain the functions together using then() methods
                //new version with array
                promptUser()
                .then(promptProject)
                .then(portfolioData => {
                    console.log(portfolioData);
                });

          // -- Using multiple promises, chain the functions together using then() methods

                // promptUser()
                // .then(answers => console.log(answers))
                // .then(promptProject)
                // .then(projectAnswers => console.log(projectAnswers));

        //   promptProject().then(answers => console.log(answers));


// -- prev ver: wrap the inquirer.prompt() inside a promptUser function
        // const promptUser = () => {
        //     return inquirer.prompt([
        //       {
        //         type: 'input',
        //         name: 'name',
        //         message: 'What is your name?'
        //       }
        //     ]);
        //   };
        
        //   promptUser().then(answers => console.log(answers));


// ----   initial prompt test ----- //

        // inquirer
        // .prompt([
        // {
        //     type: 'input',
        //     name: 'name',
        //     message: 'What is your name?'
        // }
        // ])
        // .then(answers => console.log(answers));




// -- backup

        // const fs = require('fs');
        // const generatePage = require('./src');
        //...

        // const pageHTML = generatePage(portfolioData);

        // fs.writeFile('./index.html', pageHTML, err => {
        //   if (err) throw new Error(err);

        //   console.log('Portfolio complete! Check out index.html to see the output!');
        // });

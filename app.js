// ------------------------------------------------------------- //

// gitprofile:  ktrnthsnr       date: May 10th 2020
// assignment:  module 9 Node.js    repo: portfolio-generator
// ------------------------------------------------------------- //
// this file:   apps.js     
// outputs:     index.html
// usage:       run in terminal: $ node app.js
// page contains:
// ------------------------------------------------------------- //
        // 1. the requires
        //     a. require for npm inquirer 
        //     b. require for generatePage   >  page-template.js
        //     c. require for writeFile and copyFile  >  generate-site.js
        // ------------------------------------------------------ //
        // 2. the functions    
        //     a. promptUser() with questions
        //     b. promptProject() with questions
        // ------------------------------------------------------ //
        // 3. the inits
        //     a. promptUser     
        //     b.    w/ nested promptProject
        //                      > returns generatePage()   >  creates HTML template
        //                      > writeFile, copyFile >  moves >  index.html & style.css to /dist folder

// ------------------------------------------------------------- //

// -- requires
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site.js');
            
// --- user profile questions
        // -- wrap the inquirer.prompt() inside a promptUser function
        const promptUser = () => {
            return inquirer.prompt([
                //first question
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
                //-- added more logic, to confirm
                {
                    type: 'confirm',
                    name: 'confirmAbout',
                    message: 'Would you like to enter some information about yourself for an "About" section?',
                    default: true
                  },
                  {
                    type: 'input',
                    name: 'about',
                    message: 'Provide some information about yourself:',
                    when: ({ confirmAbout }) => confirmAbout
                  }
                ]);
            };

      
// -- project questions 
                //-- wrap the inquirer.prompt() inside a promptProject function, function expression with an array
                const promptProject = portfolioData => {
                    //-- adding the array (If there's no 'projects' array property, create one)
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
                                        //--validation
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
                                        //--validation
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
                                        //--validation
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

// -- init function to call the promptUser() function --  update the Inquirer prompt Promise chain -- 
            // -- nests the promptProject within
                    // -- return's generatePage 
            promptUser()
            .then(promptProject)
            .then(portfolioData => {
            return generatePage(portfolioData);
            })
            .then(pageHTML => {
            return writeFile(pageHTML);
            })
            .then(writeFileResponse => {
            console.log(writeFileResponse);
            return copyFile();
            })
            .then(copyFileResponse => {
            console.log(copyFileResponse);
            })
            .catch(err => {
            console.log(err);
            });

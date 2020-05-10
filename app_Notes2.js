// notes 2



// -- require the fs module
        
const fs = require('fs');

// to import the generatePages() function add the 'require' of the custom function
const generatePage = require('./src/page-template.js');

// --- declare 'the array' which holds the user command-line arguments ---- // 

//refactored
const profileDataArgs = process.argv.slice(2);

// --- goal: extract arguments and store them into distinct variables
const [name, github] = profileDataArgs;

//moved the generatePage() function to ./src/page-template.js to refactor and to use export\import of a function
    // // -- the string template, a function with command-line arguments or template literals interpolated into the HTML -- //

    //             const generatePage = (name, github) => {
    //                 return `
    //                 <!DOCTYPE html> 
    //                 <html lang="en"> 
    //                 <head>
    //                 <meta charset="UTF-8">
    //                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //                 <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //                 <title>Portfolio Demo</title>
    //                 </head>
                
    //                 <body>
    //                 <h1>${name}</h1>
    //                 <h2><a href="https://github.com/${github}">Github</a></h2>
    //                 </body>
    //                 </html>
    //                 `;
    //             };  

// --- return the values // fs.writeFile() takes three arguments: the file name, data to write into the file, and the callback function for error handling

    fs.writeFile('./index.html', generatePage(name, github), err => {
        if (err) throw new Error(err);
    
        console.log('Portfolio complete! Check out index.html to see the output!');
    });



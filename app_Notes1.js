// -- notes 1




// -- invoke the 'require' file system or fs module; also resolves this error: "ReferenceError: fs is not defined", 
        
const fs = require('fs');

// --- declare 'the array' which holds the user command-line arguments ---- // 

        const profileDataArgs = process.argv.slice(2, process.argv.length);

            // ---goal: extract arguments and store them into distinct variables
                // ---do this: declare two array indexes, 0 and 1, for two values. 
                    // ---This array index has the following expressions,
                    // ---and also place these array index declarations below 'the array'.
                        // const name   = profileDataArgs[0];
                        // const github = profileDataArgs[1];
                            //---other version: 
                            const [name, github] = profileDataArgs;


// -- updated function with command-line arguments interpolated into the HTML -- //
        // -- with ES6, use a feature called template literals to embed JavaScript expressions into the string. 
        // -- template literals  enclosed by backticks (`) instead of double or single quotes.

        const generatePage = (name, github) => {
            return `
            <!DOCTYPE html> 
            <html lang="en"> 
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Portfolio Demo</title>
            </head>
        
            <body>
            <h1>${name}</h1>
            <h2><a href="https://github.com/${github}">Github</a></h2>
            </body>
            </html>
            `;
        };


// --- adding file system or fs.writeFile() function to replace the console.log statements that returned the values 
        // fs.writeFile() takes three arguments: the file name, data to write into the file, and the callback function for error handling

            fs.writeFile('index.html', generatePage(name, github), err => {
                if (err) throw err;

                console.log('Portfolio complete! Check out index.html to see the output!');
            });

  

// --- multi-line input for our previous example, recoded -- 

        // const generatePage = (userName, githubName) => {
        // return `
        //     Name: ${userName}
        //     GitHub: ${githubName}
        // `;
        // };

        // ---update to return with two index variables, two versions of output:
        // -- one version

            // console.log(name, github);

        // -- other version in terminal literals or tikmarks

            // console.log(generatePage(name, github));

                        // -- result after entering into terminal: node app jane janehub
                        /*
                        jane janehub

                                        Name: jane
                                        GitHub: janehub
                        */

        // --- placeholder values
            // console.log(generatePage('Jane', 'janehub'));     

// ----- Use template literals to insert the variables inside the function block ---- 

        // const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
        // // * display the return from the function call by writing the following statement below the function expression
        // console.log(generatePage('Jane', 'janehub'));

// ------------------ feature/generate-webpage ------------------------------------- //

    // //  * 'arrow function' returns a string
    // const generatePage = () => 'Name: Jane, Github: janehub';
    // // * console.log(generatePage());
    // console.log(generatePage('Jane', 'janehub'));



// ------------------ feature/capture-input ------------------------------------- //

//------ array example with 'constant' or 'const' variables  

        // const profileDataArgs = process.argv.slice(2, process.argv.length);
        // // console.log(profileDataArgs);


// ---- print function, to print them one by one, through the index

        // const printProfileData = profileDataArr => {
        //     for (let i = 0; i < profileDataArr.length; i += 1) {
        //     console.log(profileDataArr[i]);
        //     }
        //     profileDataArr.forEach(profileItem => console.log(profileItem));        //cleaned up foreach with arrow function
        // };

// ------------ print basic

        // printProfileData(profileDataArgs);







// ----------- .forEach() new array method   

        // console.log('================');

        // profileDataArr.forEach(function(profileItem) {
        //   console.log(profileItem);
        // });

        


//------ basic const & print function ----- //


        // const printProfileData = profileDataArr => {
        //     console.log(profileDataArr);
        //   };

        //or with the parentheses

        // const printProfileData = (profileDataArr) => {
        //     console.log(profileDataArr);
        // }


        // printProfileData(profileDataArgs);


//------ array example with 'var' ---------------------/

        // var profileDataArgs = process.argv.slice(2, process.argv.length);
        // console.log(profileDataArgs);

        // * result:
        // $ node app.js 'Thisner' 'Web Developer'
        // [ 'Thisner', 'Web Developer' ]


//------ revieiwng the "argv" property of "process" array ---------------------/

        // var commandLineArgs = process.argv;
        // console.log(commandLineArgs);
        // console.log(process);

//--------------------------------------------------------------/

        // var message = 'Hello Node!';

        // var sum = 5 + 3;

        // console.log(message);
        // console.log(sum);

//--------------------------------------------------------------/

        // console.log('Hello Node!');
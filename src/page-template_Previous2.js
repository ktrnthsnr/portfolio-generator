// updated new

module.exports = templateData => {
    console.log(templateData);

    // -- new destructuring statement, this will create three variables based on data in templateData
        const { projects, about, ...header } = templateData;
        console.log(projects);
        console.log(about);
        console.log(header);
    
    // -- previous, added 'destructure' Projects and About data from templateData, based on their property key names
        // const { projects, about } = templateData;
  
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
      <h1>${templateData.name}</h1>
      <h2><a href="https://github.com/${templateData.github}">Github</a></h2>
    </body>
    </html>
    `;
  };



  // -- Previous version below, see above for change to the the template literal data to use properties of 
    // -- templateData instead of the individual parameters below.

            // // -- the string template, a function with command-line arguments or template literals interpolated into the HTML -- //

            //         const generatePage = (name, github) => {
            //             return `
            //             <!DOCTYPE html> 
            //             <html lang="en"> 
            //             <head>
            //             <meta charset="UTF-8">
            //             <meta name="viewport" content="width=device-width, initial-scale=1.0">
            //             <meta http-equiv="X-UA-Compatible" content="ie=edge">
            //             <title>Portfolio Demo</title>
            //             </head>

            //             <body>
            //             <h1>${name}</h1>
            //             <h2><a href="https://github.com/${github}">Github</a></h2>
            //             </body>
            //             </html>
            //             `;
            //         };  

                    
            // // added 'export' expression, so the generatePage() function can be imported in the app.js

            //         module.exports = generatePage;

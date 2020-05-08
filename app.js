//------ array example with 'constant' or 'const' variables  

        const profileDataArgs = process.argv.slice(2, process.argv.length);
        // console.log(profileDataArgs);


// ---- print function, to print them one by one, through the index

        const printProfileData = profileDataArr => {
            for (let i = 0; i < profileDataArr.length; i += 1) {
            console.log(profileDataArr[i]);
            }
            profileDataArr.forEach(profileItem => console.log(profileItem));        //cleaned up foreach with arrow function
        };

// ------------ print basic

        printProfileData(profileDataArgs);

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
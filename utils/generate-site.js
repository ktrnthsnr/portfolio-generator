const fs = require('fs');

// -- create a promise and write a file -- //

        const writeFile = fileContent => {
            return new Promise((resolve, reject) => {
            fs.writeFile('./dist/index.html', fileContent, err => {
                    // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
                    if (err) {
                            reject(err);
                            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                            return;
                    }
            
                    // if everything went well, resolve the Promise and send the successful data to the `.then()` method
                    resolve({
                            ok: true,
                            message: 'The file has been copied to the dist folder!!'
                    });
                });
            });
        };



// // -- prev: create promise -- //

// const writeFile = fileContent => {
//     return new Promise((resolve, reject) => {});
//   };

// -- create another  promise with resolve\reject

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                    reject(err);
                    return;
            }
            resolve({
                    ok:true,
                    message: 'The file has been copied to the dist folder!'
            });
        });
    });
};


module.exports = { writeFile, copyFile };

// module.exports = {
//     writeFile: writeFile,
//     copyFile: copyFile
//   };
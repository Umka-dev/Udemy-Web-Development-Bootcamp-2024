/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
    .then((answers) => {
        // console.log(JSON.stringify(answers, null, '  '));
        const url = answers.URL;
        // console.log(`Your URL: ${url}`);
        const qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream('MyQRcode.png'));

    fs.writeFile("Customer_URL.txt", url, (err) => {
        if (err) throw err;
        console.log("The file has been saved!");
    })
    })
    .catch((error) => {
        console.log(error);
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log(`Prompt couldn't be rendered in the current environment.`);
    } else {
        // Something else went wrong
        console.log(`Something else went wrong.`);
    }
  });

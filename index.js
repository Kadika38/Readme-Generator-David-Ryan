//Required things to make everything work
const fs = require('fs');
const inquirer = require('inquirer');
const { indexOf } = require('lodash');

//An array of license badges that gets compared to the options chosen in the user input.
const licenseArray = ["[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)", "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)", "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)", "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)", "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)", "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)", "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)", "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)", "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)", "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)", "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)", "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)", "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)", ""];
const licArray = ['Apache', 'Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'The Organization for Ethical Source', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Open Data Commons', 'Perl', 'SIL', 'Unlicense', 'WTFPL', 'Zlib', 'None'];

inquirer
    .prompt([
        //prompts
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'inpTitle',
        },
        {
            type: 'input',
            message: 'Short description of project:',
            name: 'inpDesc',
        },
        {
            type: 'input',
            message: 'Info about installation:',
            name: 'inpInst',
        },
        {
            type: 'input',
            message: 'Info about usage:',
            name: 'inpUsage',
        },
        {
            type: 'list',
            message: 'License type:',
            name: 'inpLic',
            choices: ['Apache','Boost', 'BSD', 'Creative Commons', 'Eclipse', 'GNU', 'The Organization for Ethical Source', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Open Data Commons', 'Perl', 'SIL', 'Unlicense', 'WTFPL', 'Zlib', 'None'],
        },
        {
            type: 'input',
            message: 'Info about contributing',
            name: 'inpCont',
        },
        {
            type: 'input',
            message: 'Info about tests:',
            name: 'inpTests',
        },
        {
            type: 'input',
            message: 'Your GitHub username:',
            name: 'inpQsGH',
        },
        {
            type: 'input',
            message: 'Your developer email',
            name: 'inpQsE',
        }
    ])
    //then build the readme using a template and write a new file with that data
    .then((response) =>
        fs.writeFile('README.md', 
        `# ${response.inpTitle} ${licenseArray[licArray.indexOf(response.inpLic)]}

## Table of Contents
* [Description](#general-description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
    
## Description
${response.inpDesc}


## Installation
${response.inpInst}


## Usage
${response.inpUsage}


## License
This repository is licensed using a ${response.inpLic} license.


## Contributing
${response.inpCont}


## Tests
${response.inpTests}


## Questions
Any questions?  Contact me on GitHub @ https://github.com/${response.inpQsGH} or email ${response.inpQsE}`, 
//if theres a error, console log the error, if not console log "Success!"
        (err) =>
            err ? console.error(err) : console.log("Success!")
        )
    );
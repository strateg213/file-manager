//import path from 'path';
//import { fileURLToPath } from 'url';
import { h } from './src/read.js';
//import { list } from './src/list.js';
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);
//const pathFile = path.join(__dirname, 'src', 'read.js');
//console.log(h);
import { argv } from 'node:process';

const parseArgs = () => {
    try {
        argv.forEach((propName) => {
            if (propName.includes('--username=')) {
                const userName = propName.replace('--username=', '');
                console.log(`Welcome to the File Manager, ${userName}!`);
            }
        });
        } catch (error) {
            throw new Error ('ERROR!');
        }
    };

parseArgs();

    //console.log(argv);
//const userName = propName.slice(0, 8);

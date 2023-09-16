const { v4: uuidV4 } = require('uuid'); // basic way to import
// import { v4 as uuidV4 } from 'uuid'; // reactjs way of import (add "type": "module" in package.json to run)

console.log('uuid', uuidV4())

//console.log('hello world');
const os = require('os');
const path = require('path');
const bcrypt = require('bcryptjs');
console.log(os.platform());
console.log(os.homedir());
console.log(path.basename(__filename));

let pass = 'mypassword';
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("pass", salt, function(err, hash) {
        // Store hash in your password DB.
        console.log(hash);
    });
});

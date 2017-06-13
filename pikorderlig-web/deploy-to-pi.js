var scp = require('scp');

const options = {
    file: 'build/*',
    user: 'pi',
    host: 'pikorderlig',
    path: '/var/www/'
}

scp.send(options, function(err) {
   if (err) console.log(err);
   else console.log("File transferred.");
});
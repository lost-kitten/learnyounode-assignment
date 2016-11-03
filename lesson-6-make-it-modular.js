 var myfunction = require('./myfunction.js');
 var directory = process.argv[2];
 var filterStr = process.argv[3];


 myfunction(directory, filterStr, function(err, list) {
     if (err) {
         return console.error('An error has occured:', err)
     };
     list.forEach(function (file) {
         console.log(file);
     });
 });

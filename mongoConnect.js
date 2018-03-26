var mongoConnect = require('mongoose');
mongoConnect.Promise = global.Promise;
// Connection URL. This is where your mongodb server is running.

//(Focus on This Variable)
var url = 'mongodb://cddbadmin:goldchair33@ds223609.mlab.com:23609/codingdivadb';      
//(Focus on This Variable)
mongoConnect.connect(url);

module.exports = mongoConnect;
//don't do this, this is horrible...of course, there is no alternative for heroku..so...


var AWS = require('aws-sdk');


AWS.config.update({
    "region": "us-west-2" 
});
dbConnect = new AWS.DynamoDB({apiVersion: '2012-10-08'});

module.exports = dbConnect;
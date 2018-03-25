//don't do this, this is horrible...of course, there is no alternative for heroku..so...
var aws_access_key_id = "AKIAIYGIWWY3O3DEFXMQ";
var aws_secret_access_key = "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";

var AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: aws_access_key_id,
    secretAccessKey: aws_secret_access_key,
    "region": "us-west-2" 
});
dbConnect = new AWS.DynamoDB({apiVersion: '2012-10-08'});

module.exports = dbConnect;
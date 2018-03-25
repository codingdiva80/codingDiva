var dbConnect = require("../dbConnect");
var userTable = "codingdiva.user";

var UserModel = {

    create: function(data, res) {
        var newUser = {
            TableName: userTable,
            Item: {
                id: {S: Math.floor(new Date() / 1000).toString()},
                email: {S: data.email},
                username: { S: data.username},
                password: { S: data.password}
            }
        };
    
        // Call DynamoDB to add the item to the table
        dbConnect.putItem(newUser, function (err, data) {
            if (err) {
                res({error:err});
            } else {
                res({success:data});
            }
        });
    },

    read: function(userId){

    },

    update: function(data, userId){

    },

    delete: function(userId){

    }
}

module.exports = UserModel;

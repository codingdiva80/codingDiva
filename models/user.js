var mongoConnect = require("../mongoConnect");
var userTable = "codingdiva.user";
var mongoose = require("mongoose");
var dateFormat = require("dateformat")

var UserSchema = new mongoose.Schema({
    id: String,
    username: String,
    password: String,
    email: String,
    signupDate: Date
});

var MdlUser = mongoose.model("codingdiva.user", UserSchema);

let UserModel = {

    user: null,
    resolve: null,

    create: function(data, cb){
        this.resolve = cb;
        var now = new Date();
        data.id = Math.floor(new Date() /1000).toString();
        data.signupDate = dateFormat(now, "yyyy-mm-dd hh:MM:ss");
        this.user = new MdlUser(data);
        var addUser = (function(){
            this.addUserToDatabase();
        }).bind(this);
        this.findByEmail(data, addUser);  
    },

    addUserToDatabase: function(data){
        this.user.save()
            .then(item => {
                this.resolve({ sucess: "Item saved"});
            })
            .catch(err => {
                this.resolve({ error: err });
            });
    },

    findByEmail: function(data, callBack) {
        var self = this;
        MdlUser.findOne({ 'email' : data.email }, 'id email username', function(err, user){
            if(err){ return console.error('Error finding user');}
            if(user){
                self.resolve({ error: "email exists" });
            }
            else{
                callBack();
            }
        });
    },

    checkLogin: function(data, callBack){
        var self = this;
        MdlUser.findOne({ 'email' : data.email, 'password': data.password }, 'id email username', function(err, user){
            if(err){ return console.error('Error finding user'+JSON.stringify(err));}
            if(user){
                callBack({ success: "credentials passed" });
            }
            else{
                callBack({ error: "user not found"});
            }
        });
    }
}

module.exports = UserModel;

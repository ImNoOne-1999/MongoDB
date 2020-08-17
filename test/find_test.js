const assert = require('assert');
const User = require('../models/user');

describe('Finding Records',function(){

    var user1;
    beforeEach(function(done) {
            user1 = new User({
            userName: 'HelloWorld'
        });

        user1.save().then(function() {
            done();
        });
    });
    it('To find record from database',function(done){
        User.findOne({userName: 'HelloWorld'}).then(function(result) {
            assert(result.userName === 'HelloWorld');
            done();
        });
    });

    it('To find record by ID from database',function(done){
        User.findOne({_id: user1._id}).then(function(result) {
            assert(result._id.toString() === user1._id.toString());
            done();
        });
    });
});
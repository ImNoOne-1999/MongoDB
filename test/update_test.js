const assert = require('assert');
const User = require('../models/user');

describe('Updating Records',function(){

    var user1;
    beforeEach(function(done) {
            user1 = new User({
            userName: 'HelloWorld'
        });

        user1.save().then(function() {
            done();
        });
    });
    it('Update record from database',function(done){
        User.findOneAndUpdate({userName: 'HelloWorld'}, {userName: 'HiWorld'}).then(function() {
            User.findOne({_id: user1._id}).then(function(result) {
                assert(result.userName === 'HiWorld');
                done();
            });
        });
    });
});
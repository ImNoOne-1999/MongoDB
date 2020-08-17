const assert = require('assert');
const User = require('../models/user');

describe('Deleting Records',function(){

    var user1;
    beforeEach(function(done) {
            user1 = new User({
            userName: 'HelloWorld'
        });

        user1.save().then(function() {
            done();
        });
    });
    it('Delete record from database',function(done){
        User.findOneAndRemove({userName: 'HelloWorld'}).then(function() {
            User.findOne({userName: 'HelloWorld'}).then(function(result) {
                assert(result === null);
                done();
            });
        });
    });
});
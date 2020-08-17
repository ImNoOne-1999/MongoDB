const assert = require('assert');
const User = require('../models/user');

describe('Saving Records',function(){

    it('Save record to database',function(done){
        var user1 = new User({
            userName: 'HelloWorld'
        });

        user1.save().then(function() {
            assert(user1.isNew === false);
            done();
        });
    });
});
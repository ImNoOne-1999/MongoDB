const mongoose = require('mongoose');
mongoose.Promise = global.Promise; 

before(function(done) {
    mongoose.connect("mongodb://localhost/testing", { useNewUrlParser: true, useUnifiedTopology: true });
    mongoose.connection.once('open',function(){
        console.log("Connecrtion established successfully");
        done();
    }).on('error',function(){
        console.log('Connection Error: ',error);
    });
});

beforeEach(function(done){
    mongoose.connection.dropCollection('users',function(){
        done();
    });
});
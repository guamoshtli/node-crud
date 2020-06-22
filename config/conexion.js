let mongoose = require('mongoose');

//mongoose.connect('mongodb://username:password@port.mlab.com:15446/databasename', { useMongoClient: true }); //mongodb://localhost:27017/crud
//mongoose.connect('mongodb://localhost:27017/crud'); //mongodb://localhost:27017/crud
mongoose.connect('mongodb://gmlab:Xio2009@ds059908.mlab.com:59908/gsrcrud01'); 

module.exports = mongoose;
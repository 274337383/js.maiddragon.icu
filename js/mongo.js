var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://maiddragon.icu:27017/students';
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log('数据库已创建');
    var dbase = db.db("students");
    dbase.createCollection('users', function (err, res) {
        if (err) throw err;
        console.log("创建集合!");
        db.close();
    });
});
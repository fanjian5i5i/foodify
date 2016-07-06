import express from 'express';
import path from 'path';
import fs from 'fs';
import mime from 'mime';
import http from 'http';
import PythonShell from 'python-shell';
var XLSX = require('xlsx');

const app = express();
var router = express.Router({
    caseSensitive: app.get('case sensitive routing'),
    strict: app.get('strict routing')
});
app.use(router);
app.use(express.static('public'));

app.listen(process.env.PORT || 3000);

console.log("server started.")

function runPython(options, callback){
  PythonShell.run('./art80.py', options, function (err, result) {
        if (err) callback(null,err);
        console.log(result);
        callback(null,result);
  });
};

// router.get('/json', function (req, res) {
//     // console.log(req);
//     res.send({'test':req.headers.host});
//     // res.sendStatus(200);
// });

router.get('/download', function (req, res) {
	var options = {};
	runPython(options, function(e, result){
		var result = result[0].toString().substring(0,result[0].toString().length-1);
	    var file = __dirname + '/' + result;
	    // console.log(req.headers.filename);
	    // var file = __dirname + "/" + req.headers.filename;
	    // var workbook = XLSX.readFile(file);
	    var filename = path.basename(file);
	    var mimetype = mime.lookup(file);

	    res.setHeader('Content-disposition', 'attachment; filename=' + filename);
	    res.setHeader('Content-type', mimetype);

	    var filestream = fs.createReadStream(file);
	    filestream.pipe(res);
	})
});

router.get('/runpython', function (req, res) {
    var options = {};
    // res = wrappedRunPython(options);
    runPython(options, function(e, result){
    	// console.log(result);
     //    result = result[0].toString();
     //    if(result){
     //        var options = {
     //              host: 'localhost',
     //              port: '3001',
     //              path: '/download',
     //              method: 'GET',
     //              headers: {
     //                "filename": "test.xls"
     //              }
     //          };

     //    }
     var result = result[0].toString().substring(0,result[0].toString().length-1);
     res.redirect('/download?filename=' + result);
    })
});
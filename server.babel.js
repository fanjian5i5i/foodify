import express from 'express';

const app = express();
var router = express.Router({
    caseSensitive: app.get('case sensitive routing'),
    strict: app.get('strict routing')
});
app.use(router);
app.use(express.static('public'));

app.listen(process.env.PORT || 3000);

console.log("server started.")


router.get('/json', function (req, res) {
    console.log(req);
    res.send({'test':req.headers.host});
    res.sendStatus(200);
});
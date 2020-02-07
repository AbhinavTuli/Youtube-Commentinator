'use strict';
const xml2js = require('xml2js'); 
const express = require('express');
const bodyParser = require('body-parser');
const app = express().use(bodyParser.urlencoded({
    extended:true
})); // creates http server
var parser       = new xml2js.Parser();

var xmlparser = require('express-xml-bodyparser');
app.use(xmlparser());

app.listen(9003, () => console.log('Webhook is listening'));

app.get('/', (req, res) => {
    // check if verification token is correct
    // return challenge
    // console.log(req);
    // console.log(res);

    return res.end(req.query['hub.challenge']);
});

app.post('/', (req, res) => {
    // check if verification token is correct
    // if (req.query.token !== token) {
    //     return res.sendStatus(401);
    // }

    // print request body
    // console.log(req);
    // console.log('################################################');
    //console.log(req.body['feed']['entry'][0]['title']);  //title
    var url='https://www.youtube.com/watch?v='
    var id=req.body['feed']['entry'][0]['id']; 
    id=id.toString();
    id=id.substring(9)
    url+=id;
    console.log(url)
    // var name;
    // parser.parseString(req.body, function (err, result) {
    //     name = result['feed']['entry']['author']['name'];
    //     // res.render('index', { books:  books });
    // });
    // console.log(name);

    // return a text response
    const data = {
        responses: [
            {
                type: 'text',
                elements: ['Ho', 'Hello']
            }
        ]
    };

    res.json(data);
});



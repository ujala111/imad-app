var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var Pool = require('pg').Pool;
var config = {
    user: 'ujjwal',
    databse: 'ujjwal',
    host: 'http://db.imad.hasura-app.io',
    port: '5432',
    password: process.env.db-ujjwal-12834
};

var article = {
    'article-one': {
        title: 'Article-one | Ujjwal',
        heading: 'Article-one',
        date: '14 May, 1995',
        content: `<p>
                        This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it.
                    </p>
                    <p>
                        This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it.
                    </p>
                    <p>
                        This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it.
                    </p>`
        },
    'article-two': {
        title: 'Article-two | Ujjwal',
        heading: 'Article-two',
        date: '14 Dec, 1995',
        content: `<p>
                        This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it.
                    </p>
                    <p>
                        This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it.
                    </p>
                    <p>
                        This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it.
                    </p>`
    },
    'article-three': {
        title: 'Article-three | Ujjwal',
        heading: 'Article-three',
        date: '4 Sep, 1995',
        content: `<p>
                        This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it.
                    </p>
                    <p>
                        This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it.
                    </p>
                    <p>
                        This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it. This is so cool tutorial. I'm enjoying and learning it.
                    </p>`
    },
};

function createTemplate (data) {
    var tile = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `<html>
        <head>
            <title>
               ${tile}
            </title>
            <meta name="viewport" content="width-device-width" initial-scale-1>
            <link href="/ui/style.css" rel="stylesheet"/>
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>${heading}</h3>
                <div>${date}</div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>`
    return htmlTemplate;
}
var counter= 0;
app.get('/counter', function (req, res) {
    counter= counter+1;
    res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName', function (req, res) {
   var articleName = req.params.articleName;
   res.send(createTemplate(article[articleName])); //articleName will be article-one
});
var pool = new Pool(config);
app.get('/test-db'), function(req, res){
    pool.query('SELECT* FROM test', function(err, result){
      if(err){
          res.status(500).send(err.toString());
      }  else{
          res.send(JSON, string(fy(result.rows)));
      }
    });
};

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

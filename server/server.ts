const express = require('express');
// // import express from 'express';
const bodyParser = require('body-parser');
// const app = express();
// const app = express();
// const app = require('express');
// import express from 'express';
const app = express();
app.use((req: any, res: any, next: any) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
  if ('OPTIONS' === req.Method) {
    res.sendStatus(200);
  } else {
    console.log(`${req.ip} ${req.method} ${req.url}`);
    next();

  }
});

// app.get('/getMessage', (req: any, res: { send: (arg0: { message: string; }) => void; }) => {
//   res.send({message: 'Helloookjmhgfsx'});
// });
// app.listen(4201, '127.0.0.1', function( ) {
//   console.log('listening to port');

// } );
// console.log('hiii');
// import express from 'express';
// const express = require('express');

const port = 3000;
// require API_helper.js
const api_helper = require('./API_helper');

app.get('/', (req: any, res: any) => res.send('Welcome to Make REST API Calls In Express!'));

app.use(bodyParser.json());

app.get('/getAPIResponse', (req: any, res: any) => {
  // API code will be here
  api_helper.make_API_call('https://jsonplaceholder.typicode.com/todos').then((response: any) => {
    console.log(response);
    res.json(response);
  })
  .catch((error: any) => {
    res.send(error);
  });
});


app.listen(port, () => console.log(`App listening on port ${port}!`));

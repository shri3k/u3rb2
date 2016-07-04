import koa from 'koa';
import request from 'request';
import * as route from 'koa-route';
import views from 'co-views';
import serve from 'koa-static';

import matchP from './routes-react';

let app = koa();
app.use(serve(`${__dirname}/../../public/dist`));

var render = views(`${__dirname}/../../public/views`, {
  map: {
    html: 'nunjucks'
  }
});

app.use(route.get('/', function*() {
  var html =
    yield matchP(this.url);
  this.body =
    yield render('index', {
      title: 'Enter your title',
      bodyHtml: html
    });
}));

app.use(route.get('/api', function*() {
  this.body =
    yield new Promise((res, rej) => {
      request('http://beta.json-generator.com/api/json/get/41lDjKmIZ', (err, resp, body) => {
        if (err) rej(err);
        res(body);
      });
    });
}));

app.listen(3000, () => {
  console.log('Listening in ', 3000);
});

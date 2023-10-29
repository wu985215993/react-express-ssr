import express from 'express'
import render from './render';
const app = express();
const port = 8080;

// 防止访问favicon.ico也允许下面的ssr代码
app.use(express.static('public'));

app.get('*', render)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})
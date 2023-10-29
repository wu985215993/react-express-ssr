import App from './App'
import ReactDom from 'react-dom/server'
import React from 'react';
import getScript from './getScript'

export default (req, res) => {
  const coponentHtml = ReactDom.renderToString(<App />);
  // 服务端引入的js元素是client打包后动态生成的bundle
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SSR</title>
  </head>
  <body>
  <div id="root">${coponentHtml}</div>
  </body>
  ${getScript()}
  </html>
  `
  res.send(html);
}
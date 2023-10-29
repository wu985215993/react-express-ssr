import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from './App'
const container = document.getElementById('root')
// 客户端的代码 客户端的js注水到用户的浏览器用的 将注水的代码打包到public进行注水
hydrateRoot(container, <App />,);
// 这段代码在客户端运行 打包后的js在客户端通过public请求
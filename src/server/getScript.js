// 动态获取 public/js 下的js文件
import fs from 'fs'
export default function () {
  const result = fs.readdirSync('./public/js').filter(file => file.endsWith('.js')).map(file => `<script src="./js/${file}"></script>`).join('\n')
  return result
}
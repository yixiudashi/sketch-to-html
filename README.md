# sketch to html

## 更新 
1.修复了使用最新的sketch版本导出的html文件中，字体样式的问题
2.将无用节点Mask和Background去除，并将样式合并到父节点
3.去除了rem的单位转换
4.将已背景输出的图片使用IMG元素替换
5.修复了导出的html文件中，图片路径的问题
6.做了windows平台的兼容
7.增加了输出文件夹的配置

## 使用

```javascript
npm install
```

## 优势
相比 github 上其他的库，特别支持以下特性：

* 更好的处理各种旋转变形属性
* 支持形状内填充图案
* 完整支持渐变色
* 支持 mask 蒙层
* 支持 icon 图片变色
* 支持渐变 mask 蒙层
* css 和 html 分离
* 生成中间数据结构，可以支持转成其他框架视图
* 更完善处理文字排版
* 支持所有图层类型转换，不规则图形转成 svg




// Node.js : 基于Chrome V8引擎封装，独立执行javaScript代码的环境

// 作用 ： 集成前端开发中的工具和技术


// fs模块 ： 封装与本机文件系统的交互操作

// fs模块的使用： 1. const fs = require('fs')
//              2. 写 => fs.writeFile( '文件路径', '写入内容', err => {} )
//                 读 => fs.readFile( '文件路径', (err,data) => {} )
//                 追加 => fs.appendFile( '文件路径', '追加内容', err => {} )


// path模块 ： 封装与文件路径相关的操作

// 绝对路径 ： __dirname => 代表当前文件所在目录的绝对路径 （类似于py中的__file__）

// path模块的使用 ： 1. const path = require('path')
//                 2. 拼接路径 => path.join( 路径1, 路径2, ... )
//                    解析路径 => path.resolve( 路径1, 路径2, ... )


// http模块 ： 创建web服务并响应内容给服务器

// http模块的使用 ： 1. const http = require('http')
//                 2. 创建web服务 => const server = http.createServer()
//                 3. 监听请求事件 => server.on( 'request', (req,res) => {} )
//                 4. 启动web服务 => server.listen( 端口号, () => { console.log('服务启动成功') } )


// ------------------------------------------------------------------


// Node模块化 ： 项目是由多个模块组成的，任何文件都可以称为模块 （模块间要依照标准导入和导出）

// 作用：1. 提高代码复用性  2. 按需导入  3. 独立作用域


// CommonJS模块标准 ： 1. 导出 => module.exports = { key : value }
//                   2. 导入 => const obj = require( '模块名 | 模块文件路径' )


// ECMAScript模块标准 ： 1. 导出 => export default { key : value }
//                     2. 导入 => import obj from '模块名 | 模块文件路径'
//                     3. 命名导出 => export 变量表达式
//                     4. 命名导入 => import { key1, key2, ... } from '模块名 | 模块文件路径'


// 包 ： 将模块、代码及其他资料聚合成一个文件夹 （package.json文件用于记录软件包的状态信息）

// 分类 ： 1. 项目包 => 编写项目业务   2. 软件包 => 封装工具和方法


// npm软件包管理器 ： 下载第三方软件包来使用以及管理版本 （npm是一个前端js的工具）

// npm库 ： 第三方软件包的存储库 （内含各种软件包，可以直接下载并使用）

// npm的使用 ： 1. 初始化清单文件 => 在项目的集成终端中执行 npm  init  -y
//            2. 下载软件包 => 在项目的集成终端中执行 npm  i  软件包名
//            3. 使用软件包 => 在代码中导入软件包 ，如 ： const obj = require( '软件包名' )

// 软件包的使用 ： 1. 找包  2. 下包  3. 配置信息（如何配置可以在官网上查）   4. 使用包


// npm安装所有的依赖 ： 在项目的集成终端中执行 npm  i （会根据package.json文件下载所有的依赖）

// 场景 ： 一般拿到别人的项目，只有package.json文件，缺少node_modules文件夹

// package.json => 软件包的清单文件    node_modules => 所有第三方包的源码仓库


// nodemon全局软件包 ： 检测代码变化，自动重启服务

// nodemon的使用 ： 1. 下包 =>  npm  i  nodemon  -g
//                 2. 启动服务 =>  nodemon   js文件路径 

// 执行js文件 => 1. node  js文件路径    2. nodemon  js文件路径

// 删除软件包 => npm  uni  软件包名


// ----------------------------------------------------------------

// Webpack静态模块打包工具 ： 把静态模块内容压缩，整合，转译等

// webpack -- 一个将静态模块压缩，整合的软件包

// 静态模块 ： 项目中所有的资源文件（html、css、js、图片等）都可以称为静态模块

// webpack的使用 ： 1. 下包 => npm i webpack webpack-cli --save-dev
//                2. 配置 => 在package.json文件中配置 { "scripts" : { "build" : "webpack" } }
//                3. 使用 => 在项目集成终端中执行 npm run build


// Webpack打包入口和出口 ： 1. 入口 => webpack打包的文件
//                       2. 出口 => webpack打包后输出的文件

// 打包入口和出口配置 ： 1. 在根目录新建 webpack.config.js 文件
//                   2. 在 webpack.config.js 文件中导出配置对象
//                        module.exports = {
//                            entry : './src/index.js',      // 入口文件路径 （打包入口文件）
//                            output : {
//                                path : __dirname + '/dist',    // 出口文件夹路径 （打包文件输出位置）
//                                filename : 'main.js'      // 出口文件名称 
//                            }
//                        }
//                   3. 启动打包 => 在项目集成终端中执行 npm run build


// 注意：只有与入口产生直接或间接的引入关系，才会被webpack打包 （webpack只打包入口文件）


// html-webpack-plugin 插件 ： 自动生成html文件并引入打包后的js文件 （打包html）

// 使用 ： 1. 下包 => npm i html-webpack-plugin --save-dev
//        2. 配置 => 在webpack.config.js文件中导出配置对象
//                   const HtmlWebpackPlugin = require('html-webpack-plugin')
//                   module.exports = {
//                        plugins : [
//                            new HtmlWebpackPlugin({
//                                template : './src/index.html',    // 模板html文件路径
//                                filename : 'index.html'    // 输出html文件的文件路径（默认在dist文件夹下）
//                            })
//                        ]
//                   }
//         3. 启动打包 => 在项目集成终端中执行 npm run build



// 注意 ： 插件会根据模板html文件生成新的html文件，并且会自动引入打包后的js文件


// 打包css文件 ： 1. css-loader加载器 -- 解析css代码
//              2. style-loader加载器 -- 把解析的css代码插入到html文件的head标签中

// 使用 ： 1. 下包 => npm i css-loader style-loader --save-dev
//        2. 配置 => 在webpack.config.js文件中导出配置对象
//                   module.exports = {
//                       module : {
//                           rules : [
//                               {
//                                   test : /\.css$/i,    // 匹配css文件
//                                   use : ['style-loader' , 'css-loader']  // 解析css代码，插入到html文件中
//                               }
//                           ]
//                       }
//                   }
//        3. 在入口js文件中引入css文件 =>  import  './css/index.css'
//        4. 启动打包 => 在项目集成终端中执行 npm run build

// 注意 ： 打包时会将在入口js文件中引入的css文件，打包到相应的出口js文件中


// 提取css文件 ： 1. css-loader加载器 -- 解析css代码
//              2. mini-css-extract-plugin插件 -- 提取css代码到单独的文件中

// 注意 ： 打包时会将在入口js文件中引入的css文件，打包后独立生成一个css文件


// 压缩css文件 ： 1. css-loader加载器 -- 解析css代码
//              2. mini-css-extract-plugin插件 -- 提取css代码到单独的文件中
//              3. optimize-css-assets-webpack-plugin插件 -- 压缩css代码

// 注意 ： 1. 打包时会将在入口js文件中引入的css文件，打包后独立生成一个压缩的css文件
//        2. 压缩css文件需要在生产环境下使用


// 打包图片 ： webpack5内置资源打包模块，无需额外加载器

// 使用 ： 1. 配置 => 在webpack.config.js文件中导出配置对象
//                   module.exports = {
//                       module : {
//                           rules : [
//                               {
//                                   test : /\.(png|jpg|gif|jpeg)$/i,    // 匹配图片文件
//                                   type : 'asset',    // 打包图片文件
//                                   generator : {
//                                       filename : 'assets/[hash][ext][query]'    // 图片文件输出路径
//                                   }
//                               }
//                           ]
//                       }
//                   }

// hash -- 根据文件内容生成唯一的哈希值   ext -- 文件扩展名   query -- 图片文件的查询参数

// 注意 ： 1. 若css或js中使用到本地图片会将其自动打包到assets文件夹中
//        2. [hash][ext][query] 用于生成唯一的文件名，避免文件名重复


// node.js与webpack实现模块化开发：
//               1. js文件 ： 1. 编写一系列功能点的独立模块并导出
//                           2. 在入口js文件中导入模块，实现项目业务的开发
//               2. html文件 ： 编写html网页
//               3. css文件 ： 1. 编写css样式
//                            2. 在入口js文件中导入css文件

// js,html和css文件无明面上的联结，都是通过webpack打包时自动联结的

// js  html  css  -->  (html,css,js)        // webpack打包


// --------------------------------------------------------------------------

// webpack开发环境：启动web服务，自动检测代码的变化，热更新到网页

// 搭建webpack开发环境： 1. 下包 => npm i webpack-dev-server --save-dev
//                    2. 设置 => 在webpack.config.js文件中 module.exports = {mode : 'development'}
//                    3. 配置 => 在package.json文件中配置 "scripts" : { "dev" : "webpack server --open" }
//                    4. 使用 => 在项目集成终端中执行 npm run dev

// npm run build -- 生产环境          npm run dev -- 开发环境

// 注意： 1. 开发环境是借助http模块创建8080端口的web服务
//       2. 默认以public文件夹为服务器的根目录 （打开public下的index.html）


// 打包模式： 1. 开发模式 => 调试代码，实时加载  （development）
//          2. 生产模式 => 压缩代码，资源优化  （production）

// 设置打包模式的方式： 1. 在webpack.config.js文件中导出 mode选项
//                             module.exports = { 'mode' : 'development | production' }
//                  2. 在package.json文件中配置mode参数
//                             "scripts" : { "build" : "webpack --mode=development | production" }

// npm run build -> 生产模式      npm run dev -> 开发模式


// 代码环境： 不同环境下使用不同的插件及运行不同的前端js代码
//              => 开发环境 ： 使用css内嵌，更快 （style-loader）
//              => 生产环境 ： 使用css提取，更好观察 （mini-css-extract-plugin）

// cross-env插件 ： 跨平台设置环境变量 （webpack传值给node.js）

// DefinePlugin插件 ： 定义全局变量 （webpack传值给前端js）


// 开发环境报错： webpack打包后，代码被整合压缩，报错不能正确定位源代码位置

// 内置source-map插件 ： 生成源代码映射文件 （定位error和warning在源代码中的位置）

// 使用 ： 1. 配置 => 在webpack.config.js文件中导出配置对象
//                   module.exports = { devtool : 'inline-source-map' }
//        2. 启动打包 => 在项目集成终端中执行 npm run dev

// 注意： source-map插件 不要在生产模式下使用，防止上线后源代码泄露


// --------------------------------------------------------------------------

// CDN（内容分发网络）： 指的是一组分布在不同地理位置的服务器，用于存储和分发网页资源

// 作用： 1. 将一些静态资源和第三方库放在CDN的服务器上，方便用户就近取用
//       2. 用户不用打包第三方库，直接从CDN服务器上获取，大幅提高运行速度

// 使用： 1. 配置 => 在webpack.config.js文件中配置 externals选项 （防止本地第三方库被打包）
//       2. 使用 => 将第三方库都设置为CDN方式的引入


// 多页面打包： 1. 多页面 => 多个html文件，跳转页面实现不同的业务逻辑展示
//            2. 单页面 => 单个html文件，切换DOM的方式实现不同业务逻辑展示 （vue，react）

// webpack打包多入口和多出口： 在webpack.config.js文件中配置
//               1. 多入口 ：  entry : { 
//                                      '模块名1'： path.resolve(__dirname, 'src/入口1.js'),
//                                      '模块名2'： path.resolve(__dirname, 'src/入口2.js') 
//                                    }

//               2. 多出口 ：  output : { 
//                                       path : path.resolve(__dirname, 'dist'),
//                                       filename : './[name]/index.js'        // [name] -- 模块名
//                                     }

//               3. 多网页 ： plugins : [     new HtmlWebpackPlugin({
//                                               template : 'html模板文件路径',
//                                               filename : '输出文件路径',    // 默认在output.path路径下
//                                               chunks : ['模块名1']
//                                           }),
//                                           new HtmlWebpackPlugin({
//                                               template : './public/页面2.html',
//                                               filename : './模板名2/index.html',
//                                               chunks : ['模块名2']
//                                           })
//                                     ]


// 多页面webpack打包的模块开发： 1. html => 抽离除第三方库外的css与js （无明面上的联结）
//                           2. js => 入口js文件导入其他的模块，完成业务逻辑
//                           3. css => 在入口js文件中导入css文件，完成样式的开发

// 多页面webpack -- 各个业务的js、html和css自己生成各自的打包后的html文件



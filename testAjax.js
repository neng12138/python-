
// Ajax ： 一种异步无刷新的技术 （前端js）

// ajax -- 向后端发送HTTP请求 ， 接收后端的HTTP响应

// 实现Ajax : 1. 原生XMLHttpRequset  2. jQuery封装的ajax   3. axios  


// ---------------------------------------------------------------

// axios ： 由 Promise 和 XMLHttpRequest 封装而成， 是一种基于 Promise 的 HTTP 库

// axios使用 ： 1. 导库 -- <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
//             2. 调用 -- axios({url,method,params,data}).then(res => {}).catch(err => {})

// url : 后端的路由 -- axios({ url:'请求地址' })


// method : 请求方法  -- axios({ method:'请求方法' })


// params : 查询参数（明文参数） -- axios({ params:{ key:value } })


// data : 提交参数（密文参数）-- axios({ data:{ key:value } })


// -----------------------------------------------------------


// XMLHttpRequest : 是浏览器提供的一个对象， 用于向服务器发送 HTTP 请求 （原生对象）

// XMLHttpRequest使用 ： 1. 实例化 -- let xhr = new XMLHttpRequest()
//                      2. 打开连接 -- xhr.open( '请求方法' , '请求地址' )
//                      3. 监听事件 -- xhr.addEventListener('loadend' , function() {
//                          if (xhr.readyState == 4 && xhr.status == 200) {
//                              console.log(xhr.response)
//                          }
//                      })
//                      4. 发送请求 -- xhr.send( data )


// xhr的查询参数params ： 直接写在 xhr.open( '请求方法' , '请求地址?key=value' )中即可

// 内置查询参数对象 ： 1. const paramsObj = new URLSearchParams( params )
//                  2. paramsObj.toString()  ->  key=value&key=value
//                  3. 拼接 -- xhr.open( '请求方法' , `${url}?${paramsObj.toString()}` )


// xhr的提交参数form-data ： 1. 写请求头 xhr.setRequestHeader()
//                         2. 直接写在 xhr.send( JSON.stringfy(data) ) 中即可

// xhr.send() 中只能传入字符串，所以通常传入json字符串

// JS中  json字符串  =  JSON.stringfy(  js对象  )
// JS中  js对象  =  JSON.parse(  json字符串  )


// -----------------------------------------------------------


// Promise : 管理一个异步操作的最终状态和结果值的对象

// Promise的三种状态 : 1. 待定（pending） -- 初始状态，未被兑现或拒绝 （ new Promise() ）
//                   2. 兑现（fulfilled） -- 操作成功 （ resolve() -> then() ）
//                   3. 拒绝（rejected） -- 操作失败 （ reject() -> catch() ）

// Promise对象一旦被兑现或拒绝， 状态就不能再改变


// Promise执行顺序 ： 1. 实例化后直接执行Prmoise传入的回调函数 （待定状态）
//                  2. 若回调函数中执行了resolve()方法，则直接执行then()方法 （兑现状态）
//                     若回调函数中执行了reject()方法，则直接执行catch()方法 （拒绝状态）

// 待定 -- 走回调函数    兑现 -- 走then()方法    拒绝 -- 走catch()方法


// Promise的使用 ： 1. const p = new Promise( (resolve,reject) => {
//                             异步操作程序
                            // 成功 -- resolve( 值 ) -> 触发then()方法
                            // 失败 -- reject( 值 ) -> 触发catch()方法
//                    } )
//                 2. p.then( res => {} ).catch( err => {} )


// -----------------------------------------------------------


// 回调函数地狱 ： 多个异步操作，每个异步操作都依赖于上一个异步操作的结果，导致代码嵌套层级过深

// 解决回调函数地狱 ： 1. Promise链式调用  -- 解决了回调函数嵌套的问题，但是代码可读性低
//                  2. async/await  -- 解决了回调函数嵌套的问题，代码可读性高，维护方便


// Promise链式调用 ： 1. 利用 then()方法 返回新Promise对象的特征，实现链式调用
//                  2. 每个 then()方法 中return返回的值，会传给生成的新Promise对象

// new Promise() -> .then(回调函数) -> 新Promise对象 -> .then(回调函数) -> 新Promise对象


// async关键字 ： 修饰函数，代表这是一个异步函数

// async函数声明 -- async function 函数名（ 形参 ） {   函数体   }

// async函数调用 -- 直接调用即可，返回值是一个Promise对象  （ 函数名（实参）.then().catch() ）


// await关键字 ： 只能在async函数中使用，获取Promise对象成功状态或失败状态的结果值 （异步函数的返回值）

// await使用 -- const response = await axios({ url,method,params,data })

// await会阻止异步函数内代码的执行，等待Promise对象的结果值返回，再继续执行

// 成功 -- response = res          失败 -- response = err


// -----------------------------------------------------------


// Promise.all()静态方法 ： 1. 合并多个Promise对象，返回一个新Promise对象
//                        2. 所有Promise对象都兑现，新Promise对象才兑现，执行then()方法
//                        3. 有一个Promise对象拒绝，新Promise对象就拒绝，执行catch()方法

// Promise.all()使用 ： 1. const p = Promise.all( [new Promise , new Promise , new Promise] )
//                     2. p.then( res => {} ).catch( err => {} )


// 配置axios请求基地址 ： 提取公共前缀地址 （配置后axios请求时 baseURL 就不需要写了）

// 配置 -- axios.defaults.baseURL = '协议://域名:端口' （本机域名 -- localhost）

// 配置请求基地址后，axios请求时，url只需要写路径的路由即可 （ url : '/路由' ）


// token : 访问权限的令牌，本质上是一串字符串 （由后端随机生成，每次请求都需要携带）

// 作用 ： 判断是否拥有权限 ， 有权限才能访问某些资源

// 注意 ： 前端判断 token 是否存在， 后端判断 token 是否有效
// const token = localStorage.getItem('token')
// if(!token){   // token不存在
//     location.href = '../login/login.html'   // 跳转回登录页
// }


// axios请求拦截器 ： 发送axios请求前，先执行拦截器

// 使用场景 -- 有公共配置和设置时，统一设置在请求拦截器中

// 使用 -- axios.interceptors.request.use( (config) => {    // config : 请求配置对象
                 //  成功状态执行
//                  return config
//          } ， (err) => {
                //  失败状态执行
//                  return Promise.reject( err )
//          } )


// axios响应拦截器 ： 接收axios响应后，先执行拦截器

// 使用场景 -- 有公共的响应处理操作，统一设置在响应拦截器中

// 使用 -- axios.interceptors.response.use( (res) => {
                //  成功状态执行
//                  return res
//          } ， (err) => {
                //  失败状态执行
//                  return Promise.reject( err )
//          } )


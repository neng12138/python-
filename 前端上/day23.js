
// // js数组
// let arr = ['a','b','c']
// console.log(arr);
// arr.push(1,2)   // 从数组末尾添加元素
// console.log(arr);
// arr.unshift(3,4)    // 从数组开头添加元素
// console.log(arr);
// console.log('------------------------------------');
// arr.pop()   // 从数组末尾删除元素（只能删除一个元素）
// console.log(arr);
// arr.shift()   // 从数组开头删除元素（只能删除一个元素）
// console.log(arr);
// arr.splice(1,2)   // 删除数组的指定元素（从下标1开始删除2个元素）
// console.log(arr);

// let arr = [2,7,3,5,6,1,4]
// console.log(arr);
// // arr.sort()      // 默认升序
// // arr.sort(function(a,b){      // 降序  (匿名函数)
// //     return b-a;
// // })
// // arr.sort((a,b) => b-a)  // 降序   (箭头函数)
// arr.sort((a,b) => a-b)  // 升序   (箭头函数)
// console.log(arr);

// //js函数
// function getSum(a,b){
//     return a+b;
// }
// console.log(getSum(10,20));
// // js 中的函数一次只能返回一个值，如果需要返回多个值，可以用数组
// // py 中的函数一次可以返回一个或多个值，默认放在元组中返回

// let num = 10    // 全局变量
// function getNum(){
//     num = 20;    // 局部变量
//     return num; 
// }
// console.log(getNum());  // 20  （就近原则）

// // 匿名函数
// let fn = function(a,b){    // 函数表达式
//     return a+b;
// }
// console.log(fn(11,22));  // 33

// (function(a,b){console.log(a+b);})(11,22);  // 33  （立即执行函数）
// (function(a,b){console.log(a+b);}(11,22));  // 33  （立即执行函数）

// function fun(x,y){
//     x = x || 0  // 如果x没有值，就给x赋0
//     y = y || 0  // 如果y没有值，就给y赋0
//     console.log(x+y);
// }
// fun(1,2)  // 3
// fun()  // 0  （不传参，默认给x和y赋0）

// function func(e, arr = []){    // 查询e是否在arr中
//     flag = false;
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] === e){
//             flag = true;
//             break;
//         }
//     }
//     return flag;
// }

// function func(e, arr=[]){   // 查询e在arr中的下标,如果没有返回-1
//     let flag = -1;
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] === e){
//             flag = i;
//             break;
//         }
//     }
//     return flag;
// }

// let obj = {    // 定义对象（无序的数据集合）
//     uname : 'pink',
//     age : 18,
//     gender : '男'
// }
// // 键值对的集合 （键默认省略引号，加上也没问题的）
// console.log(obj)
// console.log(typeof obj);  // object类型
// // console.log(obj.length);  // undefined  （对象没有length属性）

// let goods = {
//     uname : '小米10',
//     num : '23714187641831',
//     weight : 64,
//     address: '北京'
// }
// // console.log(goods);
// // console.log(goods.uname);    // 小米10  （通过键名获取值）
// goods.uname = '小米10 PLUS'  // 修改键值对的值
// // console.log(goods);
// goods.color = 'pink'      // 添加键值对
// console.log(goods);
// delete goods.num      // 删除键值对
// console.log(goods);


// for(let key in goods){   // 遍历对象
//     console.log(key);   // uname num weight address color
//     console.log(goods[key]);  // 小米10 PLUS 23714187641831 64 北京 pink
// }
// // js的对象和py的字典都有keys()和values()方法 （获取键和值）
// goods.keys()
// goods.values()

// let obj = {    // 定义对象（无序的数据集合）
//     uname : 'pink',
//     age : 18,
//     gender : '男'
// }

// // 查
// console.log(obj.uname);    // pink  （通过键名获取值）
// console.log(obj.age);    // 18  （通过键名获取值）
// console.log(obj['uname']);    // pink  （通过键名获取值）
// console.log(obj['age']);    // 18  （通过键名获取值）

// // 增
// obj.color = 'pink'      // 添加键值对
// console.log(obj);

// // 改
// obj.uname = '小米10 PLUS'  // 修改键值对的值
// console.log(obj);

// // 删
// delete obj.color      // 删除键值对
// console.log(obj);


// let obj = {
//     uname : '刘德华',
//     sing : function(){
//         console.log('我会唱歌');
//     },
//     dance : function(){
//         console.log('我会跳舞');
//     },
//     getSum : function(x,y){
//         x = x || 0  // 如果x没有值，就给x赋0
//         y = y || 0  // 如果y没有值，就给y赋0
//         console.log(x+y);
//     },
//     getInfo : function(){
//         return '我是一个对象';
//     }
// }
// console.log(obj.uname);    // 刘德华  （通过键名获取值）
// obj.sing()     // 我会唱歌
// obj.dance()    // 我会跳舞
// obj.getSum(1,2)    // 3  （方法赋值）
// console.log(obj.getInfo());    // 我是一个对象  （return返回值）

// let arr = [1,2,3]
// for(let i in arr){
//     // console.log(i);   // 0 1 2  (字符串形式)
//     console.log(typeof i);  // string
//     console.log(arr[i]);  // 1 2 3  (进行了隐式转换)
// }
// // 通常不会用for in遍历数组，因为for in遍历的变量i是字符串形式的，而不是数字形式的（不规范）


// let obj = {
//     uname : '刘德华',
//     age : 18,
//     gender : '男',
//     // hobby : ['唱歌','跳舞','rap']    // 嵌套数组
//     // hobby : { music : 'rap',dance : '钢管舞' }    // 嵌套对象
//     hobby : 'rap'
// }
// for(let key in obj){
//     console.log(key);   // uname age gender hobby   (字符串形式)
//     console.log(obj[key]);  // 刘德华 18 男 rap
// }
// // for in 中对象的遍历不能直接用obj.key,因为 obj.key===obj.'uname'而不是obj.uname


// let student = [
//      {name : '张三',age : 18,gender : '男',hometown : '北京'},
//      {name : '李四',age : 19,gender : '女',hometown : '上海'},
//      {name : '王五',age : 20,gender : '男',hometown : '广州'},
//      {name : '赵六',age : 21,gender : '女',hometown : '深圳'}
// ]

// for (let i = 0; i< student.length; i++){
//     for(let key in student[i]){
//         console.log(`${key} : ${student[i][key]}`);
//     }
//     console.log('-----------------');
// }

// console.log(Math.sqrt(16));  // 4  (开根号)
// console.log(Math.pow(2,3));  // 8  (2的3次方)

// Math.random()   // 生成0-1之间的随机数（包含0，不包含1）
// Math.floor(Math.random()*11)   // 生成0-10之间的随机数（包含0,10）
// Math.floor(Math.random()*6)+5   // 生成5-10之间的随机数（包含5,10）
// Math.floor(Math.random()*(M-N+1))+N   // 生成N-M之间的随机数（包含N,M）
// function getRandom(M,N){
//     return Math.floor(Math.random()*(M-N+1))+N;
// }
// console.log(getRandom(10,20));  // 生成10-20之间的随机数（包含10,20）


// let arr = ['关羽','张飞','赵云','马超','黄忠','刘备','姜维']
// let random_index = Math.floor(Math.random()*arr.length)
// console.log(`本次点名点到了：${arr[random_index]}`)
// arr.splice(random_index,1)
// console.log(arr)

// // 生成随机颜色 (十六进制 或 rgb函数)
// function getRandomColor(flag=true){
//     let random_color = ''
//     if(flag){
//         random_color += '#'
//         let arr = [1,2,3,4,5,6,7,8,9,'a','a','c','d','e','f']
//         for(let i = 0; i < 6; i++){
//             let random_index = Math.floor(Math.random()*arr.length)
//             random_color += arr[random_index]
//         }
//     }
//     else{
//         let arr = []
//         for(let i = 0; i< 3; i++){
//             let random_num = Math.floor(Math.random()*256)
//             arr.push(random_num)
//         }
//         random_color += `rgb(${arr[0]},${arr[0]},${arr[0]})` 
//     }

//     return random_color
// }
// console.log(getRandomColor(false));

let ikun = [
    {src:"https://img2.baidu.com/it/u=2263973031,1080687463&fm=253&app=138&f=JPEG?w=800&h=800",p:'ikun01'},
    {src:"https://b0.bdstatic.com/768c7c8c39a2fada4f108d236309af32.jpg@h_1280",p:'ikun02'},
    {src:"https://b0.bdstatic.com/f62d29a0bda31dc334274000a6bfa27f.jpg@h_1280",p:'ikun03'},
    {src:"https://b0.bdstatic.com/e7d2293ded87339f7eccafc22102991a.jpg@h_1280",p:'ikun04'},
    {src:"https://b0.bdstatic.com/96d84beefe1f610ace2cbf66dab5dc6d.jpg@h_1280",p:'ikun05'},
    {src:"https://pica.zhimg.com/v2-97faf15d76dc006c111dc7ba7069c9b2_r.jpg",p:'ikun06'},
    {src:"https://img0.baidu.com/it/u=2785718427,1436786782&fm=253&app=138&f=JPEG?w=800&h=800",p:'ikun07'},
    {src:"https://pica.zhimg.com/v2-cba3323075ea04f7631d60044dc54ad8_1440w.jpg",p:'ikun08'},
    {src:"https://img1.baidu.com/it/u=721327224,2888181238&fm=253&app=138&f=JPEG?w=801&h=800",p:'ikun09'},
]
for(let i = 0;i < ikun.length;i++){
    document.querySelector('.box').innerHTML += `
        <div>
            <img src=${ikun[i].src} alt="" width="100%">
            <p>${ikun[i].p}</p>
        </div>
    `
}





// // 浅拷贝
// const obj = {
//     name: 'John',
//     age: 18
// }
// // const o = {...obj}    // 展开运算符
// // o.age = 20
// // console.log(o)
// // console.log(obj)
// const o = {}
// Object.assign(o,obj)    // Object.assign()
// o.age = 20
// console.log(o)
// console.log(obj)

// // 展开运算符
// // 用于合并 或 浅拷贝
// // 浅拷贝 -- 只拷贝对象的第一层属性（第二层的数据就拷贝不上，会直接拷贝地址）
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]
// const arr = [...arr1,...arr2]
// console.log(arr);

// const obj1 = {uname:'张三',age:18}
// const obj2 = {gender:'男',hobby:'篮球'}
// const obj = {...obj1,...obj2}
// console.log(obj)



// // 递归函数 : 函数自己调用自己
// function getSum(n){
//     if(n === 0) return 0
//     const sum = getSum(n-1)+n
//     return sum
// }
// console.log(getSum(10))  // 55
// console.log(getSum(100))  // 5050

// // 定时器-间歇函数
// // 间歇函数 -- 按照指定的时间间隔重复执行代码
// let time = 0
// let timer = setInterval(function(){
//     const date = new Date().toLocaleString()   // 当前时间
//     console.log(date)
//     time++
//     if(time === 5){
//         clearInterval(timer)    // 清除定时器
//     }
// },1000)

// // 定时器-延时函数
// // 延时函数 -- 按照指定的时间间隔执行一次代码
// let time = 0
// function getTime(){
//     const date = new Date().toLocaleString()   // 当前时间
//     console.log(date)
//     time++
//     if(time === 5){
//         return
//     }
//     setTimeout(getTime,1000)    // 递归调用
// }
// getTime()


// const obj = {
//     name: 'John',
//     age: 18
// }
// const o = {}
// function deepCopy(newObj,oldObj){
//     for(let key in oldObj){
//         newObj[key] = oldObj[key]
//     }
// }
// deepCopy(o,obj)
// o.age = 20
// console.log(o)
// console.log(obj)


// const obj = {
//     name : 'pink',
//     age : 18,
//     family : {
//         baby : 'blue'
//     }
// }
// const o = {...obj}    // 展开运算符
// console.log(o);
// console.log(o.family === obj.family);   // true  浅拷贝

// // JSON实现深拷贝
// const obj = {
//     name : 'pink',
//     age : 18,
//     family : {
//         baby : 'blue'
//     }
// }
// // 1. 先把对象转换为JSON字符串
// // 2. 再把JSON字符串转换为对象，这样就得到一个新的副本
// const o = JSON.parse(JSON.stringify(obj))    // JSON实现深拷贝
// o.family.baby = 'red'
// console.log(o)
// console.log(obj)
// console.log(o.family === obj.family);   // false  深拷贝


// function func(x,y){
//     if( !x || !y){   // x和y有一个为空（false），就进入if语句
//         throw new Error('参数有误')   // 抛出异常
//     }
//     return x+y
// }
// console.log(func(1,2));  // 3
// console.log(func(1));    // 报错：参数有误
// console.log(func());    // 报错：参数有误

function func(){
    try{
        const arr = []
        arr = [1,2,3]  
    }
    catch(e){   // 捕获异常
        console.log(e.message);   // 输出异常信息
        return   // 终止函数
        // throw new Error('参数有误')   // 抛出异常
    }
    finally{   // 无论是否有异常，都会执行
        console.log('finally');
    }

    console.log('end');
}
func()



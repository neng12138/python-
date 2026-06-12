
//  自执行函数 ： 不会再网页控制台显示函数的js代码，直接返回函数的结果

// //    （自执行函数）  hook cookie        --- 脚本代码
// (function(){
//     'use strict';
//     Object.defineProperty(document,'cookie',{
//         get: function(){
//             // debugger;
//             return '';
//         },
//         set: function(value){
//             debugger;
//             return value;
//         },
//     });
// })();


// //  （自执行函数） 精准 hook Cookie 的 v 关键字          --- 脚本代码
// (function(){
//     'use strict';
//     var cookieTemp = '';
//     Object.defineProperty(document,'cookie',{
//         set: function(value){
//             if(value.indexOf('v') != -1){
//                 debugger;
//             }
//             console.log('Hook捕获到Cookie设置->',value);
//             cookieTemp = value;
//             return cookieTemp;
//         },
//         get: function(){
//             // debugger;
//             return cookieTemp;
//         },
//     });
// })();



//  显然这个不是自执行代码块
//      监听debugger函数的构造（解决网页debugger问题）          --- 脚本代码
AAA = Function.prototype.constructor;
Function.prototype.constructor = function(a){
    if (a == 'debugger'){
        return function(){};
    }
    return AAA(a);
};
//    执行方式 ： 在控制台直接执行这段代码块







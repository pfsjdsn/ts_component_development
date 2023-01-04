// 泛型第一部分
/**
 * 不事先指定类型，在使用时指定类型
 */
function echo2(arg) {
    return arg;
}
var str = 'str';
// const result  = echo2(str)
var result1 = echo2('str');
// const result2:true  = echo2('str')
// 元组类
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var result2 = swap(['string', 123]);
function echoIwithLength(arg) {
    console.log(arg.length);
    return arg;
}
var str1 = echoIwithLength('str');
var obj = echoIwithLength({ length: 10 });
var arr2 = echoIwithLength([1, 2, 3]);
// echoIwithLength(12)
// 泛型在类和接口中的使用
// 队列 
var Queue = /** @class */ (function () {
    function Queue() {
        // 此处data用了断言
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        return this.data.push(item);
    };
    Queue.prototype.pop = function () {
        // shift() 把第一个元素从其中删除
        return this.data.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.push(1);
queue.push('str');
// pop() 移除最后一个数组元素
// toFixed() 四舍五入为指定小数位数的数字
console.log(queue.pop().toFixed());
console.log(queue.pop().toFixed());

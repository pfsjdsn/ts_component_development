// 泛型第一部分

/**
 * 不事先指定类型，在使用时指定类型
 */

function echo2<T>(arg:T):T{
    return arg
}
const str:string = 'str'
// const result  = echo2(str)
const result1  = echo2('str')
// const result2:true  = echo2('str')

// 元组类
function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}
const result2 = swap(['string', 123])


// 约束泛型
/**
 * extends关键字
 */

// 此处length为属性
interface IwithLength{
    length:number
}
function echoIwithLength<T extends IwithLength>(arg:T):T{
    console.log(arg.length)
    return arg
}

const str1  = echoIwithLength('str')
const obj  = echoIwithLength({length:10})
const arr2  = echoIwithLength([1,2,3])
// echoIwithLength(12)


// 泛型在类和接口中的使用

// 队列 
// 类中的使用
class Queue<T>{
    // 此处data用了断言
    private data = <any>[]
    push(item:T){
        return this.data.push(item)
    }
    pop():T{
        // shift() 把第一个元素从其中删除
        return this.data.shift()
    }
}

const queue = new Queue<Number>()
queue.push(1)
// pop() 移除最后一个数组元素
// toFixed() 四舍五入为指定小数位数的数字
console.log(queue.pop().toFixed());

// 接口中的使用
interface keyPair<T,U>{
key:T,
value:U
}
let kp1:keyPair<number, string> = {key:1, value:'string'}
let kp2:keyPair<string, number> = {key:'string', value:2}
let arr:number[] = [1,2,3]
let arr2:Array<number> = [1,2,'str']
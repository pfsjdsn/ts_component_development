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
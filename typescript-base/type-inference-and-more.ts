// 类型推论、联合类型和类型断言

// 类型推论
/**
 * typescript在没有明确指定类型时，推论出一个类型
 */
let str = 'str'
str = 123

// 联合类型
/**
 * 只能访问此联合类型中共有的属性和方法
 */
let numberOrString:number | string
numberOrString = 'abc'
numberOrString = 123
numberOrString.valueOf()
numberOrString.toString()

// 类型断言
/**
 * 用as关键字告诉编译器你比它更了解这个类型，并不应该发出这个错误
 */

function getLength(input:string | number):number {
    const str = input as string
    if(str.length){
        return str.length
    }
    else{
        const number = input as number
        return number.toString().length
    }
}

// 类型守卫 type gurad
/**
 * 遇到联合类型，使用条件语句，自动帮助缩小这个类型范围
 */
function getLength2(input:string | number):number {
   if(typeof input === 'string'){
    return input.length 
   }
   else{
    return input.toString().length
   }
}
//  类型别名，字面量和交叉类型

let sum:(x:number,y:number) =>number
// @ts-ignore
const result = sum(1,2)
type PlusType = (x:number,y:number) =>number
let sum2:PlusType
// @ts-ignore
const result4 = sum2(2,3)


// 联合类型类
type StrOrNumber = string | number
let result3:StrOrNumber = '123'
result3 = 123

// 字面量
const str2:'name' = 'name'
const number:1 = 1
type Directions = 'up' | 'down' | 'left' | 'right'
let toWherr:Directions = 'right'

// 交叉类型
/**
 * 把几种类型合并起来
 * 用&表示  
 */

interface IName{
    name:string
}
type IPerson = IName & {age:number}
let person:IPerson = {name:'123', age:123}
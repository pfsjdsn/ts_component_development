// 内置类型

const a:Array<number> = [1,2,3]
const date = new Date()
date.getTime()
const reg = /abc/
reg.test('abc')

// 内置对象
Math.pow(2,2)

// DOM and BOM
let body  = document.body
let allLis = document.querySelectorAll('li')
allLis.keys()

document.addEventListener('click',(e) => {
    e.preventDefault()
})

// Partial 可选
interface IPerson1{
    name:string
    age:number
}
let demo:IPerson1 = {name:'demo', age:123}
type IPartial = Partial<IPerson1>
let demo2:IPartial = {name:'demo'}

// Omit 返回的类型可以忽略某个传入的属性
// 此处是忽略name属性
type IOmit = Omit<IPerson1, 'name'>
let demo3:IOmit = {age:30}
// interface 接口初探
/**
 * 对对象的形状进行描述
 * Duck Typing (鸭子类型)
 */

interface Person{
    // readonly 只读
    // readonly 和 const 类似，readonly用于属性，const用于变量
    readonly id:number;
    name:string;
    //  ? 表示可选
    age?:number;
}
let ximing:Person = {
    id:1,
    name:'ximing',
    age:20
}

ximing.id = 111
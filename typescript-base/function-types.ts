// 函数类型

// 定义输入类型、个数，返回类型
// ? 表示可选
function add(x:number,y:number,z?:number):number{
    if(typeof z === 'number'){
        return x+y+z
    }
    else{
        return x+y
    }

}

const add1 = (x:number,y:number,z?:number):number =>{
    if(typeof z === 'number'){
        return x+y+z
    }
    else{
        return x+y
    }

}

// let add2:string = add
let add2:(x:number, y:number, z?:number) => number = add

// 函数类型写法
interface ISum{
    // 返回number类型
    (x:number, y:number, z?:number) :number
}
let add3:ISum = add
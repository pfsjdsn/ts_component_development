// 枚举

// 数组枚举
enum Direction {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction.Up); // 0
console.log(Direction[0]); // Up

// 字符串枚举
enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Left',
}
const value = 'Up'
if(value === Direction2.Up){
console.log('go up！');

}

// 常量枚举 
/**
 * 逻辑简单，提升性能
 */
const enum Direction3 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Left',
}
const value2 = 'Up'
if(value2 === Direction3.Up){
console.log('go up2！');

}
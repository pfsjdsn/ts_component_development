// 枚举
// 数组枚举
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up); // 0
console.log(Direction[0]); // Up
// 字符串枚举
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Left";
})(Direction2 || (Direction2 = {}));
var value = 'Up';
if (value === Direction2.Up) {
    console.log('go up！');
}
var value2 = 'Up';
if (value2 === "Up" /* Direction3.Up */) {
    console.log('go up2！');
}

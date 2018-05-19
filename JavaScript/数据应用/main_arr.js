//第 4 节 基本数据处理 · 数组
//增查改删是数据库应用领域中最常见的操作，这在数组也一样

//增加内容
//添加在末端
const arr = [];
arr.push(1);
arr.push(4,"4")
console.log(arr);

//添加在首端
const arr2 = ["h","q"];
arr2.unshift("我从数组首端插入");
console.log(arr2);

//插入数组中间
const arr3 = [3,6,7,9,"dd"];
arr3.splice(1,0,"我在第二个元素位置");
console.log(arr3);

//查找内容
const arr4 = [1,4,6,8,0,2,4,9,34];
const num = arr4.filter(function(x){
    return x%2 !=0;
})
console.log(num);

//删除内容
const arr5 = [1,4,6,8,0,2,4,9,34];
arr5.splice(2,4);
console.log(arr5)

//更新内容 直接通过下标重新赋值arr[4]=value

//封装数组操作工具
const arrayUtils = {
    //增加内容
    append(arr,...element){
        arr.push(...element)

        return arr
    },

    prepend(arr,...element){
        arr.unshift(...element)

        return arr
    },

    insert(arr,index,...element){
        arr.splice(index,0,...element)

        return arr
    },
    //删除内容
    remove(arr,index){
        arr.splice(index,1)

        return arr
    }
}

const arr6 = []
arrayUtils.append(arr6,3);
arrayUtils.prepend(arr6,"qian")
arrayUtils.insert(arr6,1,2)
arrayUtils.remove(arr6,0)

console.log(arr6)

//转换
const arr7 = [72,100,108,108,99]

const addArr = arr7.map(function(ascii){
    return String.fromCharCode(ascii)
})
console.log(addArr)

//聚合
const arr8 = ["我","是","中","国","人"]

const t = arr8.reduce(function(l,r){
    return l+r
})
console.log(t)

const arr9 = [1,2,3,4,5];
var arr9To = arr9.map(function(x){
    return 'a'+x;
});
console.log(arr9To);

const arr10 = [1,2,3,4,5];
var  baseAscii = 96;
var arrTest2 = arr10.map(function(x){
    var base = baseAscii+ x;
    var letter =String.fromCharCode(base);
    return letter + x;
});
console.log(arrTest2);

const arr11 = [1,2,3,4,5];
let arrTest3 = arr11.map(function(x){
    return x*x;
})
console.log(arrTest3);

const arr12 = [0,0,0,0,0];
let arrTest4 = arr12.map(function(x,index){
    var baseAscii = 65;
    return String.fromCharCode(baseAscii+index);
})
console.log(arrTest4);

const arr13 = [1,2,3,4,5];
let arrTest5 = arr13.slice(1,4)
console.log(arrTest5)

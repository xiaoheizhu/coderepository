// 1.map()不改变原数组并返回一个新数组，和forEach()改变原数组
// 2.push()向数组末尾添加一个或者多个元素，改变原数组。pop()在数组末尾删除一个元素并返回该元素，改变原数组

// 3.join()将数组的项通过指定方式生成字符串，不改变原来的数组，返回新的字符串
/* let arr = [1,2,3,4,5]
 console.log(arr.join("-"))
 */
// 4.contact()连接多个数组并返回新数组。注意若有复杂数据类型，该方法是浅拷贝
/* let arr1 = [1,2,3]
let complex_type = [{"id":0},{"id":1}]
let arr_contact=arr1.concat(complex_type)
console.log("original=====>",...arr_contact)
complex_type[0].id=2
console.log("new=====>",...arr_contact) */
//apply(this,[arg1,arg2……]) 编写用于不同对象的方法--借调
/* let arr_apply1 = [1,2,3]
let arr_apply2 = [4,5,6]
arr_apply1.push.apply(arr_apply1,arr_apply2)
console.log(arr_apply1)
console.log(arr_apply2) */

//4.splice(start,count,item)删除数组中的数据或者为数组添加数据，第一个参数为位置，第二个参数为位数，后面的item为替换的数据
// slice(start,end)对数组截取某部分的数据

// 5.reduce(callback(preValue,curValue,index,arr),[inititalValue])
// 1.数组去重
const arr = [1,2,4,2,5,22,77,33,4,2,1]
const a = arr.reduce((pre,cur,index) => {
  return pre.includes(cur)?pre:[...pre,cur]},[])
console.log()
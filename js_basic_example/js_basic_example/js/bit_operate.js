let hex = 0x160
let hex_high_eight_byte = hex << 8
let hex_lower_eight_byte = hex >> 8
let hex1 = hex_high_eight_byte>>8 | hex_lower_eight_byte
// let xor = 0x12 ^ 0xFF
console.log(hex.toString(2))
console.log(hex_high_eight_byte.toString(2))
console.log(hex_lower_eight_byte.toString(2))
console.log(hex1.toString(2))
// console.log(0xFF.toString(2))
// console.log(xor.toString(2))

let num = Math.floor(Math.random()*100+1)
//判断偶数
if( (num&1) == 0){
	console.log(num+"是偶数")
}else{
	console.log(num+"不是偶数")
}

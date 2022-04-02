// 1.async 异步，就告诉这个函数有异步执行的代码

async function getData(){}
/* 
	像这样使用async的标识，就是说getData函数里面有异步的东西，
	那么异步的东西是什么呢，其实就是Promise，就算你不写，直接return
	个任何，它都会封装一下，让你return的东西就出现在一个Promise的resolve()里面
*/

/* 
	2.await 就是等待async执行完，才会执行后面的东西，等待的东西是异步的
	它就会阻塞当前代码？？
	别担心，它只能在async函数里使用，虽然阻塞，但是是异步的
*/

async function getData_1(){
	return '100'
}

function getData_2(){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{resolve('200')},2000)
	})
}

async function run(){
	const data_1 = await getData_1()
	console.log(data_1)
	
	const data_2 = await getData_2()
	console.log(data_2)
}

run()

/* 
	getData_1前面即使不声明async，使用await也是可以的，因为await啥都能等待
	1.如果等到的是promise，它就把promise的resolve的参数返回
	2.如果等到的是普通东西，就直接返回这个东西
 */
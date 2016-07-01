'use strict';

const http = require('http');

class FakeExpress {
	constructor(){
		this.server = http.createServer((req, res) => {
			res.end('hello, server created');
		});
		this.funcs = [];
	}

	get(string, action){
		//store in array
		let obj = {
			path : string,
			func : action,
			method: 'GET'
		};
		this.funcs.push(obj);
	}

	pathMatch(a, b){
		let aArray = a.split('/');
		let bArray = b.split('/');
		let flag = false;
		if(aArray.length == bArray.length){
			for(var i = 0; i< aArray.length; i++){
				if((!aArray[i].startsWith(':') && !bArray[i].startsWith(':')) && aArray[i] == bArray[i]){
					flag = true;
				}else if(aArray[i].startsWith(':') && bArray[i].startsWith(':')){
					flag = true;
				}else{
					flag = false;
				}
			}
		}
		return flag;
	}

	listen(port, func){
		this.server.on('request', (req, res) => {
			let funcArray = this.funcs;
			console.log(funcArray);
			for(var i = 0; i < funcArray.length; i++){
				let obj = funcArray[i];
				let pathmatch = pathMatch(req.url, obj.path);
				if(req.method == obj.method && pathmatch){
					obj.func;
					break;
				}
			}
		})
		this.server.listen(port, func);
	}
}

export default FakeExpress;
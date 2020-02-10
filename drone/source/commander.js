//Comandos do drone
class Commander {
	constructor(socket, host, port){
		this.socket = socket;
		this.host = host;
		this.port = port;
	}

	sendInitCommand(){

		 return new Promise((res, rej) => {
		 	this.socket.send('command',0,'command'.length, this.port, this.host, (err) => {
		 		if(err){
		 			return rej(err)
		 		}else{
		 			return res()
		 		}
		 	})
		 })
	}
//decola
	sendTakeOff(){
		 return new Promise((res, rej) => {
		 	this.socket.send('takeoff',0,'takeoff'.length, this.port, this.host, (err) => {
		 		if(err){
		 			return rej(err)
		 		}else{
		 			return res()
		 		}
		 	})
		 })
	}
//Pousa
	sendLand(){
		 return new Promise((res, rej) => {
		 	this.socket.send('land',0,'land'.length, this.port, this.host, (err) => {
		 		if(err){
		 			return rej(err)
		 		}else{
		 			return res()
		 		}
		 	})
		 })
	}
//Frente
	sendForward(distance=20){
		 return new Promise((res, rej) => {
		 	this.socket.send(`forward ${distance} `,0,'forward'.length, this.port, this.host, (err) => {
		 		if(err){
		 			return rej(err)
		 		}else{
		 			return res()
		 		}
		 	})
		 })
	}
//Para Trás
sendBack(distance=20){
		 return new Promise((res, rej) => {
		 	this.socket.send(`back ${distance} `,0,'back'.length, this.port, this.host, (err) => {
		 		if(err){
		 			return rej(err)
		 		}else{
		 			return res()
		 		}
		 	})
		 })
	}	
//Direita
sendRight(distance=20){
		 return new Promise((res, rej) => {
		 	this.socket.send(`right ${distance} `,0,'right'.length, this.port, this.host, (err) => {
		 		if(err){
		 			return rej(err)
		 		}else{
		 			return res()
		 		}
		 	})
		 })
	}
//Esquerda
sendLeft(distance=20){
		 return new Promise((res, rej) => {
		 	this.socket.send(`left ${distance} `,0,'left'.length, this.port, this.host, (err) => {
		 		if(err){
		 			return rej(err)
		 		}else{
		 			return res()
		 		}
		 	})
		 })
	}
//Rotacionar Drone
sendCw(distance=20){
		 return new Promise((res, rej) => {
		 	this.socket.send(`cw ${distance} `,0,'cw'.length, this.port, this.host, (err) => {
		 		if(err){
		 			return rej(err)
		 		}else{
		 			return res()
		 		}
		 	})
		 })
	}
//Rotacionar Drone
sendCcw(distance=20){
		 return new Promise((res, rej) => {
		 	this.socket.send(`ccw ${distance} `,0,'ccw'.length, this.port, this.host, (err) => {
		 		if(err){
		 			return rej(err)
		 		}else{
		 			return res()
		 		}
		 	})
		 })
	}
//Flip Para Trás
sendFlip(){
		 return new Promise((res, rej) => {
		 	this.socket.send('flip b',0,'flip b'.length, this.port, this.host, (err) => {
		 		if(err){
		 			return rej(err)
		 		}else{
		 			return res()
		 		}
		 	})
		 })
	}
/*
//Flip Para Frente
sendFlip(){
		 return new Promise((res, rej) => {
		 	this.socket.send('flip f',0,'flip f'.length, this.port, this.host, (err) => {
		 		if(err){
		 			return rej(err)
		 		}else{
		 			return res()
		 		}
		 	})
		 })
	}
*/

/*
//Flip Para lado Left(Esquerda)
sendFlip(){
		 return new Promise((res, rej) => {
		 	this.socket.send('flip l',0,'flip l'.length, this.port, this.host, (err) => {
		 		if(err){
		 			return rej(err)
		 		}else{
		 			return res()
		 		}
		 	})
		 })
	}
*/

/*
//Flip Para lado right(Direita)
sendFlip(){
		 return new Promise((res, rej) => {
		 	this.socket.send('flip r',0,'flip r'.length, this.port, this.host, (err) => {
		 		if(err){
		 			return rej(err)
		 		}else{
		 			return res()
		 		}
		 	})
		 })
	}
*/



//Status Bateria
getBattery(){
		 return new Promise((res, rej) => {
		 	this.socket.send('battery ?',0,'battery ?'.length, this.port, this.host, (err) => {
		 		if(err){
		 			return rej(err)
		 		}else{
		 			return res()
		 		}
		 	})
		 })
	}
}

module.exports = Commander;
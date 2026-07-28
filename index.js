//console.log("Hello I m using js")
// import math from 'mathjs';
// const sum=function(a,b){
//     return a+b;
// }
// console.log("Sum =",sum(5,6));
// function sumofsquare(a,b){
//     return math.square(a) + math.square(b);
// }
// console.log("Sum of squares =",sumofsquare(5,6));

// const sum=(a,b)=>{return a+b;}
//IIFE-Immediately Invoked Function Expression
// (()=>{
//     console.log("Heyyy...using IIFE")
// })();
// var a=23;
// console.log(typeof a);
// if(a<40){
//     let a=40;
//     console.log("value of a inside block="+a)
// }
// console.log("value of a outside block="+a)

//Callback function

// 
// function msgWithclk(clbk,msg){
//          const result=clbk(40,50);
//          console.log("hiii"+msg+"your result is "+result)
// }
// msgWithclk((a,b)=>{return a+b},"Sum");
// function login(error,msg){
//     if(error){
//         console.log("Error is "+error)
//     }
//     else{
//         console.log(msg)
//     }
// }
// function loginHandler(username,password,clbk){
//     if(username=="aditya01"&&password=="12345"){
//         clbk(null,"Login Successfull")
//     }
//     else{
//         clbk("Username or password is incorrect",null)
//     }
// }
// loginHandler("aditya01","12345",login)

console.log("One")
setTimeout(()=>{console.log("Two")},1000)
console.log("Three")
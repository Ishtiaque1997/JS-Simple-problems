// const fibo=[1,2];
// for(let i=2;i<=10;i++){
//  fibo[i]=fibo[i-1]+fibo[i-2]
// }
// console.log(fibo)

function fiboSeries(num){

 if(typeof num!='number'){
  return 'error'
 }
 if(num<2){
  return 'enter a positive number'
 }
const fibo=[0,1];
 for(let i=2;i<=num;i++){
 fibo[i]=fibo[i-1]+fibo[i-2]
 }
 return fibo;
}
const series=fiboSeries(10);
console.log(series)
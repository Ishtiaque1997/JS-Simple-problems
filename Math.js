//absolute(abs)
const myNumber=-5;
const output=Math.abs(myNumber);
// console.log(output)
//ceiling and floor
const number=2.2;
const res=Math.ceil(number);
const res2=Math.floor(number);
// console.log(res,res2)
//round
const num=3.5;
const result=Math.round(num);
// console.log(result)
//random numbers
const op=Math.random()*100;
// console.log(op);
//
const selected=[]
for(let i=0;i<10;i++){
 const numbers=Math.random()*100;
 const integer=Math.round(numbers);
 if(selected.indexOf (integer)==-1){
   selected.push(integer);
 }
 else{
  console.log('found duplicate',integer)
 }
}
console.log(selected)
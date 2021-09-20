const business=450;
const minister=9050;
const army=70000;
//first approach
if(business>minister && business>army){
 console.log('bussiness is the best')
}
else if(minister>business && minister>army){
 console.log('minister is the best')
}
else{
 console.log('army ios bigger')
}
//second approach
var max=Math.max(business,minister,army);
// console.log(max)
//function
function findLargest(first,second,third){
 if(first<second && first<third){
  return first;
 }
 else if(second<first&&second<third){
  return second;
 }
 else{
  return third;
 }
}
const largest=findLargest(45600,9080,10000);
console.log(largest)
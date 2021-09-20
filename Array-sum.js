const numbers=[11,22,33,44,55,66,77,88];
// let sum=0;
// for (let i=0;i<numbers.length;i++ ){
//  const element=numbers[i];
 
//  sum=sum+element;

// }
 // console.log(sum)
//function approach
 function arrayTotal(numbers){
    let sum=0;
    for (let i=0;i<numbers.length;i++ ){
     
     let element=numbers[i];
     
     sum=sum+element;
      
}
return sum;


 }
 const total=arrayTotal([11,22,33,44,55,66,77,88]);
 console.log(total)
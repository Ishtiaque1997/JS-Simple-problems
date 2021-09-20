function smallestElement(numbers){
    let smallest=numbers[0];
    for(let i=0;i<numbers.length;i++){
        const element=numbers[i];
        if(element<smallest){
            smallest=element;
        }
      
    }
      return smallest;

}

const numbers=[23,54,67,89,09,43];
const lowest=smallestElement(numbers);
const lowest2=smallestElement([-23,-67,-90])
console.log(lowest,lowest2)
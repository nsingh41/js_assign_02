
let nav=[]

 
 arrAdd(nav)
 
function arrAdd(nav){
nav.push(1,2,3)
console.log("Initial Values Of Array Elements",nav)
for(let i=0;i<nav.length;i++){
    nav[i]=nav[i]+2
}
 console.log("Values of array Elements after Addition",nav)
}
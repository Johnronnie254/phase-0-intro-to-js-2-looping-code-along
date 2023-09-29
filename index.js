// Code your solutions in this file
//task1: Returns a new array with a display message to the members of the array
const members = ["Guadalupe", "Ollie", "Aki"]

const newCards = members.map(function writeCards(members, surprise){
   
    for(let i= 0; i < members.length; i++){
      // console.log ( `Thank you, ${members[i]}, for the wonderful ${event} gift!`);
    
    return`Thank you, ${members}, for the wonderful ${"surprise"} gift`;
    
    }
}
)

console.log(newCards);

//task 2: 
function countDown(){
let number= 10;
while( number >= 0){
    console.log(number--);
}
}

  

console.log(countDown());
 
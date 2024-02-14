function softUniReception (array){
    let firstCapacity = Number(array.shift());
    let secondCapacity = Number(array.shift());
    let thirdCapacity = Number(array.shift());
    let studentCount = Number(array.shift());
    let totalPerHour = firstCapacity+secondCapacity+thirdCapacity;
 
    let hoursNeeded = 0;

  for(let i=0; i<studentCount;i++){
    if (i%totalPerHour===0){
        hoursNeeded++;
    } if(hoursNeeded%4===0){
        hoursNeeded++;
    }
  
  }

    console.log(`Time needed: ${(hoursNeeded)}h.`);
}
softUniReception(['5','6','4','20']);
softUniReception(['1','2','3','45']);
softUniReception(['3','2','5','40']);
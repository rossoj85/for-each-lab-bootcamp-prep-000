function iterativeLog(array) {
  array.forEach((element,index)=>{console.log(`${index}: ${element}`)});
}

function iterate(callback){
  var wants =["Gibson Les Paul","Turntable", "69 Ford Mustang"];

  wants.forEach(callback);

  return wants;
}

function doToArray(array,callback){
  array.forEach(callback);
}

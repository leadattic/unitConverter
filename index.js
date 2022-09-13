const input = document.getElementById('input')
const output = document.getElementById('output')
const convfrom = document.getElementById('whattoconvertfrom')
const convto = document.getElementById('whattoconvertto')
function log(log){
  console.log(log)
}





function convert(){
if(convfrom.value == 'fot' && convto.value == 'meter')  {
 output.value = input.value / 3.28084 
  log('success')
}else if(convfrom.value == 'meter' && convto.value == 'fot'){
  output.value = input.value * 3.28084 
  log('success')
}else if(convfrom.value == 'meter'){
  log('N/A')
}else if(convfrom.value == 'fot'){
  log('N/A')
}else if(convfrom.value == 'liter' && convto.value == 'gallon'){
  output.value = input.value * 0.264172
  log('success')
}else if(convfrom.value == 'gallon' && convto.value == 'liter'){
   output.value = input.value / 0.264172
  log('success')
}else{log('Oppsess')}




  
}
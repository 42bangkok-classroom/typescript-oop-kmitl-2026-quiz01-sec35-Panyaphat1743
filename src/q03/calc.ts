const oper = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])
if(Number.isNaN(num1)||Number.isNaN(num2)||num2 == 0){
  console.log('Invalid input')
  process.exit()
}
switch(oper){
  case 'add':console.log(num1+num2)
  break;
  case 'sub':console.log(num1-num2)
  break;
  case 'mul':console.log(num1*num2)
  break;
  case 'div':console.log(num1/num2)
  break;
  default :console.log('Invalid operator')
  break;
}
const inp = Number(process.argv[2])
if(Number.isNaN(inp)){
  console.log('Invalid Input')
}else if(inp<0 || inp > 100){
  console.log('Invalid Input')
}else{
  if(inp >= 80){
    console.log('A')
  }else if(inp >=70){
    console.log('B')
  }else if(inp >=60){
    console.log('C')
  }else if(inp >= 50){
    console.log('D')
  }else{
    console.log('F')
  }
}
const inp = Number(process.argv[2])
if(Number.isNaN(inp)){
  console.log('Invalid Input')
}else if(inp<0 || inp > 100){
  console.log('Invalid Input')
}else{
  if(inp >= 80){
    console.log('Grade is A')
  }else if(inp >=70){
    console.log('Grade is B')
  }else if(inp >=60){
    console.log('Grade is C')
  }else if(inp >= 50){
    console.log('Grade is D')
  }else if(inp >= 0 && inp < 50){
    console.log('Grade is F')
  }else{
    console.log('Invalid Input')
  }
}
const bal = Number(process.argv[2])
const amou = Number(process.argv[3])
if(Number.isNaN(bal) || Number.isNaN(amou)){
  console.log('Invalid Input')
}
if(bal < amou){
  console.log('Insufficient balance')
}
if(bal > amou){
  if(amou > 5000){
    console.log('Exceeds per-withdrawal limit')
  }
  if(amou <= 5000){
    console.log('Withdrawal approved')
  }
}
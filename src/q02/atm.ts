const bals = process.argv[2]
const amous = process.argv[3]
const bal = Number(bals)
const amou = Number(amous)
if(Number.isNaN(bal) || Number.isNaN(amou)||bals === ''||amous ===''){
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
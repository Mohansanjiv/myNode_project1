const{readFile, writeFile}=require('fs');

console.log("start");

readFile('./content/first.txt', 'utf8',(err,result)=>{
   if (err) {
     console.log(err);
   }
   console.log(result);
   const first = result;
   readFile('./content/second.txt', 'utf8', (err, result)=>{
    if (err) {
        console.log(err);
      }
      console.log("hi comeplete in nested one");
    const second = result
   writeFile('./content/result-async.txt',` hi i am async text file ${first} and ${second}`, (err, result)=>{
    if (err) {
        console.log(err);
      }
      console.log(result);
   })
})
})
console.log("now starting with next one");

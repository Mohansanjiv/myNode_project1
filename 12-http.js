const http = require('http');
const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.end('welcome to our hoem page');
        return;
    }
    if (req.url === '/about') {
       res.end('here is our history');
       return;
    }
    res.end(`
    <h1>Opps !</h1>
    <p>we cant find to seem</p>
    <a href="/">go back home</a>
     `
  )  
})
server.listen(5000)
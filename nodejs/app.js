console.log("balajar nodejs")

// import module hello
const hello = require('./hello')

// cara panggil 
hello.mahasiswa()
hello.dosen()

const url =require('url')
const http = require('http')
const fs    = require('fs')
const path =  require('path')

const server = http.createServer((req,res)=>{
if (req. url == '/'){
    res.write('selamat pagi, ini home page')
res.end()
}
else if(req.url=='/about'){
    res.writeHead(200,{"Content-Type": "text/html"})
    res.write ("<h2>ABOUT</h2><P>ini halaman about")
    res.end()
}
else if (req.url=='/contact') {
    fs.readFile(path.join(__dirname,"contact.html"),(err,data)=>{
        res.writeHead(200,{"Content-Type": "text/html"})
        res.write(data)
        res.end()
    })
}

})
// tentukan port
server.listen(5001,()=>{
    console.log('server running')
})
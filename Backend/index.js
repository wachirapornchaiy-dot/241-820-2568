//ทำการ inport http module เพื่อสร้าง server
const http = require('http');
const host = 'localhost';
const port = 8000;

//สร้าง server เพื่อเปิดใช้งาน เว็บผ่านเบราว์เซอร์ ที่ localhost:8000

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('My First Server!');
}

//run server
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
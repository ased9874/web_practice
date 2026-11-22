// http 모듈 불러오기
const http = require("http");
//파일시스템 모듈 불러오기
const fs = require("fs");

const PORT = Number(process.env.PORT) || 3000;

const server = http.createServer((req,res) => {
    // console.log("요청 발생");
    // console.log(req.method);
    // res.setHeader("Content-Type", "text/plain"); // 응답헤더
    // res.write("Hello Node") // 응답 본문
    // res.end(); // 응답 종료
    // res.setHeader("Content-Type", "text/html")
    // const readStream = fs.createReadStream(__dirname + "/index.html","utf8");
    // readStream.pipe(res);

    const {method, url} = req;
    if (method === "GET" && url === "/home") {
        res.statusCode = 200;
        res.end("HOME");
    }
server.listen(PORT, () => {
    console.log(`${PORT}번 포트에서 서버 실행`);
});
// express 모듈 불러오기
const express = require("express");

// 서버 생성
const app = express();
// 포트 설정
const PORT = Number(process.env.PORT) || 3000;

//라우트 설정
app.get('/', (req, res) => {
    res.status(200);
    res.send('Hello Node!');
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.status(200);
    res.send(`${userId} 사용자에 대한 정보요청`);
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

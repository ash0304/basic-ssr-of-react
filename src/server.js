import express from 'express';

const app = express();

const PORT = process.env.PORT || 3001;

// express 用來載入靜態檔案的位置
app.use(express.static('dist'));

// URL設定*，代表接受所有URL，URL路徑會再req.path，res.send能送出HTML字串供前端顯示
app.get('*', (req, res) => {
  res.send(`
    <div>I'm content of web page from server.</div>
  `);
});

// Server啟動!
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

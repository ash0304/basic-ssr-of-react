import express from 'express';

import renderer from './helpers/renderer';

const app = express();

const PORT = process.env.PORT || 3001;

// express 用來載入靜態檔案的位置
app.use(express.static('dist'));

// URL設定*，代表接受所有URL，URL路徑會再req.path，res.send能送出HTML字串供前端顯示
app.get('*', (req, res) => {
  const content = renderer(req, store);
  res.send(content);
});

// Server啟動!
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

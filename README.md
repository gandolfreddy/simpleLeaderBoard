# Leaderboard with D3.js, Socket.io and Node.js

## 使用方式

1. 安裝 [Node.js](https://nodejs.org/en)。
2. 安裝 [ngrok](https://ngrok.com/download)。
3. 下載此專案。
4. 在專案目錄下終端機，執行 `npm install`。
5. 在專案目錄下終端機，執行 `npm run start`。
6. 另外開啟終端機，並切換至專案目錄下，並執行 `ngrok http 3000`。
    > 使用 Ngrok 前，請進入 [dashboard.ngrok.com](https://dashboard.ngrok.com/login)，申請一組帳號並登入 ，取得對應的 Authtoken 後，可於任意終端機／命令列視窗，執行 `ngrok config add-authtoken [此處填入你的 Authtoken]`。
7. 複製 ngrok 產生的網址，貼到瀏覽器中，即可看到網頁（點數排行榜）。
8. 複製 ngrok 產生的網址，後方加上 `/supervisor-admin`，貼到瀏覽器中，即可看到網頁（點數控制台）。

## 參考資料

1. [d3.js - wiki](https://github.com/d3/d3/wiki/TW-Home)
2. [How to set text color for my d3 chart title?](https://stackoverflow.com/questions/22523204/how-to-set-text-color-for-my-d3-chart-title)
3. [The Ultimate `npm run dev`](https://dev.to/lukeocodes/enny-stack-the-express-ngrok-and-nodemon-stack-23j)
4. [D3.js 前的SVG簡介](https://ithelp.ithome.com.tw/articles/10157403)

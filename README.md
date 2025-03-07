This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## tradingview-widget

tradingview [即時圖表小工具](https://tw.tradingview.com/widget/advanced-chart/)


[布林通道](https://zh.wikipedia.org/wiki/布林带)  

「中軌」為股價的平均成本，「上軌」和「下軌」可分別視為股價的壓力線和支撐線。
由布林帶衍生出兩項頗為實用的指標——**「%b指標」**和**「帶寬指標」**，以輔助布林帶的判讀和運用。

BB BB%B BBW  

```js

new TradingView.widget(
{
  ...
  "studies": [
    "BB@tv-basicstudies",
    "BollingerBandsR@tv-basicstudies",
    "BollingerBandsWidth@tv-basicstudies"
  ]
}
```

[平滑異同移動平均線(MACD)](https://tw.tradingview.com/scripts/macd/)

MACD是一種非常流行的技術分析指標，可以用於識別一個股票的總體趨勢。最值得注意的是動量(直方圖)  

當柱狀圖由負翻正，快線往上突破慢線，被視為黃金交叉(預測市場會上漲)，  
表示後續可能會有一波漲幅，投資人通常視為買入信號。  

```js
  new TradingView.widget(
  {
  "studies": [
    "MACD@tv-basicstudies"
  ],
```

Stochastic [隨機震盪指標(KD)](https://tw.tradingview.com/scripts/stochastic/)

隨機震盪指標是一個範圍區間動量震盪指標。隨機震盪指標被設計用來顯示在一個用戶定義時間段內的收盤價位置與高/低範圍之間的比較。
通常情況下，隨機震盪指標用於三件事：識別超買和超賣水平、識別分歧、識別牛市和熊市組合或信號。

[威廉指標(%R)](https://tw.tradingview.com/scripts/williamsr/)

威廉指標(%R)是技術分析中使用的基於動量震盪指標，主要用於識別超買和超賣條件。%R基於用戶定義回顧期的當前關閉和最高處高價的比較。%R在0和-100之間震盪(注意是負值)，讀數更接近零，表明更多超買條件；接近-100表示超賣。通常%R可以基於超買和超賣條件以及總體動量變化來生成設置。

與KD雷同的地方在於，目前絕大多數的投資人也是以-80%、-20%為超賣、超買區的界線，
一旦低於-80%，表示個股正處於超賣的情況，相反的，一旦高於-20%，則正處於超買的情況。

```js

new TradingView.widget(
{
  ...
  "studies": [
    "Stochastic@tv-basicstudies",
    "WilliamR@tv-basicstudies"
  ],
}
```  
 
[威廉鱷魚指標(Alligator)](https://www.itsfun.com.tw/%E9%B1%B7%E9%AD%9A%E6%8C%87%E6%A8%99/wiki-4576424-9268404)

鱷魚指標(Alligator)，有藍、紅、綠三條。藍線，是鱷魚的顎。紅線，是鱷魚的牙齒。綠線，是鱷魚的上唇。
當由下而上依顎－齒－唇排列時，作者喻為鱷魚自睡眠中醒來，則將開始尋找食物發動攻勢，表示即將有多頭行情出現。

```js
  "studies": [
    "WilliamsAlligator@tv-basicstudies"
  ],
```

[順勢指標(CCI)](https://tw.tradingview.com/scripts/commoditychannelindex/)

順勢指標(CCI)是一種動量震盪器。CCI通常用於查找反轉和背離。
CCI指標的分析區間集中在﹣100——﹢100之間，
當CCI＞﹢100時，表明股價進到超買區間，
當CCI＜﹣100時，表明股價進到超賣區間。

```js
  "studies": [
    "CCI@tv-basicstudies"
  ],
```
  


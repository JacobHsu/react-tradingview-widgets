"use client";

import * as React from "react";
import { useRef, useEffect } from "react";
import { TradingNotes } from "./trading-notes";
export function AdvancedChart() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    // https://www.tradingview.com/widget/advanced-chart/
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "BINANCE:BTCUSDT",
      interval: "15",
      theme: "dark",
      width: "65%",
      height: "680", 
      studies: [
        "STD;Keltner_Channels", // 肯特納通道(Keltner Channels, KC)
        "STD;RSI", // 相對強弱指標(Relative Strength Index, RSI)
        "MACD@tv-basicstudies", // 指數平滑移動平均收斂擴散指標(Moving Average Convergence Divergence, MACD)
      ],
      details: true,
    });

    // 看多：價格突破 KC 上軌，MACD 金叉，RSI 40-60
    // 看空：價格跌破 KC 下軌，MACD 死叉，RSI 40-60
    // 金叉（MACD 線上穿信號線）表示多頭動量，死叉（MACD 線下穿信號線）表示空頭動量
    // 超買 RSI > 70：考慮賣出 /超賣  RSI < 30：尋找買入機會
    container.current.appendChild(script);

    return () => {
      if (container.current) {
        const scriptElement = container.current.querySelector("script");
        if (scriptElement) {
          container.current.removeChild(scriptElement);
        }
      }
    };
  }, []);

  return (
    <>
      <div
        className="tradingview-widget-container mb-1"
        ref={container}
        style={{ height: "680px", width: "100%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "calc(100% - 32px)", width: "100%" }}
        ></div>
      </div>
      <TradingNotes />
    </>
  );
}

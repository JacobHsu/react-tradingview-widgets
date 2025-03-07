"use client";

import * as React from "react";
import { useRef, useEffect } from "react";
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
      theme: "dark",
      width: "65%",
      height: "680", 
      studies: [
        "BB@tv-basicstudies",
        "CCI@tv-basicstudies", // Commodity Channel Index overbought/oversold
        "MACD@tv-basicstudies",
        "MAExp@tv-basicstudies", // Moving Average Exponential
      ],
      details: true,
    });

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
  );
}

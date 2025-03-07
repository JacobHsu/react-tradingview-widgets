"use client";

import * as React from "react";
import { useRef, useEffect } from "react";

const createScript = (symbol: string) => {
  const script = document.createElement("script");
  script.src =
    "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
  script.async = true;
  script.innerHTML = JSON.stringify({
    interval: "1m",
    width: 425,
    isTransparent: false,
    height: 380,
    symbol: symbol,
    showIntervalTabs: true,
    displayMode: "single",
    locale: "en",
    colorTheme: "light",
  });
  return script;
};

const appendScriptToContainer = (
  container: React.RefObject<HTMLDivElement>,
  symbol: string
) => {
  if (container.current) {
    const script = createScript(symbol);
    container.current.appendChild(script);
  }
};

const removeScriptFromContainer = (
  container: React.RefObject<HTMLDivElement>
) => {
  if (container.current) {
    const scriptElement = container.current.querySelector("script");
    if (scriptElement) {
      container.current.removeChild(scriptElement);
    }
  }
};

export function TechnicalAnalysis() {
  const containerBTC = useRef<HTMLDivElement>(null);
  const containerETH = useRef<HTMLDivElement>(null);
  const containerSOL = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // https://www.tradingview.com/widget/technical-analysis/
    appendScriptToContainer(containerBTC, "BINANCE:BTCUSDT");
    appendScriptToContainer(containerETH, "BINANCE:ETHUSDT");
    appendScriptToContainer(containerSOL, "BINANCE:SOLUSDT");

    return () => {
      removeScriptFromContainer(containerBTC);
      removeScriptFromContainer(containerETH);
      removeScriptFromContainer(containerSOL);
    };
  }, []);

  return (
    <div className="tradingview-widget-container flex mb-2 md:min-h-20 min-h-28">
      <div
        ref={containerBTC}
        className="tradingview-widget-container__widget mb-4 mr-4"
      ></div>
      <div
        ref={containerETH}
        className="tradingview-widget-container__widget mb-4 mr-4"
      ></div>
      <div
        ref={containerSOL}
        className="tradingview-widget-container__widget"
      ></div>
    </div>
  );
}

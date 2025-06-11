import React, { useEffect, useRef } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { AdvancedChart } from "@/components/tradingview/advanced-chart";
import { TickerTape } from "@/components/tradingview/ticker-tape";
import { TechnicalAnalysis } from "@/components/tradingview/technical-analysis";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Altfins Screener React 元件
function AltfinsScreener() {
  const ref = useRef(null);

  useEffect(() => {
    // https://altfins.com/widgets/crypto-widgets-custom/
    if (!window.customElements?.get("altfins-screener-data-component")) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://cdn.altfins.com/js/altfins-screener-data-component.js";
      document.body.appendChild(script);
      // 可選：卸載時移除 script
      // return () => { document.body.removeChild(script); };
    }
  }, []);

  return (
    <altfins-screener-data-component
      ref={ref}
      symbols='["BTC", "ETH", "SOL"]'
      theme="no-border compact dark row-stripes"
      valueids='["COIN", "LAST_PRICE", "PRICE_CHANGE_1D", "SMA20_SMA50_BS_SIGNAL", "MACD_BS_SIGNAL", "SHORT_TERM_TREND_CHANGE", "CD_DRAGONFLY_DOJI_V2", "X_LAST_PRICE_CROSS_BOLLINGER_BAND_UPPER", "IR_STOCH", "IR_CCI20", "SHORT_TERM_TREND"]'
      affiliateid="test_id"
    />
  );
}

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 font-[family-name:var(--font-geist-sans)]`}
    >
      <TickerTape />
      <AdvancedChart />
      <AltfinsScreener />
      <TechnicalAnalysis />
    </div>
  );
}

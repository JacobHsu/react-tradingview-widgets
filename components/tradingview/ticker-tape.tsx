'use client'

import * as React from 'react'
import { useRef, useEffect } from 'react'

export function TickerTape() {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!container.current) return

    // https://www.tradingview.com/widget-docs/widgets/tickers/ticker-tape/
    const script = document.createElement('script')
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
    script.async = true
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: "BINANCE:BTCUSDT",
          title: "BTC",
        },
        {
          proName: "BINANCE:ETHUSDT",
          title: "ETH",
        },
        {
          proName: "BINANCE:SOLUSDT",
          title: "SOL",
        },
        {
          proName: "NASDAQ:IXIC",
          title: "Nasdaq Composite Index",
        },
        {
          proName: "FX_IDC:USDTWD",
          title: "USD to TWD",
        },
        {
          proName: "CBOE:VIXY",
          title: "VIX Volatility VIXY",
        },
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: "adaptive",
      colorTheme: "light",
      locale: "en",
    });

    container.current.appendChild(script)

    return () => {
      if (container.current) {
        const scriptElement = container.current.querySelector('script')
        if (scriptElement) {
          container.current.removeChild(scriptElement)
        }
      }
    }
  }, [])

  return (
    <div
      className="tradingview-widget-container mb-2 md:min-h-20 min-h-28"
      ref={container}
    >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

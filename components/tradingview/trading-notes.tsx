"use client";

import * as React from "react";
import { useState } from "react";

export function TradingNotes() {
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  const toggleNotes = () => {
    setIsNotesOpen(!isNotesOpen);
  };

  return (
    <>
      <button
        onClick={toggleNotes}
        className="fixed z-50 flex items-center justify-center w-10 h-10 bg-[#2a2e39] hover:bg-[#363c4e] border-none"
        style={{
          top: "105px", 
          right: "20px",
          borderRadius: "4px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"
        }}
      >
        <span className="text-[#d1d4dc] text-xl">{isNotesOpen ? "✕" : "📝"}</span>
      </button>


      <div
        className="fixed rounded-md overflow-hidden shadow-lg"
        style={{
          top: "155px", 
          right: isNotesOpen ? "20px" : "-320px",
          width: "320px",
          maxHeight: "calc(100vh - 175px)", // 避免超出視窗
          transition: "right 0.3s ease",
          backgroundColor: "#2a2e39", 
          border: "1px solid #363c4e",
          zIndex: 40
        }}
      >
        <div className="flex justify-between items-center p-3 bg-[#363c4e] border-b border-[#434651]">
          <h3 className="font-medium text-[#d1d4dc]">投資筆記</h3>
        </div>

        <div className="p-4 text-[#d1d4dc]" style={{ maxHeight: "calc(100vh - 225px)", overflowY: "auto" }}>
          <div className="mb-4">
            <h4 className="font-medium text-[#26a69a] mb-2">看多信號</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>價格突破 KC 上軌</li>
              <li>MACD 金叉</li>
              <li>RSI 40-60</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-medium text-[#ef5350] mb-2">看空信號</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>價格跌破 KC 下軌</li>
              <li>MACD 死叉</li>
              <li>RSI 40-60</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-medium text-[#2962FF] mb-2">MACD 指標</h4>
            <p className="text-sm">金叉（MACD 線上穿信號線）表示多頭動量</p>
            <p className="text-sm">死叉（MACD 線下穿信號線）表示空頭動量</p>
          </div>

          <div className="mb-4">
            <h4 className="font-medium text-[#f5c542] mb-2">RSI 指標</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>超買 RSI {'>'} 70：考慮賣出</li>
              <li>超賣 RSI {'<'} 30：尋找買入機會</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

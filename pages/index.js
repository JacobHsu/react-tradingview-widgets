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

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 font-[family-name:var(--font-geist-sans)]`}
    >
      <TickerTape />
      <AdvancedChart />
      <TechnicalAnalysis />
    </div>
  );
}

"use client";
import HomePage from "./components/pages/home/HomePage";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-panel font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between py-16 px-8 bg-background sm:items-start shadow-lg">
        <HomePage />
      </main>
    </div>
  );
}

"use client";
import HomePage from "./components/pages/home/HomePage";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-panel font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between border py-12 bg-[var(--panel)] sm:items-start shadow-lg">
        <div className="bg-background w-full overflow-hidden border">
          <HomePage />
        </div>
      </main>
    </div>
  );
}

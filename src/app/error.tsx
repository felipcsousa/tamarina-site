"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-tamarina-creme flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-md">
        <h1 className="font-opti text-6xl text-tamarina-marrom mb-4">Oops!</h1>
        <h2 className="font-opti text-2xl text-tamarina-marrom mb-6">
          Algo deu errado
        </h2>
        <p className="font-babe text-tamarina-marrom/70 mb-8">
          Pedimos desculpas pelo inconveniente. Tente recarregar a página ou volte para a home.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-tamarina-vermelho text-tamarina-creme px-8 py-3 rounded-full font-babe uppercase text-sm font-bold tracking-widest hover:bg-[#7a1b24] transition-all"
          >
            Tentar Novamente
          </button>
          
          <Link
            href="/"
            className="bg-tamarina-marrom text-tamarina-creme px-8 py-3 rounded-full font-babe uppercase text-sm font-bold tracking-widest hover:bg-tamarina-oliva transition-all"
          >
            Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  );
}

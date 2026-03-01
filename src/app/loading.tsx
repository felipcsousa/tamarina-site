export default function Loading() {
  return (
    <div className="min-h-screen bg-tamarina-creme flex flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-tamarina-areia border-t-tamarina-vermelho rounded-full animate-spin"></div>
        <p className="font-babe text-tamarina-marrom/70 text-lg">
          Carregando...
        </p>
      </div>
    </div>
  );
}

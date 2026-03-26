export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center sm:p-20">
      <main className="flex max-w-2xl flex-col items-center gap-8">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
          E-commerce Pink
        </h1>
        <p className="text-lg text-tertiary">
          El destino definitivo para encontrar tus cosméticos favoritos.
          Experiencia de compra rápida, elegante y accesible.
        </p>
        <div className="flex gap-4">
          <button className="rounded-md bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-opacity-90">
            Ver Productos
          </button>
          <button className="rounded-md bg-secondary px-6 py-3 font-medium text-tertiary transition-colors hover:bg-opacity-90">
            Sobre Nosotros
          </button>
        </div>
      </main>
    </div>
  );
}

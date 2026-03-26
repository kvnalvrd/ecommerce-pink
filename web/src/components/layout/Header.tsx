import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-primary font-serif">Pink</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/products" className="text-sm font-medium text-tertiary hover:text-primary transition-colors">
              Catálogo
            </Link>
            <Link href="/about" className="text-sm font-medium text-tertiary hover:text-primary transition-colors">
              Nosotros
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="group flex items-center gap-2 rounded-full p-2 text-tertiary transition-colors hover:bg-secondary"
            aria-label="Ir al carrito"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
              <path d="M3 6h18"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white group-hover:scale-110 transition-transform">
              2
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

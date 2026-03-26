import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="text-2xl font-bold tracking-tight text-primary font-serif">Pink</span>
            <p className="mt-4 max-w-xs text-sm text-tertiary/70">
              Transformando rutinas de belleza con productos accesibles, elegantes y de alta calidad.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-wider text-tertiary uppercase">Comprar</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/products" className="text-sm text-tertiary/70 hover:text-primary transition-colors">Catálogo</Link></li>
              <li><Link href="/products" className="text-sm text-tertiary/70 hover:text-primary transition-colors">Novedades</Link></li>
              <li><Link href="/products" className="text-sm text-tertiary/70 hover:text-primary transition-colors">Ofertas</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-wider text-tertiary uppercase">Acerca de</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-sm text-tertiary/70 hover:text-primary transition-colors">Nuestra Historia</Link></li>
              <li><Link href="/about" className="text-sm text-tertiary/70 hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-100 pt-8 text-center">
          <p className="text-sm text-tertiary/50">
            &copy; {new Date().getFullYear()} E-commerce Pink. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

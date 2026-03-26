import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-secondary px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl font-serif">Nuestra Historia</h2>
          <p className="mt-6 text-lg leading-8 text-tertiary font-sans">
            En E-commerce Pink, creemos que la belleza no debería tener reglas.
            Nuestra misión es empoderar a cada persona para que exprese su
            identidad única a través de cosméticos de alta calidad, accesibles y
            libres de crueldad.
          </p>
        </div>
      </div>

      {/* Content section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-neutral px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 h-[500px]">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
                alt="Proceso de creación de nuestros productos"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-tertiary/80 lg:max-w-lg font-sans">
              <p className="text-primary font-semibold mb-2">Nuestro Compromiso</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-tertiary sm:text-4xl font-serif">Ingredientes que importan</h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Nacimos en 2024 con una idea clara: crear maquillaje que
                  realmente cuide tu piel. Nos dimos cuenta de que la mayoría de
                  las marcas tradicionales utilizaban químicos agresivos que, a
                  largo plazo, dañaban el cutis.
                </p>
                <p className="mt-8">
                  Por eso, decidimos cambiar las reglas del juego. Nos asociamos con
                  dermatólogos y expertos en formulación botánica para
                  desarrollar productos que combinan pigmentos vibrantes con
                  ingredientes nutritivos como el ácido hialurónico, la vitamina C y
                  extractos de plantas naturales.
                </p>
                <p className="mt-8">
                  Cada producto que lanzamos pasa por meses de pruebas (nunca
                  en animales) para garantizar que sea seguro, efectivo y que
                  tenga un rendimiento excepcional desde la primera hasta la última gota.
                </p>
              </div>
            </div>

            <div className="mt-10 flex">
              <Link href="/products" passHref legacyBehavior>
                <Button variant="primary" size="lg">Explorar Catálogo</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-neutral py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary font-sans">Nuestros Valores</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-tertiary sm:text-4xl font-serif">
              Lo que nos hace diferentes
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 font-sans">
              <div className="flex flex-col items-center text-center">
                <dt className="flex items-center gap-x-3 text-base font-bold leading-7 text-tertiary">
                  Sostenibilidad
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-tertiary/70">
                  <p className="flex-auto">
                    Utilizamos envases reciclables y minimizamos el uso de plásticos
                    de un solo uso en toda nuestra cadena de suministro.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col items-center text-center">
                <dt className="flex items-center gap-x-3 text-base font-bold leading-7 text-tertiary">
                  Inclusión
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-tertiary/70">
                  <p className="flex-auto">
                    Nuestras fórmulas están diseñadas para adaptarse a una amplia
                    gama de tonos y tipos de piel, celebrando la diversidad.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col items-center text-center">
                <dt className="flex items-center gap-x-3 text-base font-bold leading-7 text-tertiary">
                  Transparencia
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-tertiary/70">
                  <p className="flex-auto">
                    Nunca ocultamos ingredientes. Lo que ves en la etiqueta es
                    exactamente lo que estás poniendo en tu piel.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

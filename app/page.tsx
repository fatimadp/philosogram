import Link from "next/link";
import {
  Brain,
  ScrollText,
} from "lucide-react";

type Filosofo = {
  nombre: string;
  usuario: string;
  corriente: "Filosofía Clásica" | "Filosofía Moderna";
  imagen: string;
  slug: string;
};

const filosofos: Filosofo[] = [
  {
    nombre: "Platón",
    usuario: "platon_oficial",
    corriente: "Filosofía Clásica",
    imagen: "/filosofos/platon/platon.jpg",
    slug: "platon",
  },
  {
    nombre: "Aristóteles",
    usuario: "aristoteles",
    corriente: "Filosofía Clásica",
    imagen: "/filosofos/aristoteles/aristoteles.jpeg",
    slug: "aristoteles",
  },
  {
    nombre: "René Descartes",
    usuario: "rene_descartes",
    corriente: "Filosofía Moderna",
    imagen: "/filosofos/descartes/rene-descartes.jpg",
    slug: "rene-descartes",
  },
  {
    nombre: "Baruch Spinoza",
    usuario: "baruch_spinoza",
    corriente: "Filosofía Moderna",
    imagen: "/filosofos/baruch/baruch-spinoza.jpg",
    slug: "baruch-spinoza",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4EBDD] text-[#3E2B1F]">
      {/* HEADER */}
      <header className="border-b border-[#CDB798]/70 bg-[#F4EBDD]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-5 py-5">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 overflow-hidden rounded-full">
              <img
                src="/logo-filosofia.png"
                alt="Logo Philosogram"
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <h1 className="font-serif text-xl font-bold">
                Philosogram
              </h1>

              <p className="text-[10px] uppercase tracking-[0.18em] text-[#987653]">
                Historia del Pensamiento
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* PRESENTACIÓN */}
      <section className="mx-auto max-w-6xl px-5 pb-6 pt-12 text-center md:pt-16">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A67C52]">
          De la Antigüedad a la Modernidad
        </p>

        <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
          Conoce a los filósofos
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#77614E] md:text-base">
          Selecciona un perfil para conocer su vida, pensamiento y principales
          aportaciones.
        </p>
      </section>

      {/* LEYENDA */}
      <section className="mx-auto mt-7 flex max-w-6xl justify-center px-5">
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-full border border-[#D7C2A6] bg-[#EBDDCA]/70 px-5 py-2.5 sm:gap-5">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#704C32]">
            <ScrollText size={15} />
            Filosofía Clásica
          </div>

          <div className="hidden h-4 w-px bg-[#CDB798] sm:block" />

          <div className="flex items-center gap-2 text-xs font-semibold text-[#704C32]">
            <Brain size={15} />
            Filosofía Moderna
          </div>
        </div>
      </section>

      {/* 4 FILÓSOFOS */}
      <section className="mx-auto flex max-w-375 items-center justify-center px-5 pb-20 pt-12">
        <div
          className="
            grid
            w-full
            grid-cols-2
            gap-x-6
            gap-y-10
            sm:grid-cols-4
            lg:gap-x-7
          "
        >
          {filosofos.map((filosofo, index) => (
            <Link
              key={filosofo.slug}
              href={`/filosofos/${filosofo.slug}`}
              className="
                filosofo-bubble
                group
                flex
                min-w-0
                flex-col
                items-center
                text-center
              "
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* FOTO */}
              <div className="relative">
                {/* HALO */}
                <div
                  className="
                    absolute
                    inset-3
                    rounded-full
                    bg-[#A67C52]/25
                    blur-xl
                    transition
                    duration-500
                    group-hover:scale-125
                    group-hover:bg-[#A67C52]/40
                  "
                />

                {/* CÍRCULO */}
                <div
                  className="
                    relative
                    h-28
                    w-28
                    rounded-full
                    bg-linear-to-tr
                    from-[#5B3A29]
                    via-[#B38A4A]
                    to-[#DFC9A8]
                    p-0.75
                    shadow-[0_10px_28px_rgba(62,43,31,0.16)]
                    transition
                    duration-500
                    group-hover:-translate-y-2
                    group-hover:scale-105
                    group-hover:shadow-[0_18px_38px_rgba(62,43,31,0.24)]
                    xl:h-32
                    xl:w-32
                  "
                >
                  <div className="h-full w-full rounded-full bg-[#F4EBDD] p-1.25">
                    <img
                      src={filosofo.imagen}
                      alt={filosofo.nombre}
                      className="
                        h-full
                        w-full
                        rounded-full
                        object-cover
                        sepia-[0.12]
                        transition
                        duration-700
                        group-hover:scale-[1.04]
                        group-hover:sepia-0
                      "
                    />
                  </div>
                </div>

                {/* TIPO */}
                <div
                  className="
                    absolute
                    bottom-0
                    right-0
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border-[3px]
                    border-[#F4EBDD]
                    bg-[#3E2B1F]
                    text-[#F4EBDD]
                    shadow-md
                    transition
                    duration-300
                    group-hover:scale-110
                  "
                >
                  {filosofo.corriente === "Filosofía Clásica" ? (
                    <ScrollText size={13} />
                  ) : (
                    <Brain size={13} />
                  )}
                </div>
              </div>

              {/* NOMBRE */}
              <h3 className="mt-5 min-h-12 font-serif text-base font-bold leading-5 xl:text-lg">
                {filosofo.nombre}
              </h3>

              {/* USUARIO */}
              <p className="mt-1 max-w-full truncate text-xs text-[#987653]">
                @{filosofo.usuario}
              </p>

              {/* CORRIENTE */}
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#A67C52]">
                {filosofo.corriente}
              </p>

              {/* HOVER */}
              <div className="mt-3 h-0.5 w-0 rounded-full bg-[#704C32] transition-all duration-500 group-hover:w-12" />
            </Link>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#CDB798]/70">
        <div className="mx-auto max-w-6xl px-5 py-6 text-center">
          <p className="font-serif text-sm font-bold">
            FILOSOFÍA DEL PENSAMIENTO HUMANISTA CONTEMPORÁNEO
          </p>

          <p className="mt-1 text-xs text-[#9A7B5C]">
            by Fátima Durán Peralta
          </p>
        </div>
      </footer>
    </main>
  );
}
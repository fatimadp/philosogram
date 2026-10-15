"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import { Historia } from "@/data/filosofos";

type Props = {
  historias: Historia[];
};

export default function Historias({ historias }: Props) {
  const [historiaSeleccionada, setHistoriaSeleccionada] =
    useState<Historia | null>(null);

  useEffect(() => {
    function cerrarConEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setHistoriaSeleccionada(null);
      }
    }

    window.addEventListener("keydown", cerrarConEscape);

    return () => {
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, []);

  useEffect(() => {
    if (historiaSeleccionada) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [historiaSeleccionada]);

  function abrirHistoria(historia: Historia) {
    // Solo abre modal en computadora
    if (window.innerWidth >= 768) {
      setHistoriaSeleccionada(historia);
    }
  }

  return (
    <>
      {/* HISTORIAS DESTACADAS */}
      <section className="mt-10">
        <div className="flex gap-5 overflow-x-auto pb-4 sm:gap-7">
          {historias.map((historia) => (
            <button
              key={historia.titulo}
              type="button"
              onClick={() => abrirHistoria(historia)}
              className="
                group
                flex
                min-w-[78px]
                flex-col
                items-center
                border-none
                bg-transparent
                p-0
                text-black
                md:cursor-pointer
              "
            >
              {/* CÍRCULO EXTERIOR */}
              <div
                className="
                  flex
                  h-[78px]
                  w-[78px]
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-tr
                  from-yellow-400
                  via-pink-500
                  to-purple-600
                  p-[2px]
                  transition
                  duration-300
                  md:h-[86px]
                  md:w-[86px]
                  md:group-hover:scale-105
                "
              >
                {/* BORDE BLANCO */}
                <div className="h-full w-full rounded-full bg-white p-[3px]">
                  <img
                    src={`${historia.imagen}?auto=format&fit=crop&w=400&q=85`}
                    alt={historia.titulo}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>

              <p className="mt-2 max-w-[85px] truncate text-xs font-semibold">
                {historia.titulo}
              </p>
            </button>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {historiaSeleccionada && (
        <div
          className="
            fixed
            inset-0
            z-[200]
            hidden
            items-center
            justify-center
            bg-black/85
            p-6
            backdrop-blur-sm
            md:flex
          "
          onClick={() => setHistoriaSeleccionada(null)}
        >
          <div
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-xl
              overflow-y-auto
              rounded-3xl
              bg-white
              shadow-2xl
            "
            onClick={(event) => event.stopPropagation()}
          >
            {/* BOTÓN CERRAR */}
            <button
              type="button"
              onClick={() => setHistoriaSeleccionada(null)}
              className="
                absolute
                right-4
                top-4
                z-30
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-black/70
                text-white
                transition
                hover:bg-black
              "
              aria-label="Cerrar historia"
            >
              <X size={22} />
            </button>

            {/* IMAGEN */}
            <div className="relative bg-black">
              <img
                src={`${historiaSeleccionada.imagen}?auto=format&fit=crop&w=1200&q=90`}
                alt={historiaSeleccionada.titulo}
                className="max-h-[58vh] w-full object-cover"
              />

              {/* DEGRADADO */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent" />

              {/* TITULO ENCIMA DE IMAGEN */}
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  Historia destacada
                </p>

                <h2 className="text-2xl font-bold">
                  {historiaSeleccionada.titulo}
                </h2>
              </div>
            </div>

            {/* INFORMACIÓN */}
            <div className="p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                  Φ
                </div>

                <div>
                  <p className="text-sm font-bold">
                    Philosogram
                  </p>

                  <p className="text-xs text-gray-500">
                    Historia de la filosofía
                  </p>
                </div>
              </div>

              <p className="text-sm leading-7 text-gray-700">
                {historiaSeleccionada.descripcion ||
                  "Información destacada sobre esta etapa de la vida y pensamiento del filósofo."}
              </p>

              <div className="mt-6 border-t border-gray-200 pt-4">
                <p className="text-xs text-gray-400">
                  Historia destacada · Philosogram
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
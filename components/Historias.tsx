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

  // Se eliminó la restricción de ancho para que abra en cualquier dispositivo
  function abrirHistoria(historia: Historia) {
    setHistoriaSeleccionada(historia);
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
                <div className="h-full w-full rounded-full bg-[#F7EFE3] p-[3px]">
                  <img
                    src={`${historia.imagen}?auto=format&fit=crop&w=400&q=85`}
                    alt={historia.titulo}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </div>

              <p className="mt-2 max-w-[85px] truncate text-xs font-semibold text-[#342319]">
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
            z-[400]
            flex
            items-center
            justify-center
            bg-black/85
            p-4
            backdrop-blur-sm
            sm:p-6
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
              bg-[#F7EFE3]
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
                className="max-h-[50vh] w-full object-cover sm:max-h-[58vh]"
              />

              {/* DEGRADADO */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />

              {/* TITULO ENCIMA DE IMAGEN */}
              <div className="absolute bottom-5 left-5 right-5 text-[#F7EFE3]">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F7EFE3]/80 sm:text-xs">
                  Historia destacada
                </p>

                <h2 className="text-xl font-bold sm:text-2xl">
                  {historiaSeleccionada.titulo}
                </h2>
              </div>
            </div>

            {/* INFORMACIÓN */}
            <div className="p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <img
                  src="/logo-filosofia.png"
                  alt="Philosogram"
                  className="h-10 w-10 rounded-full object-contain bg-[#342319] p-1"
                />

                <div>
                  <p className="text-sm font-bold text-[#342319]">
                    Philosogram
                  </p>

                  <p className="text-xs text-[#765C47]">
                    Historia de la filosofía
                  </p>
                </div>
              </div>

              <p className="text-sm leading-7 text-[#5E4B3E]">
                {historiaSeleccionada.descripcion ||
                  "Información destacada sobre esta etapa de la vida y pensamiento del filósofo."}
              </p>

              <div className="mt-6 border-t border-[#DED0BD] pt-4">
                <p className="text-[10px] uppercase tracking-widest text-[#936C45] sm:text-xs">
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
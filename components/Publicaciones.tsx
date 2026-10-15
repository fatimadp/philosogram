"use client";

import { useEffect, useState } from "react";
import { Grid3X3, X } from "lucide-react";

import { Publicacion } from "@/data/filosofos";

type Props = {
  publicaciones: Publicacion[];
};

export default function Publicaciones({
  publicaciones,
}: Props) {
  const [publicacionSeleccionada, setPublicacionSeleccionada] =
    useState<Publicacion | null>(null);

  // Cerrar modal presionando ESC
  useEffect(() => {
    function cerrarConEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setPublicacionSeleccionada(null);
      }
    }

    window.addEventListener("keydown", cerrarConEscape);

    return () => {
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, []);

  // Evita que la página de atrás haga scroll
  useEffect(() => {
    if (publicacionSeleccionada) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [publicacionSeleccionada]);

  function abrirPublicacion(publicacion: Publicacion) {
    // Solo abrimos modal en computadora/tablet grande
    if (window.innerWidth >= 768) {
      setPublicacionSeleccionada(publicacion);
    }
  }

  return (
    <>
      {/* TÍTULO PUBLICACIONES */}
      <section>
        <div className="mt-8 flex justify-center border-t border-[#D8C8B5]">
          <div className="flex items-center gap-2 border-t border-[#3E2B1F] px-6 py-4 text-[11px] font-bold tracking-[0.14em]">
            <Grid3X3 size={14} />
            PUBLICACIONES
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-3 gap-1 md:gap-2">
          {publicaciones.map((publicacion) => (
            <button
              key={publicacion.id}
              type="button"
              onClick={() => abrirPublicacion(publicacion)}
              className="group relative aspect-square overflow-hidden bg-gray-100 text-left md:cursor-pointer"
              aria-label={`Abrir publicación: ${publicacion.titulo}`}
            >
              {/* IMAGEN */}
              <img
                src={`${publicacion.imagen}?auto=format&fit=crop&w=900&q=85`}
                alt={publicacion.titulo}
                className="h-full w-full object-cover transition duration-300 md:group-hover:scale-105"
              />

              {/* OSCURECER EN HOVER - SOLO COMPUTADORA */}
              <div
                className="
                  absolute inset-0
                  hidden
                  items-center
                  justify-center
                  bg-black/55
                  p-4
                  text-center
                  text-white
                  opacity-0
                  transition
                  duration-300
                  md:flex
                  md:group-hover:opacity-100
                "
              >
                <div>
                  {publicacion.fecha && (
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest">
                      {publicacion.fecha}
                    </p>
                  )}

                  <p className="font-bold">
                    {publicacion.titulo}
                  </p>

                  <p className="mt-2 text-xs">
                    Ver publicación
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* MODAL - SOLO COMPUTADORA */}
      {publicacionSeleccionada && (
        <div
          className="
            fixed inset-0 z-100
            hidden
            items-center
            justify-center
            bg-black/80
            p-6
            backdrop-blur-sm
            md:flex
          "
          onClick={() => setPublicacionSeleccionada(null)}
        >
          {/* CONTENEDOR MODAL */}
          <div
            className="
              relative
              max-h-[92vh]
              w-full
              max-w-3xl
              overflow-y-auto
              rounded-2xl
              bg-white
              shadow-2xl
            "
            onClick={(event) => event.stopPropagation()}
          >
            {/* CERRAR */}
            <button
              type="button"
              onClick={() => setPublicacionSeleccionada(null)}
              className="
                absolute
                right-4
                top-4
                z-20
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
              aria-label="Cerrar publicación"
            >
              <X size={22} />
            </button>

            {/* IMAGEN ARRIBA */}
            <div className="w-full bg-black">
              <img
                src={`${publicacionSeleccionada.imagen}?auto=format&fit=crop&w=1400&q=90`}
                alt={publicacionSeleccionada.titulo}
                className="
                  max-h-[58vh]
                  w-full
                  object-contain
                "
              />
            </div>

            {/* INFORMACIÓN ABAJO */}
            <div className="p-7">
              {/* CABECERA PEQUEÑA */}
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
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

              {/* FECHA */}
              {publicacionSeleccionada.fecha && (
                <p className="mb-2 text-sm font-semibold text-gray-500">
                  {publicacionSeleccionada.fecha}
                </p>
              )}

              {/* TÍTULO */}
              <h2 className="text-2xl font-bold">
                {publicacionSeleccionada.titulo}
              </h2>

              {/* DESCRIPCIÓN */}
              <p className="mt-4 text-base leading-7 text-gray-700">
                {publicacionSeleccionada.descripcion}
              </p>

              {/* PIE */}
              <div className="mt-7 border-t border-gray-200 pt-4">
                <p className="text-xs text-gray-400">
                  Publicación histórica · Philosogram
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
"use client";

import { useEffect, useState } from "react";
import { Grid3X3, X } from "lucide-react";

import { Publicacion } from "@/data/filosofos";

type Props = {
  publicaciones: Publicacion[];
};

export default function Publicaciones({ publicaciones }: Props) {
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

  // Se eliminó la restricción de ancho para que abra en móvil
  function abrirPublicacion(publicacion: Publicacion) {
    setPublicacionSeleccionada(publicacion);
  }

  return (
    <>
      {/* TÍTULO PUBLICACIONES */}
      <section>
        <div className="mt-8 flex justify-center border-t border-[#DED0BD]">
          <div className="flex items-center gap-2 border-t border-[#342319] px-6 py-4 text-[11px] font-bold tracking-[0.14em]">
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
              className="group relative aspect-square overflow-hidden bg-[#EADCC8] text-left md:cursor-pointer"
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
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#F7EFE3]">
                      {publicacion.fecha}
                    </p>
                  )}

                  <p className="font-bold text-white">
                    {publicacion.titulo}
                  </p>

                  <p className="mt-2 text-xs text-[#EADCC8]">
                    Ver publicación
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* MODAL (COMPATIBLE CON MÓVIL Y PC) */}
      {publicacionSeleccionada && (
        <div
          className="
            fixed inset-0 z-[400]
            flex
            items-center
            justify-center
            bg-black/85
            p-4
            backdrop-blur-sm
            sm:p-6
          "
          onClick={() => setPublicacionSeleccionada(null)}
        >
          {/* CONTENEDOR MODAL */}
          <div
            className="
              relative
              max-h-[90vh]
              w-full
              max-w-3xl
              overflow-y-auto
              rounded-2xl
              bg-[#F7EFE3]
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
                  max-h-[50vh]
                  w-full
                  object-contain
                  sm:max-h-[58vh]
                "
              />
            </div>

            {/* INFORMACIÓN ABAJO */}
            <div className="p-5 sm:p-7">
              {/* CABECERA PEQUEÑA */}
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

              {/* FECHA */}
              {publicacionSeleccionada.fecha && (
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#936C45] sm:text-sm">
                  {publicacionSeleccionada.fecha}
                </p>
              )}

              {/* TÍTULO */}
              <h2 className="text-xl font-bold text-[#342319] sm:text-2xl">
                {publicacionSeleccionada.titulo}
              </h2>

              {/* DESCRIPCIÓN */}
              <p className="mt-3 text-sm leading-7 text-[#5E4B3E] sm:mt-4 sm:text-base">
                {publicacionSeleccionada.descripcion}
              </p>

              {/* PIE */}
              <div className="mt-6 border-t border-[#DED0BD] pt-4 sm:mt-7">
                <p className="text-[10px] uppercase tracking-widest text-[#936C45] sm:text-xs">
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
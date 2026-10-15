"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  CalendarDays,
  Eye,
  MapPin,
  MoreHorizontal,
  ScrollText,
  X,
} from "lucide-react";

import { useEffect, useState } from "react";
import { Filosofo, filosofos } from "@/data/filosofos";

import Historias from "./Historias";
import Publicaciones from "./Publicaciones";

type Props = {
  filosofo: Filosofo;
};

export default function PerfilFilosofo({ filosofo }: Props) {
  const [fotoAbierta, setFotoAbierta] = useState(false);
  const [modalConexiones, setModalConexiones] = useState<
    "seguidores" | "seguidos" | null
  >(null);

  const conexionesAfines = filosofos.filter(
    (f) => f.slug !== filosofo.slug && f.corriente === filosofo.corriente,
  );

  useEffect(() => {
    function cerrarConEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setFotoAbierta(false);
        setModalConexiones(null);
      }
    }

    window.addEventListener("keydown", cerrarConEscape);

    return () => {
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, []);

  useEffect(() => {
    if (fotoAbierta || modalConexiones !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [fotoAbierta, modalConexiones]);

  return (
    <>
      <main className="min-h-screen bg-[#F7EFE3] text-[#342319]">
        {/* BARRA SUPERIOR */}
        <header className="sticky top-0 z-50 border-b border-[#DED0BD] bg-[#F7EFE3]/95 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
            <Link
              href="/"
              className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[#EADCC8]"
            >
              <ArrowLeft size={22} />
            </Link>

            <div className="flex items-center gap-2">
              <img
                src="/logo-filosofia.png"
                alt="Philosogram"
                className="h-8 w-8 rounded-full object-contain"
              />
              <h1 className="font-serif text-xl font-bold">Philosogram</h1>
            </div>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[#EADCC8]"
            >
              <MoreHorizontal size={22} />
            </button>
          </div>
        </header>

        {/* PERFIL */}
        <div className="mx-auto max-w-4xl px-4 pb-16">
          <section className="pt-8 md:pt-12">
            <div className="grid grid-cols-[90px_1fr] gap-4 sm:grid-cols-[150px_1fr] md:grid-cols-[220px_1fr] md:gap-12">
              {/* FOTO */}
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setFotoAbierta(true)}
                  className="group relative"
                  aria-label={`Ver foto completa de ${filosofo.nombre}`}
                >
                  <div className="h-20 w-20 rounded-full bg-linear-to-tr from-[#65452F] via-[#B58B57] to-[#E0C495] p-0.75 transition duration-300 group-hover:scale-105 sm:h-32 sm:w-32 md:h-40 md:w-40">
                    <div className="h-full w-full rounded-full bg-[#F7EFE3] p-1">
                      <img
                        src={filosofo.imagenPerfil}
                        alt={filosofo.nombre}
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full border-[2px] border-[#F7EFE3] bg-[#3E2B1F] text-white sm:h-9 sm:w-9 sm:border-[3px]">
                    {filosofo.corriente === "Filosofía Clásica" ? (
                      <ScrollText className="h-3 w-3 sm:h-4 sm:w-4" />
                    ) : filosofo.corriente === "Racionalismo" ||
                      filosofo.corriente === "Filosofía Moderna" ? (
                      <Brain className="h-3 w-3 sm:h-4 sm:w-4" />
                    ) : (
                      <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                    )}
                  </div>
                </button>
              </div>

              {/* INFORMACIÓN DERECHA (USUARIO Y STATS) */}
              <div className="min-w-0 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="truncate text-lg font-normal sm:text-xl">
                    @{filosofo.usuario}
                  </h2>

                  <span className="hidden rounded-lg bg-[#E7D6BE] px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#745234] sm:inline-block">
                    {filosofo.corriente}
                  </span>
                </div>

                {/* STATS (Aparecen al lado de la foto en todas las pantallas) */}
                <div className="mt-3 flex items-center justify-between pr-2 sm:mt-6 sm:justify-start sm:gap-7 md:gap-10">
                  <Estadistica
                    numero={filosofo.publicaciones.length.toString()}
                    texto="publicaciones"
                  />
                  <Estadistica
                    numero={filosofo.seguidores}
                    texto="seguidores"
                    onClick={() => setModalConexiones("seguidores")}
                  />
                  <Estadistica
                    numero={filosofo.seguidos}
                    texto="seguidos"
                    onClick={() => setModalConexiones("seguidos")}
                  />
                </div>

                {/* BIO PC (Oculto en móvil) */}
                <div className="mt-6 hidden max-w-xl sm:block">
                  <h3 className="font-serif text-base font-bold">
                    {filosofo.nombre}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#936C45]">
                    Filósofo · {filosofo.corriente}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#5E4B3E]">
                    {filosofo.biografia}
                  </p>
                  <p className="mt-3 font-serif text-sm font-bold italic text-[#513421]">
                    “{filosofo.frase}”
                  </p>
                </div>
              </div>
            </div>

            {/* BIO MÓVIL (Bajo la foto y los stats) */}
            <div className="mt-5 sm:hidden">
              <h3 className="font-serif text-sm font-bold">
                {filosofo.nombre}
              </h3>
              <p className="mt-0.5 text-[11px] font-semibold text-[#936C45]">
                {filosofo.corriente}
              </p>
              <p className="mt-2 text-xs leading-5 text-[#5E4B3E]">
                {filosofo.biografia}
              </p>
              <p className="mt-2 font-serif text-xs font-bold italic text-[#513421]">
                “{filosofo.frase}”
              </p>
            </div>

            {/* DATOS COMUNES */}
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#765C47] sm:mt-7 border-t border-[#DACAB5] sm:border-none pt-4 sm:pt-0">
              <div className="flex items-center gap-1.5">
                <CalendarDays size={14} />
                <span>{filosofo.nacimiento}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={14} />
                <span>{filosofo.lugarNacimiento}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold">†</span>
                <span>{filosofo.fallecimiento}</span>
              </div>
            </div>
          </section>

          {/* HISTORIAS */}
          <div className="mt-2 sm:mt-4">
            <Historias historias={filosofo.historias} />
          </div>

          {/* PUBLICACIONES */}
          <div className="mt-3">
            <Publicaciones publicaciones={filosofo.publicaciones} />
          </div>
        </div>
      </main>

      {/* MODAL FOTO DE PERFIL */}
      {fotoAbierta && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setFotoAbierta(false)}
        >
          <button
            type="button"
            onClick={() => setFotoAbierta(false)}
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={24} />
          </button>
          <div
            className="relative flex max-h-[92vh] max-w-[92vw] items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={filosofo.imagenPerfil}
              alt={filosofo.nombre}
              className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            />
          </div>
        </div>
      )}

      {/* MODAL CONEXIONES */}
      {modalConexiones !== null && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={() => setModalConexiones(null)}
        >
          <div
            className="relative w-full max-w-sm max-h-[75vh] flex flex-col overflow-hidden rounded-2xl bg-[#F7EFE3] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Header del modal */}
            <div className="flex items-center justify-between border-b border-[#DED0BD] px-4 py-3">
              <div className="w-8"></div>
              <h3 className="font-semibold text-base text-[#342319] capitalize">
                {modalConexiones}
              </h3>
              <button
                type="button"
                onClick={() => setModalConexiones(null)}
                className="flex w-8 items-center justify-end text-[#342319]"
              >
                <X size={22} />
              </button>
            </div>

            {/* Lista de usuarios */}
            <div className="flex-1 overflow-y-auto px-4 py-4">
              <div className="flex flex-col gap-4">
                {conexionesAfines.map((f) => (
                  <div
                    key={f.slug}
                    className="flex items-center justify-between"
                  >
                    <Link
                      href={`/filosofos/${f.slug}`}
                      className="flex items-center gap-3"
                      onClick={() => setModalConexiones(null)}
                    >
                      <img
                        src={f.imagenPerfil}
                        alt={f.nombre}
                        className="h-12 w-12 rounded-full object-cover border border-[#DED0BD]"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-[#342319]">
                          {f.usuario}
                        </span>
                        <span className="text-xs text-[#765C47]">
                          {f.nombre}
                        </span>
                      </div>
                    </Link>

                    <button className="rounded-lg bg-[#EADCC8] px-4 py-1.5 text-sm font-semibold text-[#342319] transition hover:bg-[#DED0BD]">
                      Siguiendo
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// COMPONENTE ESTADISTICA ACTUALIZADO (Responsive nativo para móvil y PC)
function Estadistica({
  numero,
  texto,
  onClick,
}: {
  numero: string;
  texto: string;
  onClick?: () => void;
}) {
  const contenido = (
    <div className="flex flex-col items-center sm:flex-row sm:items-baseline sm:gap-1.5">
      <span className="text-[15px] font-bold text-[#342319] sm:text-base">
        {numero}
      </span>
      <span className="text-[11px] text-[#8E7967] sm:text-base sm:text-[#342319]">
        {texto}
      </span>
    </div>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="transition hover:opacity-70 text-center sm:text-left"
      >
        {contenido}
      </button>
    );
  }

  return <div className="text-center sm:text-left">{contenido}</div>;
}
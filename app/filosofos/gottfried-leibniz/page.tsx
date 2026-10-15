import { notFound } from "next/navigation";

import PerfilFilosofo from "@/components/PerfilFilosofo";
import { obtenerFilosofo } from "@/data/filosofos";

export default function GottfriedLeibnizPage() {
  const filosofo = obtenerFilosofo("gottfried-leibniz");

  if (!filosofo) {
    notFound();
  }

  return <PerfilFilosofo filosofo={filosofo} />;
}
import { notFound } from "next/navigation";

import PerfilFilosofo from "@/components/PerfilFilosofo";
import { obtenerFilosofo } from "@/data/filosofos";

export default function DavidHumePage() {
  const filosofo = obtenerFilosofo("david-hume");

  if (!filosofo) {
    notFound();
  }

  return <PerfilFilosofo filosofo={filosofo} />;
}
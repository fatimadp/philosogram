import { notFound } from "next/navigation";

import PerfilFilosofo from "@/components/PerfilFilosofo";
import { obtenerFilosofo } from "@/data/filosofos";

export default function GeorgeBerkeleyPage() {
  const filosofo = obtenerFilosofo("george-berkeley");

  if (!filosofo) {
    notFound();
  }

  return <PerfilFilosofo filosofo={filosofo} />;
}
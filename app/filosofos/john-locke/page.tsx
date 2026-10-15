import { notFound } from "next/navigation";

import PerfilFilosofo from "@/components/PerfilFilosofo";
import { obtenerFilosofo } from "@/data/filosofos";

export default function JohnLockePage() {
  const filosofo = obtenerFilosofo("john-locke");

  if (!filosofo) {
    notFound();
  }

  return <PerfilFilosofo filosofo={filosofo} />;
}
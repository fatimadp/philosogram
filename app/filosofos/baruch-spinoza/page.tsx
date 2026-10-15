import { notFound } from "next/navigation";

import PerfilFilosofo from "@/components/PerfilFilosofo";
import { obtenerFilosofo } from "@/data/filosofos";

export default function BaruchSpinozaPage() {
  const filosofo = obtenerFilosofo("baruch-spinoza");

  if (!filosofo) {
    notFound();
  }

  return <PerfilFilosofo filosofo={filosofo} />;
}
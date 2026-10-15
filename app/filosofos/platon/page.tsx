import { notFound } from "next/navigation";
import PerfilFilosofo from "@/components/PerfilFilosofo";
import { obtenerFilosofo } from "@/data/filosofos";

export default function PlatonPage() {
  const filosofo = obtenerFilosofo("platon");

  if (!filosofo) {
    notFound();
  }

  return <PerfilFilosofo filosofo={filosofo} />;
}
import { notFound } from "next/navigation";
import PerfilFilosofo from "@/components/PerfilFilosofo";
import { obtenerFilosofo } from "@/data/filosofos";

export default function AristotelesPage() {
  const filosofo = obtenerFilosofo("aristoteles");

  if (!filosofo) {
    notFound();
  }

  return <PerfilFilosofo filosofo={filosofo} />;
}
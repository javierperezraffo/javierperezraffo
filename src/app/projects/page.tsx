import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Proyectos | Javier Perez",
  description:
    "Javier Perez es un consultor TI en transformación digital de negocios. Su espacio donde la tecnología se convierte en una herramienta para resolver problemas reales y generar resultados medibles.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
        <Heading as="h2">En qué he estado trabajando</Heading>

      <Products />
    </Container>
  );
}

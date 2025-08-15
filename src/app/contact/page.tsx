import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contacto | Javier Perez",
  description:
    "Javier Perez es un consultor TI en transformación digital de negocios. Su espacio donde la tecnología se convierte en una herramienta para resolver problemas reales y generar resultados medibles.",
};

export default function Projects() {
  return (
    <Container className="text-center mx-auto">
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2 mx-auto">Me podés encontrar en</Heading>
      <Paragraph className="mb-10 max-w-xl mx-auto">
        ti@jpraffo.com{" "}
      </Paragraph>
      {/* <Contact /> */}
    </Container>
  );
}

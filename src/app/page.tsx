import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hola Soy Javier Perez</Heading>
      <Paragraph className="max-w-xl mt-4">
        Consultor en Estrategia y Tecnología | Transformación Digital • Desarrollo web • Crecimiento de Negocios • Optimización de Procesos
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        En qué he estado trabajando
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}


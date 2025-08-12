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
      <Heading className="font-black">¡Hola! Soy Javier Perez</Heading>
      <Paragraph className="max-w-xl mt-4">
        Soy un desarrollador full-stack al que le encanta{" "}
        <Highlight>crear productos</Highlight> y aplicaciones web que puedan impactar
        millones de vidas.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        Soy un ingeniero de software senior con{" "}
        <Highlight>7 años de experiencia</Highlight> creando aplicaciones web escalables,
        optimizadas en rendimiento y con un gran diseño.
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

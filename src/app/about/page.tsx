import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

import { motion } from "framer-motion";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | John Doe",
  description:
    "John Doe is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function AboutPage() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <Container>
      <span className="text-4xl mb-8">💬</span>
      <Heading className="font-black mb-6">Sobre mí</Heading>
      <Paragraph>
        Un Consultor TI en transformación digital de negocios. Bienvenido a mi espacio, donde la tecnología se convierte en una herramienta para resolver problemas reales y generar resultados medibles.
        
        Desde el inicio de mi carrera, me ha fascinado no solo el código o el diseño, sino el poder que tiene la tecnología para transformar un negocio. Para mí, una página web no es solo una vitrina digital; es el motor de un embudo de ventas. Una campaña de anuncios no es un simple gasto; es una conversación directa con clientes potenciales. Mi verdadera pasión es construir los sistemas y procesos digitales que permiten a las empresas dejar de depender de la suerte y empezar a generar demanda de forma predecible.
        
        Mi enfoque es integral. Como estratega, diagnostico los desafíos de negocio y diseño el plan de acción. Como técnico, construyo las soluciones, desde sitios web optimizados y rápidos hasta la automatización de procesos que ahorran tiempo y dinero. Y como marketer, me aseguro de que cada pieza del ecosistema digital —SEO, redes sociales, publicidad— trabaje en perfecta sintonía para atraer y convertir.
        
        A través de este sitio, comparto casos de éxito, estrategias y el "detrás de escena" de cómo se construyen los motores de crecimiento digital. Si eres un empresario buscando escalar, un colega en busca de nuevas perspectivas, o simplemente alguien que valora la unión entre la estrategia de negocio y la ejecución tecnológica, estás en el lugar correcto.
        
        Te invito a explorar mis proyectos y a que conectemos. Juntos, podemos analizar los desafíos de tu negocio y diseñar el camino digital para alcanzar tus metas.
        
        Gracias por tu visita.
      </Paragraph>
    </Container>
  );
}

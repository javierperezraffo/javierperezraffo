import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter | Javier Perez",
  description:
    "Javier Pérez Raffo es un consultor TI en transformación digital de negocios. Su espacio donde la tecnología se convierte en una herramienta para resolver problemas reales y generar resultados medibles.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Heading className="font-black pb-4 text-center">Todas las novedades de mi newsletter, directamente en tu bandeja de entrada.</Heading>
      <Paragraph className="pb-10">
        {/* Ever since <Highlight> I was a kid</Highlight>, I&apos;ve been
        fascinated by technology. */}
      </Paragraph>
      <Blogs blogs={data} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <iframe src="https://javierperezraffo.substack.com/embed" width="480" height="320" style={{ border: '1px solid #EEE', background: 'white' }} frameBorder="0" scrolling="no"></iframe>
      </div>
    </Container>
  );
}

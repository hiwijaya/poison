import { getPostBySlug } from "@/lib/api";
import Image from "next/image";
import { notFound } from "next/navigation";


export default async function Post({ params }: {params: Promise<{slug: string}>}) {
  const { slug } = await params;

  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return(
    <article className="my-6">
      <header>
        <Image src={post.meta.cover} alt={post.meta.title} 
          width={1024} height={576}
          className="rounded-2xl object-cover mb-4"/>
        <h1 className="text-2xl text-highlight font-bold mb-2">{post.meta.title}</h1>
        <time dateTime={post.meta.date} 
          className="text-sm">{post.meta.date}</time>
      </header>

       <section
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
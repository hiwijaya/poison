import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import MdxContent from "@/components/MdxContent";


export function generateStaticParams() {
  return getAllPosts().map(post => ({slug: post.slug}));
}

export default async function Post({ params }: {params: Promise<{slug: string}>}) {
  
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  return(
    <article className="post my-6">
      <header>
        <Image src={post.meta.cover} alt="Cover" width={1024} height={576}/>
        <h1>{post.meta.title}</h1>
        <time dateTime={post.meta.date}>{post.meta.date}</time>
      </header>

      <MdxContent source={post.content}/>
    </article>
  );
}
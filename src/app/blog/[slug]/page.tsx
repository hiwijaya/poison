import Image from "next/image";
import { notFound } from "next/navigation";
import moment from "moment";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import MdxContent from "@/components/MdxContent";
import Tag from "@/components/Tag";


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
        <time dateTime={post.meta.date}>{moment(post.meta.date).format('MMMM DD, YYYY')}</time>
        <h1>{post.meta.title}</h1>
        <div className="flex flex-wrap space-x-2">
          {post.meta.tags.map((tagName, i) => <Tag key={i} name={tagName}/>)}
        </div>
      </header>

      <MdxContent source={post.content}/>
    </article>
  );
}
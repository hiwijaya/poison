import { notFound } from "next/navigation";
import { getAllTags, getPostByTag } from "@/lib/api";
import { PostMeta } from "@/lib/types";
import PostCard from "@/components/PostCard";


export function generateStaticParams() {
  return getAllTags().map(tag => ({ name: tag }));
}

export default async function TagSearchPage({ params }: { params: Promise<{ name: string }> }) {

  const { name } = await params;
  const posts: PostMeta[] = getPostByTag(name);
  if(!posts || posts.length === 0){
    notFound();
  }

  return(
    <div className="my-16">
      <h1 className="text-highlight font-bold mb-6">{`Tag: ${name}`}</h1>
      <div className="grid grid-cols-1 gap-8 xs:gap-6 mb-12">
        {
          posts.map(post => <PostCard key={post.slug} post={post}/>) 
        }
      </div>
    </div>
  );
}
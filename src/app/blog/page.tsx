import { notFound } from "next/navigation";
import Paging from "@/components/Paging";
import PostCard from "@/components/PostCard";
import { getPaginationPosts } from "@/lib/api";


type BlogPageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function Blog({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const page = Number(params.page ?? 1);
  const perPage = 5;

  if(Number.isNaN(page) || page < 1) {
    notFound();
  }

  const { posts, pagination } = getPaginationPosts(page, perPage);

  if(page > pagination.totalPages) {
    notFound();
  }

  return(
    <div className="my-16">
      <h1 className="text-highlight mb-6">BLOG</h1>
      <div className="grid grid-cols-1 gap-8 xs:gap-6 mb-12">
        {
          posts.map(post => <PostCard key={post.slug} post={post}/>) 
        }
      </div>
      <Paging 
        page={pagination.page} 
        totalPages={pagination.totalPages}/>
    </div>
  );
}
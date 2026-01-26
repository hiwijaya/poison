import Link from "next/link";
import PostCard from "@/components/PostCard";
import RedirectButton from "@/components/RedirectButton";
import { getRecentPosts } from "@/lib/api";


export default function Home() {

  const renderRecentPosts = () => (
    <div className="my-16">
      <div className="text-highlight mb-6">RECENT POSTS</div>
      <div className="grid grid-cols-1 gap-8 xs:gap-6 mb-6">
        { getRecentPosts().map(post => <PostCard key={post.slug} post={post}/>) }
      </div>
      <Link href="/blog" className="inline-flex text-primary">More posts</Link>
    </div>
  );

  return (
    <div className="mt-12">
      <h1 className="font-heading text-primary text-xl mb-6">A venomous template</h1>
      <p className="mb-4">
        Crafted for those who write codes with purpose. Clean, fast, and unapologetically sharp, 
        it blends minimal design with bold personality—letting your work speak louder than the noise. 
        Built for developers who don't just build products, but leave a lasting bite.
      </p>
      <RedirectButton href="https://github.com/hiwijaya/poison">START NOW</RedirectButton>

      {renderRecentPosts()}
    </div>
  );
}

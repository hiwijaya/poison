import { PostMeta } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";


interface PostCardProps {
  post: PostMeta
}

export default function PostCard({ post }: PostCardProps) {
  return(
    <article className="flex flex-col xs:flex-row space-y-2 xs:space-y-0 xs:space-x-4">
      <Image className="w-full xs:w-52 sm:w-60 rounded-2xl object-contain" 
        src={post.cover} alt={post.title} width={1024} height={576}/>
      <div className="min-w-0">
        <time dateTime={post.date} className="text-xs">{moment(post.date).format('MMMM DD, YYYY')}</time>
        <h2 className="text-lg font-bold text-highlight truncate">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>
        <p className="text-xs line-clamp-2 my-2">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="flex flex-row text-xs text-primary">
          Read more
        </Link>
      </div>
    </article>
  );
}
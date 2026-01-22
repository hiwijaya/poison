import { PostMeta } from "@/lib/types";
import Image from "next/image";


interface PostCardProps {
  post: PostMeta
}

export default function PostCard({ post }: PostCardProps) {
  return(
    <article className="flex flex-col xs:flex-row space-y-2 xs:space-x-4">
      <Image className="w-full xs:w-48 rounded-2xl object-contain" src={post.cover} alt={post.title} 
        width={1024} height={576}/>
      <div className="min-w-0">
        <h2 className="font-bold text-highlight cursor-pointer truncate mb-2">{post.title}</h2>
        <time className="text-xs">{post.date}</time>
        <span className="mx-2">&middot;</span>
        <ul className="inline-flex space-x-2">
          {post.tags.map((tag, i) => (
            <li key={i} className="text-xs px-4 py-1 rounded-full]">{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
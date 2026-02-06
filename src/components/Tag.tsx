import Link from "next/link";

interface TagProps {
  name: string
}

export default function Tag({ name }: TagProps) {
  return (
    <Link href={`/tag/${name}`}
      className="bg-[#242E28] text-foreground! text-xs px-4 py-1.5 rounded-full">{name}</Link>
  );
}
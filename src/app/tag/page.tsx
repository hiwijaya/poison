import Tag from "@/components/Tag";
import { getAllTags } from "@/lib/api";

export default function TagPage() {
  const tags = getAllTags();

  return(
    <div className="my-16">
      <h1 className="text-highlight font-bold mb-6">TAGS</h1>
      <div className="flex flex-wrap gap-2">
        { tags.map((tagName, i) => <Tag key={i} name={tagName}/>) }
      </div>
    </div>
  );
}
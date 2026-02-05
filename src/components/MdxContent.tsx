import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { useMDXComponents } from "@/mdx-components";


export default function MdxContent({ source }: { source: string }) {
  const mdxComponents = useMDXComponents({});

  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            rehypeAutolinkHeadings,
            [
              rehypePrettyCode,
              {
                theme: 'github-dark',
                keepBackground: false,
              },
            ],
          ],
        },
      }}
      components={mdxComponents}
    />
  )
}
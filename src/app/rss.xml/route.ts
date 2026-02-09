import { getAllPosts } from "@/lib/api";

const SITE_URL = "https://venomous-template.vercel.app";

export async function GET() {
  const posts = getAllPosts();

  const items = posts.map(post => {
    const postUrl = `${SITE_URL}/blog/${post.slug}`;
    return `<item>
        <title><![CDATA[${post.title}]]></title>
        <link>${postUrl}</link>
        <guid>${postUrl}</guid>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <description><![CDATA[${post.excerpt}]]></description>
      </item>`;
  }).join('');

  const rss =
  `<?xml version="1.0" encoding="UTF-8"?>
  <rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
    <channel>
      <title>Poison — a venomous template</title>
      <link>${SITE_URL}</link>
      <description>Developer portfolio and blog template designed for creators who value clarity, performance, and character.</description>
      <language>en</language>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <atom:link
        href="${SITE_URL}/rss.xml"
        rel="self"
        type="application/rss+xml"/>
      ${items}
    </channel>
  </rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml"
    },
  });
}
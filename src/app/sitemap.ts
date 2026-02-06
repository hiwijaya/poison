import { MetadataRoute } from "next";
import { getAllPosts, getAllTags } from "@/lib/api";

const SITE_URL = "https://venomous-template.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts();
    const tags = getAllTags();

    const postMaps = posts.map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "weekly" as const,
        priority: 0.7
    }));

    const tagMaps = tags.map(tag => ({
        url: `${SITE_URL}/tag/${tag}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.6
    }));
    
    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9
        },
        {
            url: `${SITE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: `${SITE_URL}/tag`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.6
        },
        ...postMaps,
        ...tagMaps
    ];
}
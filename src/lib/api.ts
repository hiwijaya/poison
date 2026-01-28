import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post, PostMeta } from "./types";

export const POSTS_DIR = path.join(process.cwd(), 'src/posts');
export const ASSETS_BASE = '/assets/blog';

type postPagination = {
  posts: PostMeta[]
  pagination: {
    page: number
    perPage: number
    total: number
    totalPages: number
  }
};

function getAllPostFiles(): string[] {
  return fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md'));
}

function parsePost(fileName: string): Post {
  const fullPath = path.join(POSTS_DIR, fileName);
  const file = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(file);

  const slug = data.slug;
  
  const meta: PostMeta = {
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    tags: data.tags ?? [],
    author: data.author,
    slug,
    cover: `${ASSETS_BASE}/${slug}/${data.cover}`
  };

  return { meta, content };
}

function sortByDateDesc(posts: PostMeta[]): PostMeta[] {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}


export function getRecentPosts(limit = 3): PostMeta[] {
  return sortByDateDesc(
    getAllPostFiles().map((file) => {
      const { meta } = parsePost(file);
      return meta;
    })
  ).slice(0, limit);
}

export function getAllPosts(page: number = 1, perPage: number = 5): postPagination {

  const allPosts = sortByDateDesc(
    getAllPostFiles().map((file) => {
      const { meta } = parsePost(file);
      return meta;
    })
  );

  const total = allPosts.length;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const end = start + perPage;

  return {
    posts: allPosts.slice(start, end),
    pagination: {
      page,
      perPage,
      total,
      totalPages,
    },
  };
}

export function getPostBySlug(slug: string): Post | null {
  const file = getAllPostFiles()
    .find(file => parsePost(file).meta.slug === slug);

  if (!file) return null;

  return parsePost(file);
}

export function getPostByTag(tag: string): PostMeta[] {
  return sortByDateDesc(
    getAllPostFiles()
      .map((file) => {
        const { meta } = parsePost(file);
        return meta;
      })
      .filter((post) => post.tags.includes(tag))
  );
}

export function getAllTags(): string[] {
  const tags = new Set<string>();

  getAllPostFiles().forEach((file) => {
    const { meta } = parsePost(file);
    meta.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}

export interface PostMeta {
  title: string
  date: string
  excerpt: string
  tags: string[]
  author: string
  slug: string
  cover: string | null
};

export interface Post {
  meta: PostMeta
  content: string
}

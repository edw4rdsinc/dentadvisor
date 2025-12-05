import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: 'n1pctdd7',
  dataset: 'production',
  apiVersion: '2024-12-05',
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

// Types
export interface Category {
  _id: string
  title: string
  slug: { current: string }
  description?: string
}

export interface Source {
  _key: string
  name: string
  description?: string
  url?: string
}

export interface Whitepaper {
  _id: string
  title: string
  slug: { current: string }
  description: string
  summary?: string
  content: any[]
  sources?: Source[]
  categories?: Category[]
  tags?: string[]
  author: string
  publishedAt: string
  order?: number
}

export interface Blog {
  _id: string
  title: string
  slug: { current: string }
  description: string
  content: any[]
  parentWhitepaper?: {
    _id: string
    title: string
    slug: { current: string }
  }
  tags?: string[]
  author: string
  publishedAt: string
}

// Queries
export async function getPublishedWhitepapers(): Promise<Whitepaper[]> {
  return sanityClient.fetch(`
    *[_type == "whitepaper" && publishedAt <= now()] | order(order asc, publishedAt desc) {
      _id,
      title,
      slug,
      description,
      summary,
      author,
      publishedAt,
      tags,
      order,
      categories[]->{ _id, title, slug }
    }
  `)
}

export async function getWhitepaperBySlug(slug: string): Promise<Whitepaper | null> {
  return sanityClient.fetch(`
    *[_type == "whitepaper" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      summary,
      content,
      sources,
      author,
      publishedAt,
      tags,
      categories[]->{ _id, title, slug }
    }
  `, { slug })
}

export async function getPublishedBlogs(): Promise<Blog[]> {
  return sanityClient.fetch(`
    *[_type == "blog" && publishedAt <= now()] | order(publishedAt desc) {
      _id,
      title,
      slug,
      description,
      author,
      publishedAt,
      tags,
      parentWhitepaper->{ _id, title, slug }
    }
  `)
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  return sanityClient.fetch(`
    *[_type == "blog" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      content,
      author,
      publishedAt,
      tags,
      parentWhitepaper->{ _id, title, slug }
    }
  `, { slug })
}

export async function getBlogsByWhitepaper(whitepaperSlug: string): Promise<Blog[]> {
  return sanityClient.fetch(`
    *[_type == "blog" && parentWhitepaper->slug.current == $slug && publishedAt <= now()] | order(publishedAt desc) {
      _id,
      title,
      slug,
      description,
      author,
      publishedAt,
      tags
    }
  `, { slug: whitepaperSlug })
}

export async function getAllCategories(): Promise<Category[]> {
  return sanityClient.fetch(`
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description
    }
  `)
}

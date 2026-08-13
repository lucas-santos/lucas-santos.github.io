import { DEVTO_USERNAME } from "@/lib/constants";

export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  coverImage: string | null;
  publishedAt: string;
  readingTimeMinutes: number;
  tags: string[];
}

interface DevToApiArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  social_image: string | null;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
}

export async function getDevToArticles(): Promise<DevToArticle[]> {
  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${DEVTO_USERNAME}`,
    );

    if (!res.ok) {
      throw new Error(`dev.to API responded with ${res.status}`);
    }

    const articles: DevToApiArticle[] = await res.json();

    return articles.map((article) => ({
      id: article.id,
      title: article.title,
      description: article.description,
      url: article.url,
      coverImage: article.cover_image || article.social_image || null,
      publishedAt: article.published_at,
      readingTimeMinutes: article.reading_time_minutes,
      tags: article.tag_list,
    }));
  } catch (error) {
    console.error("Failed to fetch dev.to articles:", error);
    return [];
  }
}

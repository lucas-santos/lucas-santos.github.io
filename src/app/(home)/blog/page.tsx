import type { Metadata } from "next";
import Image from "next/image";

import PageTitle from "@/components/page-title";

import Balancer from "react-wrap-balancer";

import config from "@/config";

import { getDevToArticles } from "@/lib/api/devto";

import { cn } from "@/lib/utils";

import styles from "@/styles/blog.module.css";

export const dynamic = "force-static";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Blog | ${config.title}`,
    description: config.description,
  };
}

export default async function Blog() {
  const posts = await getDevToArticles();

  return (
    <article>
      <PageTitle title="Blog" />

      <p className="mb-6 text-sm text-light-gray">
        Posts published on{" "}
        <a
          href="https://dev.to/lucassantos_dev"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          dev.to
        </a>
        .
      </p>

      <section className={cn(styles.blog)}>
        <ul className={cn(styles.cards)}>
          {posts.map((post) => (
            <li className={cn(styles.card)} key={post.id}>
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                <figure className={cn(styles.bannerBox)}>
                  <Image
                    src={
                      post.coverImage ||
                      "https://lucas-santos.github.io/images/opengraph-image"
                    }
                    alt={post.title}
                    width={960}
                    height={540}
                    priority={false}
                    loading="eager"
                    unoptimized
                  />
                </figure>
                <div className={cn(styles.content)}>
                  <div className={cn(styles.meta)}>
                    {post.tags.length > 0 && (
                      <p className={cn(styles.category)}>
                        {post.tags[0].toUpperCase()}
                      </p>
                    )}
                    <h3 className={cn(styles.title)}>
                      <Balancer>{post.title}</Balancer>
                    </h3>
                  </div>
                  <time className={cn(styles.date)} dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString("en-us", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {posts.length === 0 && (
          <p className="text-sm text-light-gray">
            Couldn&apos;t load posts from dev.to right now. Check back later
            or visit{" "}
            <a
              href="https://dev.to/lucassantos_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              dev.to/lucassantos_dev
            </a>{" "}
            directly.
          </p>
        )}
      </section>
    </article>
  );
}

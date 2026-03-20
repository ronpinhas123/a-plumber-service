import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Tag, ArrowRight, ArrowLeft } from "lucide-react";
import { buildBlogMetadata } from "@/lib/metadata";
import { getPostBySlug, getPostSlugs, getRelatedPosts } from "@/data/blog-posts";
import { services } from "@/data/services";
import { unsplashUrl } from "@/lib/images";
import { formatDate } from "@/lib/utils";
import CTABanner from "@/components/sections/CTABanner";
import OptimizedImage from "@/components/ui/OptimizedImage";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getPostSlugs();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return buildBlogMetadata(post);
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const relatedPosts = getRelatedPosts(post.relatedPosts);
  const relatedService = post.relatedService
    ? services.find((s) => s.slug === post.relatedService)
    : null;

  return (
    <>
      <ArticleSchema post={post} />
      <BreadcrumbSchema items={[
        { name: "Blog", href: "/blog" },
        { name: post.title, href: `/blog/${post.slug}` },
      ]} />

      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] mt-[73px]">
        <OptimizedImage
          src={unsplashUrl(post.imageId, 1600)}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span className="text-white/70 text-sm flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.publishedAt)}
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-white py-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]} />
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose-content" dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>').replace(/## /g, '<h2>').replace(/### /g, '<h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>') }} />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* CTA within post */}
              <div className="mt-10 bg-navy rounded-2xl p-8 text-center">
                <h3 className="font-serif text-xl font-bold text-white mb-3">Ready to Get Started?</h3>
                <p className="text-white/70 text-sm mb-5">
                  Get a free estimate from A Plumber Service — Houston&apos;s trusted licensed plumbers.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-bold px-8 py-3 rounded-lg transition-colors"
                >
                  Get a Free Estimate <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h3 className="font-serif text-xl font-bold text-navy mb-6">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group flex gap-4 bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
                      >
                        <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <OptimizedImage
                            src={unsplashUrl(related.imageId, 160)}
                            alt={related.title}
                            fill
                            sizes="80px"
                          />
                        </div>
                        <div>
                          <p className="text-xs text-gold font-semibold mb-1">{related.category}</p>
                          <h4 className="font-semibold text-navy text-sm group-hover:text-gold transition-colors line-clamp-2 leading-snug">
                            {related.title}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8">
                <Link href="/blog" className="flex items-center gap-2 text-navy hover:text-gold font-semibold text-sm transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Back to All Articles
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact CTA */}
                <div className="bg-gold rounded-2xl p-6 text-center">
                  <h4 className="font-serif text-lg font-bold text-navy mb-2">Free Estimate</h4>
                  <p className="text-navy/70 text-xs mb-4">Get a free in-home estimate today.</p>
                  <Link
                    href="/contact"
                    className="block bg-navy text-white font-bold py-3 rounded-lg text-sm hover:bg-navy-light transition-colors"
                  >
                    Contact Us
                  </Link>
                  <a
                    href="tel:+17139556664"
                    className="block mt-2 text-navy font-semibold text-sm hover:text-navy-dark transition-colors"
                  >
                    (713) 955-6664
                  </a>
                </div>

                {/* Related Service */}
                {relatedService && (
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <h4 className="font-semibold text-navy text-sm mb-3">Related Service</h4>
                    <Link
                      href={`/services/${relatedService.slug}`}
                      className="group block"
                    >
                      <div className="relative h-32 rounded-xl overflow-hidden mb-3">
                        <OptimizedImage
                          src={unsplashUrl(relatedService.imageId, 400)}
                          alt={relatedService.name}
                          fill
                          sizes="200px"
                        />
                      </div>
                      <p className="font-semibold text-navy text-sm group-hover:text-gold transition-colors">
                        {relatedService.name}
                      </p>
                      <p className="text-gray-500 text-xs mt-1 line-clamp-2">{relatedService.description}</p>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  );
}

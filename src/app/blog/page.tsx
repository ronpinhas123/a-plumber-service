import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import { buildBlogIndexMetadata } from "@/lib/metadata";
import { blogPosts } from "@/data/blog-posts";
import { unsplashUrl } from "@/lib/images";
import { formatDate } from "@/lib/utils";
import HeroSection from "@/components/sections/HeroSection";
import CTABanner from "@/components/sections/CTABanner";
import SectionHeading from "@/components/ui/SectionHeading";
import OptimizedImage from "@/components/ui/OptimizedImage";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = buildBlogIndexMetadata();

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Blog", href: "/blog" }]} />

      <HeroSection
        headline="Plumbing Tips & Advice for Houston Homeowners"
        subheadline="Expert tips, cost guides, and plumbing advice from A Plumber Service — Houston's trusted licensed plumbers."
        imageId="photo-1484154218962-a197022b5858"
        imageAlt="Plumbing tips and advice for Houston homeowners"
        minHeight="min-h-[55vh]"
        overlay={65}
        badges={["Expert Advice", "Houston TX", "Free Guides"]}
      />

      <div className="bg-white py-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Blog" }]} />
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <SectionHeading
              eyebrow="Our Blog"
              title="Expert Home Improvement Advice"
              subtitle="Houston homeowners trust A Plumber Service for honest advice on plumbing repairs, maintenance, and protecting their home's plumbing system."
            />
          </div>

          {/* Featured Post */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 mb-10 border border-gray-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-72 lg:h-auto">
                  <OptimizedImage
                    src={unsplashUrl(featured.imageId, 800)}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5 bg-gold/10 text-gold font-semibold px-3 py-1 rounded-full">
                      <Tag className="w-3 h-3" />
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(featured.publishedAt)}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-4 group-hover:text-gold transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-2 text-gold font-semibold">
                    Read Full Article <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Other Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="relative h-44 overflow-hidden">
                  <OptimizedImage
                    src={unsplashUrl(post.imageId, 600)}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-gold text-navy text-xs font-bold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(post.publishedAt)}
                  </div>
                  <h3 className="font-serif text-base font-bold text-navy mb-3 line-clamp-2 group-hover:text-gold transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-1.5 text-gold font-semibold text-xs">
                    Read More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

import { notFound } from 'next/navigation';
import NewsOpen from '@/components/NewsOpen';
import { getNews, NEWS } from '@/lib/news';

export function generateStaticParams() {
    return NEWS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = getNews(slug);
    if (!post) return { title: 'Patch notes — Florida RP' };
    return {
        title: `${post.version} · ${post.title} — Florida RP`,
        description: post.excerpt,
    };
}

export default async function NewsPage({ params }) {
    const { slug } = await params;
    const post = getNews(slug);
    if (!post) notFound();
    return <NewsOpen post={post} />;
}

import Markdown from 'markdown-to-jsx'
import { getPostContent, getPostMetadata } from '@/utils/postUtils'
import { PostMetadataProps } from '@/components/PostCard'
import { Metadata, ResolvingMetadata } from 'next'

export const generateStaticParams = async () => {
    const posts = getPostMetadata('posts')
    return posts.map((post) => ({slug: post.slug}))
}

type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const param = await params;
    const id = param?.slug ? ' | ' +  param?.slug : '';

    return {
        title: `Redlab QE ${id.replaceAll('_', ' ')}`
    }
}

export default async function Page({ params }: {
  params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const post = getPostContent(slug);

    return (
        <main>
            <article>
                <Markdown>{post}</Markdown>
            </article>
        </main>
    );
}
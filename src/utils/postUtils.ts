import fs from 'fs'
import matter from 'gray-matter'

export type PostMetadataType = {
    title: string;
    description: string;
    author: string;
    slug: string;
}

export const getPostMetadata = (basePath: string): PostMetadataType[] => {
    const folder = basePath + '/';
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter(file => file.endsWith('.md'));

    // get file data
    const posts: PostMetadataType[] = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8');
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            description: matterResult.data.description,
            author: matterResult.data.author,
            slug: filename.replace('.md', '')
        }
    });
    return posts;
}

export const getPostContent = (slug: string): string => {
    const file = `posts/${slug}.md`
    const content = fs.readFileSync(file, 'utf-8');

    const matterResult = matter(content);
    return matterResult.content;
}